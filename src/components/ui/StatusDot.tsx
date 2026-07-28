import styles from "@/styles/StatusDot.module.scss";

/**
 * Pulsing availability dot. Shared by Nav (sm) and InfoCard (lg).
 *
 * Takes its color from `currentColor`, so the parent's text-color
 * utility drives it — the component never names a color itself.
 * Decorative: the adjacent label carries the meaning, so it's
 * hidden from assistive tech.
 */
export function StatusDot({ size }: { size: "sm" | "lg" }) {
  const dimension = size === "sm" ? "var(--size-dot-sm)" : "var(--size-dot-lg)";

  return (
    <span
      aria-hidden="true"
      className={`${styles.dot} rounded-full`}
      style={{ width: dimension, height: dimension }}
    />
  );
}
