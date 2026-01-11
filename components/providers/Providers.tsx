"use client";

import { ThemeProvider } from "./ThemeProvider";
import Enhancements from "./Enhancements";
import ClientOnly from "./ClientOnly";
import { CursorProvider } from "@/components/cursor/CursorContext";
import CustomCursor from "../cursor/CustomCursor";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {/* <Enhancements>
        <CursorProvider>
          <ClientOnly>
            <CustomCursor /> */}
            {children}
          {/* </ClientOnly>
        </CursorProvider>
      </Enhancements> */}
    </ThemeProvider>
  );
}
