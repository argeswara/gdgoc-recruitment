const BACKGROUNDS = {
  white: "bg-white",
  surface: "bg-surface",
  warm: "bg-warm",
  mint: "bg-mint",
};

export default function Section({ id, bg = "white", className = "", children }) {
  return (
    <section id={id} className={`${BACKGROUNDS[bg]} py-12 lg:py-20`}>
      <div className={`mx-auto max-w-[1248px] px-6 lg:px-0 ${className}`}>
        {children}
      </div>
    </section>
  );
}