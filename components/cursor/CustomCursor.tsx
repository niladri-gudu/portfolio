"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useCursor } from "./CursorContext";

export default function CustomCursor() {
  const { isActive } = useCursor();
  const [isEnabled, setIsEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const scale = useSpring(1, { damping: 25, stiffness: 250 });

  useEffect(() => {
    scale.set(isActive ? 3 : 1);
  }, [isActive, scale]);

  useEffect(() => {
    const checkDevice = () => {
      const isMouse = window.matchMedia("(pointer: fine)").matches;
      setIsEnabled(isMouse);
    };

    checkDevice();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkDevice);
    };
  }, [mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <motion.div
      className="
        fixed top-0 left-0 z-[9999]
        w-4 h-4 rounded-full
        bg-white mix-blend-difference
        pointer-events-none
      "
      style={{
        x: smoothX,
        y: smoothY,
        scale,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
