import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export default function StatCard({ title, value, subtitle, icon: Icon, }) {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-semibold text-slate-600", children: title }), Icon ? _jsx(Icon, { className: "h-5 w-5" }) : null] }), _jsx("p", { className: "mt-2 text-3xl font-bold tracking-tight text-slate-900", children: value }), subtitle ? (_jsx("p", { className: "mt-1 text-xs text-slate-500", children: subtitle })) : null] }));
}
