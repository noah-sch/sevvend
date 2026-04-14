type TopBlurOverlayProps = {
  height?: number; // en px
};

export default function TopBlurOverlay({ height = 64 }: TopBlurOverlayProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full pointer-events-none z-30"
      style={{ height }}
    >
      <div
        className="w-full h-full backdrop-blur-xs backdrop"
        style={{
            maskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.9) 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.9) 60%, transparent 100%)",
        }}
      />
    </div>
  );
}