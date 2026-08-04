export function VansMark({ size = 230 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 230 230" fill="none">
      <circle cx="115" cy="115" r="114.5" stroke="var(--color-line-strong)" strokeWidth="1" />
      <circle cx="115" cy="115" r="75" stroke="var(--color-accent)" strokeWidth="1" />
      <circle cx="115" cy="115" r="29" fill="var(--color-accent)" fillOpacity="0.5" />
    </svg>
  );
}
