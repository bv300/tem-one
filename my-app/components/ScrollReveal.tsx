"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealOptions = {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
};

type ScrollRevealProps = RevealOptions & {
  children: ReactNode;
  className?: string;
  variant?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-out"
    | "flip-up";
  duration?: "slow" | "fast";
  delay?: number;
};

export function useScrollReveal({
  threshold = 0.15,
  once = true,
  rootMargin = "0px 0px -50px 0px",
}: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return [ref, isVisible] as const;
}

export function useStaggeredReveal(
  options: RevealOptions & { staggerMs?: number } = {},
) {
  const { staggerMs = 80, ...revealOptions } = options;
  const [ref, isVisible] = useScrollReveal(revealOptions);
  const getDelay = (index: number): CSSProperties => ({
    transitionDelay: `${index * staggerMs}ms`,
  });

  return [ref, isVisible, getDelay] as const;
}

export function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  duration,
  delay,
  threshold,
  once,
  rootMargin,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal({ threshold, once, rootMargin });
  const style =
    delay === undefined ? undefined : { transitionDelay: `${delay}ms` };
  const classes = [
    "reveal",
    variant,
    duration && `duration-${duration}`,
    isVisible && "is-visible",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
