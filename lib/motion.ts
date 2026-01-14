export const pressableSoft = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 400, damping: 30 },
} as const;

export const pressableSnappy = {
  whileHover: { scale: 1.08 },
  whileTap: { scale: 0.9 },
  transition: { type: "spring", stiffness: 600, damping: 18 },
} as const;