"use client"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react" 

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 300, mass: 1 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const checkDevice = () => {
      const isMouse = window.matchMedia("(pointer: fine)").matches
      
      setIsEnabled(isMouse)
    }

    checkDevice()

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    // Re-check if user plugs in a mouse or changes orientation
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkDevice)
    }
  }, [mouseX, mouseY])

  if (!isEnabled) return null

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  )
}