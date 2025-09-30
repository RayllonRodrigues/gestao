import { jsx as _jsx } from "react/jsx-runtime";
export default function Pill({ text }) {
    return (_jsx("span", { className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm", children: text }));
}
