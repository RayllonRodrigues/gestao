import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function LegendBadge({ label, className = "" }) {
    return (_jsxs("div", { className: `flex items-center gap-2 ${className}`, children: [_jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-slate-900" }), _jsx("span", { className: "text-xs text-slate-600", children: label })] }));
}
