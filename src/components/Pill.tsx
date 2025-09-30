
export default function Pill({ text }: { text: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
    >
      {text}
    </span>
  );
}
