"use client";

import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  hover = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      controls.set({ opacity: 1, y: 0 });
      return;
    }

    controls.set({ opacity: 0, y: 14 });
  }, [controls, prefersReducedMotion]);

  useEffect(() => {
    if (!isInView) return;

    controls.start({
      opacity: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] },
    });
  }, [controls, delay, isInView, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={controls}
      whileHover={hover && !prefersReducedMotion ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn("min-w-0", className)}
    >
      {children}
    </motion.div>
  );
}
