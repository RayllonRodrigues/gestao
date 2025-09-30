
export default function LegendBadge({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
      <span className="text-xs text-slate-600">{label}</span>
    </div>
  );
}
