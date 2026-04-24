export default function SectionHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children}</div>;
}
