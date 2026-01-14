"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type TimeParts = {
  hh: string;
  mm: string;
  ss: string;
  ap: string; // AM / PM
};

function AnimatedPart({
  value,
  animateKey,
  widthClass,
}: {
  value: string;
  animateKey: string; // changes ONLY when we want animation
  widthClass: string;
}) {
  return (
    <span className={`relative inline-block ${widthClass} tabular-nums`}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={animateKey}
          initial={{ opacity: 0, y: 3, filter: "blur(1px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -3, filter: "blur(1px)" }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function LiveClock() {
  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  }, []);

  const [parts, setParts] = useState<TimeParts>({
    hh: "00",
    mm: "00",
    ss: "00",
    ap: "AM",
  });

  // store previous parts so we know what changed
  const prevRef = useRef(parts);

  // animation keys: update ONLY when that segment changes
  const [keys, setKeys] = useState({
    hh: "hh",
    mm: "mm",
    ss: "ss",
    ap: "ap",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const p = formatter.formatToParts(now);

      const next: TimeParts = {
        hh: p.find((x) => x.type === "hour")?.value ?? "00",
        mm: p.find((x) => x.type === "minute")?.value ?? "00",
        ss: p.find((x) => x.type === "second")?.value ?? "00",
        ap: p.find((x) => x.type === "dayPeriod")?.value ?? "AM",
      };

      const prev = prevRef.current;

      // update animation keys ONLY for changed segments
      setKeys((k) => ({
        hh: next.hh !== prev.hh ? `hh-${next.hh}` : k.hh,
        mm: next.mm !== prev.mm ? `mm-${next.mm}` : k.mm,
        ss: next.ss !== prev.ss ? `ss-${next.ss}` : k.ss,
        ap: next.ap !== prev.ap ? `ap-${next.ap}` : k.ap,
      }));

      prevRef.current = next;
      setParts(next);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [formatter]);

  return (
  <span className="inline-flex items-center tabular-nums">
    <AnimatedPart value={parts.hh} animateKey={keys.hh} widthClass="w-[2ch]" />

    <span className="ml-1 opacity-60">:</span>

    <AnimatedPart value={parts.mm} animateKey={keys.mm} widthClass="w-[2ch]" />

    <span className="ml-1 opacity-60">:</span>

    <AnimatedPart value={parts.ss} animateKey={keys.ss} widthClass="w-[2ch]" />

    <span className="ml-2">
      <AnimatedPart value={parts.ap} animateKey={keys.ap} widthClass="w-[2.5ch]" />
    </span>
  </span>
);

}
