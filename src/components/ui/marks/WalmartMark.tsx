export function WalmartMark() {
  const cell = 66.67;
  const gap = 15;
  const step = cell + gap;
  const cells = [
    { r: 0, c: 0, fill: null },
    { r: 0, c: 1, fill: "var(--color-accent)", opacity: 1 },
    { r: 0, c: 2, fill: null },
    { r: 1, c: 0, fill: null },
    { r: 1, c: 1, fill: null },
    { r: 1, c: 2, fill: null },
    { r: 2, c: 0, fill: "var(--color-accent)", opacity: 0.45 },
    { r: 2, c: 1, fill: null },
    { r: 2, c: 2, fill: null },
  ];
  return (
    <svg viewBox="0 0 230 230" fill="none" aria-hidden="true" className="h-full w-full">
      {cells.map((cell_, i) => (
        <rect
          key={i}
          x={cell_.c * step} y={cell_.r * step} width={cell} height={cell}
          stroke={cell_.fill ? "none" : "var(--color-line-strong)"} strokeWidth="1"
          fill={cell_.fill ?? "none"} fillOpacity={cell_.opacity ?? 1}
        />
      ))}
    </svg>
  );
}
