export function UniwatchMark({ size = 230 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 230 230" fill="none">
      <rect x="0" y="30" width="168" height="168" stroke="var(--color-line-strong)" strokeWidth="1" />
      <rect x="37" y="0" width="168" height="168" stroke="var(--color-line-strong)" strokeWidth="1" />
      <rect x="67" y="67" width="100" height="2" fill="var(--color-accent)" />
      <rect x="67" y="67" width="2" height="100" fill="var(--color-accent)" />
      <circle cx="117" cy="117" r="10" fill="var(--color-accent)" />
    </svg>
  );
}
