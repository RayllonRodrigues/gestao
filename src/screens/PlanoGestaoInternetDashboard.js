import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Activity, CircleCheck, CircleDashed, CircleDot, Network, Server, ShieldCheck, TrendingUp, Wifi } from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, ReferenceArea, ReferenceDot, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts";
/* ---------- LAYOUT & UI ---------- */
const Layout = ({ children }) => (_jsxs("div", { className: "mx-auto max-w-7xl p-0 sm:p-6", children: [_jsxs("div", { className: "rounded-b-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 p-8 text-white shadow-md", children: [_jsx("h1", { className: "text-3xl font-bold drop-shadow-sm", children: "Plano de Gest\u00E3o \u2014 Cla\u00FAdio Galv\u00E3o (2022 - 2025)" }), _jsxs("div", { className: "mt-4 flex flex-wrap gap-3", children: [_jsx(Badge, { text: "" }), _jsx(Badge, { text: "" }), _jsx(Badge, { text: "" }), _jsx(Badge, { text: "" })] })] }), _jsx("div", { className: "-mt-6 sm:-mt-10 px-4 sm:px-0", children: children })] }));
const Badge = ({ text }) => (_jsx("span", { className: "inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur ring-1 ring-white/30 shadow-sm", children: text }));
const Tag = ({ children, color = "indigo", }) => (_jsx("span", { className: `inline-flex items-center rounded-full bg-${color}-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-${color}-700`, children: children }));
const StatCard = ({ title, value, subtitle, icon: Icon, gradient }) => (_jsxs(motion.div, { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.35 }, className: "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [gradient ? (_jsx("div", { className: `pointer-events-none absolute inset-0 opacity-10 ${gradient}` })) : null, _jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-semibold text-slate-700", children: title }), Icon ? _jsx(Icon, { className: "h-5 w-5 text-slate-700" }) : null] }), _jsx("p", { className: "mt-3 text-3xl font-extrabold tracking-tight text-slate-900", children: value }), subtitle ? (_jsx("p", { className: "mt-1.5 text-xs text-slate-600", children: subtitle })) : null] })] }));
const LegendBadge = ({ label, colorClass, }) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: `h-2.5 w-2.5 rounded-full ${colorClass}` }), _jsx("span", { className: "text-xs text-slate-600", children: label })] }));
const serie = [
    { ano: "2018", rnp: 100, secundario: 50, gestao: "Gestão Anterior" },
    { ano: "2019", rnp: 100, secundario: 50, gestao: "Gestão Anterior" },
    { ano: "2020", rnp: 100, secundario: 50, gestao: "Gestão Anterior" },
    { ano: "2021", rnp: 100, secundario: 50, gestao: "Gestão Anterior" },
    { ano: "2022", rnp: 100, secundario: 50, gestao: "Transição 2022" },
    { ano: "2023", rnp: 100, secundario: 200, gestao: "Cláudio Galvão" },
    { ano: "2024", rnp: 100, secundario: 200, gestao: "Cláudio Galvão" },
    { ano: "2025", rnp: 1000, secundario: 200, gestao: "Cláudio Galvão" },
];
// Dados do gráfico com TOTAL
const dataChart = serie.map((p) => ({ ...p, total: p.rnp + p.secundario }));
const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length)
        return null;
    const p = payload[0].payload;
    return (_jsxs("div", { className: "rounded-md border border-slate-200 bg-white p-3 text-xs shadow", children: [_jsxs("div", { className: "font-semibold text-slate-700", children: ["Ano: ", label] }), _jsxs("div", { className: "text-slate-600", children: ["Gest\u00E3o: ", p.gestao] }), _jsxs("div", { className: "mt-1.5 space-y-0.5", children: [_jsxs("div", { children: ["RNP (principal): ", _jsxs("strong", { children: [p.rnp, " Mbps"] })] }), _jsxs("div", { children: ["Secund\u00E1rio (Oi/TLB): ", _jsxs("strong", { children: [p.secundario, " Mbps"] })] }), _jsxs("div", { className: "pt-1 border-t text-slate-700", children: ["Total: ", _jsxs("strong", { children: [p.total, " Mbps"] })] })] })] }));
};
const milestones = [
    { when: "2024", title: "Substituição Oi → TLB (200 Mbps)", detail: "Contingência quadruplicada.", icon: Network },
    { when: "Início de 2025", title: "Upgrade RNP para 1 Gbps", detail: "Aumento de 100 → 1000 Mbps no link principal.", icon: TrendingUp },
    { when: "2025", title: "Infraestrutura e novos blocos", detail: "Switches, cabeamento e fibra p/ C, D e Astrofísica.", icon: Server },
];
const etapas = [
    { id: 1, nome: "Upgrade dos Links", progresso: 100, cor: "bg-emerald-500", icon: CircleCheck, detalhe: "RNP 1 Gbps (início de 2025) + TLB 200 Mbps" },
    { id: 2, nome: "Cobertura Wi-Fi (40 APs)", progresso: 50, cor: "bg-amber-500", icon: CircleDot, detalhe: "50% — aguardando materiais permanentes (SEI 23235.013872/2023-84)" },
    { id: 3, nome: "Infraestrutura e Novos Blocos", progresso: 0, cor: "bg-slate-400", icon: CircleDashed, detalhe: "Início após entrega de switches/cabeamento" },
];
const metasAraguatins = [
    { key: "controlador_wireless", label: "Controlador de rede sem fio (corp.)", meta: 1 },
    { key: "ap_wifi6", label: "Access Point Wi-Fi 6 (802.11ax)", meta: 40 },
    { key: "poe_injetor", label: "Injetor PoE 30W", meta: 40 },
    { key: "guia_cabos_1u", label: "Guia de cabos horizontal 1U CAT6", meta: 30 },
    { key: "caixa_cat6_305m", label: "Caixa de cabo U/UTP CAT6 — 305 m", meta: 30 },
    { key: "patch_1m5", label: "Patch Cord CAT6 — 1,5 m", meta: 50 },
    { key: "patch_2m5", label: "Patch Cord CAT6 — 2,5 m", meta: 50 },
    { key: "patch_3m", label: "Patch Cord CAT6 — 3 m", meta: 60 },
    { key: "patch_5m", label: "Patch Cord CAT6 — 5 m", meta: 0 },
    { key: "rj45_femea", label: "Conector RJ-45 fêmea CAT6", meta: 100 },
    { key: "rj45_macho", label: "Conector RJ-45 macho CAT6", meta: 200 },
    { key: "patch_panel_24p", label: "Patch Panel 24 portas CAT6", meta: 20 },
    { key: "mini_gbic_mm_sc", label: "Kit Mini-GBIC monomodo SC (par)", meta: 20 },
    { key: "cordao_optico_sc", label: "Cordão óptico monomodo SC", meta: 20 },
    { key: "m2_250", label: "SSD M.2 — 250 GB", meta: 120 },
    { key: "m2_500", label: "SSD M.2 — 500 GB", meta: 30 },
    { key: "sata_240", label: "SSD SATA III — 240 GB", meta: 0 },
    { key: "nic_10gbe_srv", label: "Placa de rede servidor 10GbE", meta: 1 },
    { key: "nic_desktop", label: "Placa de rede desktop 1GbE", meta: 0 },
    { key: "nic_pcie_wifi6", label: "Placa de rede PCIe Wi-Fi 6", meta: 0 },
    { key: "fonte_desktop", label: "Fonte para Desktop", meta: 0 },
    { key: "mem_8gb_desktop", label: "Memória DDR4 8 GB (Desktop)", meta: 50 },
    { key: "mem_16gb_nb", label: "Memória DDR4 16 GB (Notebook/Mini)", meta: 0 },
    { key: "mem_16gb_srv", label: "Memória DDR4 16 GB (Servidor)", meta: 0 },
    { key: "central_voip", label: "Central Telefônica VoIP", meta: 0 },
    { key: "tel_voip_t1", label: "Telefone VoIP — Tipo 1", meta: 60 },
    { key: "tel_voip_t2", label: "Telefone VoIP — Tipo 2", meta: 0 },
    { key: "srv_tipo1", label: "Servidor — Tipo 1", meta: 0 },
    { key: "srv_tipo2", label: "Servidor — Tipo 2", meta: 1 },
];
const adquiridosPorItem = {
    controlador_wireless: 0,
    ap_wifi6: 10,
    poe_injetor: 20,
    guia_cabos_1u: 0,
    caixa_cat6_305m: 6, // 3 + 3
    patch_1m5: 50,
    patch_2m5: 0,
    patch_3m: 0,
    patch_5m: 0,
    rj45_femea: 0,
    rj45_macho: 200,
    patch_panel_24p: 0,
    mini_gbic_mm_sc: 20,
    cordao_optico_sc: 20,
    m2_250: 60,
    m2_500: 0,
    sata_240: 0,
    nic_10gbe_srv: 0,
    nic_desktop: 0,
    nic_pcie_wifi6: 0,
    fonte_desktop: 0,
    mem_8gb_desktop: 0,
    mem_16gb_nb: 0,
    mem_16gb_srv: 0,
    central_voip: 0,
    tel_voip_t1: 0,
    tel_voip_t2: 0,
    srv_tipo1: 0,
    srv_tipo2: 0,
};
const comprasLote1 = [
    { item: "Dispositivo de armazenamento - Tipo 1 (M.2 250 GB)", unidade: "UN", quantidade: 60, unitario: 182.39, total: 21886.8 },
    { item: "Access Point Corporativo - Padrão Wireless IEEE 802.11ax", unidade: "UN", quantidade: 10, unitario: 5138.39, total: 51383.9 },
    { item: "Caixa de cabo de rede U/UTP CAT6 305 m (azul)", unidade: "UN", quantidade: 3, unitario: 3000.0, total: 9000.0 },
    { item: "Injector PoE PoE12-30W", unidade: "UN", quantidade: 10, unitario: 351.02, total: 3510.2 },
];
const comprasLote2 = [
    { item: "Conector RJ-45 macho CAT6", unidade: "UN", quantidade: 200, unitario: 11.97, total: 2394.0 },
    { item: "Caixa de cabo de rede U/UTP CAT6 305 m (azul)", unidade: "UN", quantidade: 3, unitario: 3000.0, total: 9000.0 },
    { item: "Kit par de módulos Mini-GBIC (Monomodo SC)", unidade: "UN", quantidade: 20, unitario: 249.68, total: 4993.6 },
    { item: "Injector PoE PoE12-30W", unidade: "UN", quantidade: 10, unitario: 351.02, total: 3510.2 },
    { item: "Cordão óptico monomodo SC", unidade: "UN", quantidade: 20, unitario: 93.32, total: 1866.4 },
    { item: "Patch Cord UTP CAT6 1,5 m (azul)", unidade: "UN", quantidade: 50, unitario: 52.64, total: 2632.0 },
];
const compras = [...comprasLote1, ...comprasLote2];
const totalComprasBRL = compras.reduce((acc, c) => acc + c.total, 0);
/* KPIs Wi-Fi */
const apMeta = 40, apComprados = adquiridosPorItem.ap_wifi6;
const poeMeta = 40, poeComprados = adquiridosPorItem.poe_injetor;
const m2Meta = 120, m2Comprados = adquiridosPorItem.m2_250;
/* Cabos: 4×350m + 6×305m */
const cat6_metros_total = 4 * 350 + 6 * 305; // 3230 m
/* Cumprimento licitação (percentual global) */
const sumMeta = metasAraguatins.filter(m => m.meta > 0).reduce((s, m) => s + m.meta, 0);
const sumAtendido = metasAraguatins.filter(m => m.meta > 0).reduce((s, m) => s + Math.min(adquiridosPorItem[m.key] ?? 0, m.meta), 0);
const licitacaoPct = sumMeta ? Math.round((sumAtendido / sumMeta) * 100) : 0;
/* ---------- VIEW ---------- */
export default function PlanoGestaoInternetEstrategico() {
    return (_jsxs(Layout, { children: [_jsxs("section", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(StatCard, { title: "N\u00EDvel 1 \u2014 Links", value: "1,2 Gbps", subtitle: "RNP 1000 (2025) + TLB 200 \u2014 8\u00D7 2018\u20132022", icon: TrendingUp, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#34d399,transparent),radial-gradient(50%_50%_at_100%_0%,#22d3ee,transparent)]" }), _jsx(StatCard, { title: "N\u00EDvel 2 \u2014 Wi-Fi", value: "40 APs", subtitle: "Cobertura ampliada (em execu\u00E7\u00E3o)", icon: Wifi, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#60a5fa,transparent),radial-gradient(50%_50%_at_100%_0%,#a78bfa,transparent)]" }), _jsx(StatCard, { title: "N\u00EDvel 3 \u2014 Infraestrutura", value: "3 blocos", subtitle: "A, B, C, D e Audit\u00F3rio (planejado)", icon: Server, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#f59e0b,transparent),radial-gradient(50%_50%_at_100%_0%,#f97316,transparent)]" }), _jsx(StatCard, { title: "Licita\u00E7\u00E3o ARAGUATINS", value: `${licitacaoPct}%`, subtitle: "Cumprimento das metas licitadas", icon: ShieldCheck, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#10b981,transparent),radial-gradient(50%_50%_at_100%_0%,#22c55e,transparent)]" })] }), _jsx("section", { className: "mt-8 grid gap-6 md:grid-cols-3", children: etapas.map((e) => (_jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h3", { className: "text-sm font-semibold text-slate-800", children: ["Etapa ", e.id, " \u2014 ", e.nome] }), _jsx(e.icon, { className: "h-5 w-5 text-slate-600" })] }), _jsxs("div", { className: "mt-3.5 flex items-baseline justify-between text-sm", children: [_jsxs("span", { className: "font-semibold text-slate-900", children: [e.progresso, "%"] }), _jsx("span", { className: "text-xs text-slate-500", children: e.detalhe })] }), _jsx("div", { className: "mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100", children: _jsx("div", { className: `h-full ${e.cor}`, style: { width: `${e.progresso}%` } }) })] }, e.id))) }), _jsxs("section", { className: "mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [_jsxs("div", { className: "mb-4 flex items-baseline justify-between", children: [_jsx("h2", { className: "text-base font-semibold text-slate-800", children: "Banda dispon\u00EDvel por ano (Mbps)" }), _jsxs("div", { className: "flex items-center gap-5", children: [_jsx(LegendBadge, { label: "RNP (principal)", colorClass: "bg-sky-600" }), _jsx(LegendBadge, { label: "Secund\u00E1rio (Oi/TLB)", colorClass: "bg-violet-500" }), _jsx(LegendBadge, { label: "Total (RNP + Sec.)", colorClass: "bg-emerald-600" })] })] }), _jsx("div", { className: "h-80 w-full", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: dataChart, margin: { left: 8, right: 16, top: 12, bottom: 0 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "ano", tickMargin: 10 }), _jsx(YAxis, { tickFormatter: (v) => `${v}`, width: 64 }), _jsx(Tooltip, { content: _jsx(CustomTooltip, {}) }), _jsx(Legend, {}), _jsx(ReferenceArea, { x1: "2018", x2: "2021", fill: "#e0f2fe", strokeOpacity: 0 }), _jsx(ReferenceArea, { x1: "2022", x2: "2022", fill: "#fef3c7", strokeOpacity: 0 }), _jsx(ReferenceArea, { x1: "2023", x2: "2025", fill: "#dcfce7", strokeOpacity: 0 }), _jsx(ReferenceLine, { x: "2025", stroke: "#0ea5e9", strokeDasharray: "4 2" }), _jsx(ReferenceDot, { x: "2025", y: 1000, r: 5, fill: "#0ea5e9", stroke: "none" }), _jsx(Line, { type: "monotone", dataKey: "rnp", name: "RNP (principal)", stroke: "#0284c7", strokeWidth: 3, dot: true }), _jsx(Line, { type: "monotone", dataKey: "secundario", name: "Secund\u00E1rio (Oi/TLB)", stroke: "#7c3aed", strokeWidth: 3, dot: true, strokeDasharray: "4 2" }), _jsx(Line, { type: "monotone", dataKey: "total", name: "Total (RNP + Sec.)", stroke: "#059669", strokeWidth: 3, dot: true })] }) }) }), _jsxs("div", { className: "mt-4 grid gap-4 text-xs text-slate-700 md:grid-cols-3", children: [_jsxs("div", { className: "rounded-xl bg-sky-50 p-3.5", children: [_jsx("span", { className: "font-semibold", children: "Gest\u00E3o Anterior (2018\u20132022):" }), " RNP 100 Mbps; secund\u00E1rio Oi 50 Mbps."] }), _jsxs("div", { className: "rounded-xl bg-amber-50 p-3.5", children: [_jsx("span", { className: "font-semibold", children: "Transi\u00E7\u00E3o (2022):" }), " manuten\u00E7\u00E3o do cen\u00E1rio anterior."] }), _jsxs("div", { className: "rounded-xl bg-emerald-50 p-3.5", children: [_jsx("span", { className: "font-semibold", children: "Cl\u00E1udio Galv\u00E3o (2023\u20132025):" }), " TLB 200 Mbps (2023) e upgrade RNP para 1 Gbps (2025)."] })] })] }), _jsxs("section", { className: "mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsx("h2", { className: "text-base font-semibold text-slate-800", children: "Aquisi\u00E7\u00F5es realizadas \u2014 parcial" }), _jsx("div", { className: "text-xs text-slate-500", children: "\u00DAltima atualiza\u00E7\u00E3o manual" })] }), _jsxs("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: [_jsx(StatCard, { title: "Total gasto (parcial)", value: formatBRL(totalComprasBRL), subtitle: "Somat\u00F3rio dos itens informados", gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#22d3ee,transparent),radial-gradient(50%_50%_at_100%_0%,#818cf8,transparent)]" }), _jsx(StatCard, { title: "APs adquiridos", value: `${apComprados}/${apMeta}`, subtitle: "25% da meta de 40 unidades", icon: Wifi, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#34d399,transparent),radial-gradient(50%_50%_at_100%_0%,#10b981,transparent)]" }), _jsx(StatCard, { title: "PoE Injetores", value: `${poeComprados}/${poeMeta}`, subtitle: "50% da meta de 40 unidades", icon: Network, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#f59e0b,transparent),radial-gradient(50%_50%_at_100%_0%,#f97316,transparent)]" }), _jsx(StatCard, { title: "M.2 250 GB", value: `${m2Comprados}/${m2Meta}`, subtitle: "50% da meta de 120 unidades", icon: Server, gradient: "bg-[radial-gradient(60%_60%_at_0%_0%,#a78bfa,transparent),radial-gradient(50%_50%_at_100%_0%,#6366f1,transparent)]" })] }), _jsxs("div", { className: "mt-4 text-xs text-slate-600", children: [_jsx("span", { className: "font-semibold", children: "Cabo CAT6 adquirido (estimado):" }), " ", "4\u00D7350 m (1.400 m) + 6\u00D7305 m (1.830 m) = ", _jsxs("strong", { children: [cat6_metros_total, " m"] }), "."] }), _jsx(PurchaseTable, {})] }), _jsxs("section", { className: "mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsx("h2", { className: "text-base font-semibold text-slate-800", children: "Licita\u00E7\u00E3o \u2014 ARAGUATINS (23235.013872/2023-84)" }), _jsxs("div", { className: "flex items-center gap-3 text-xs text-slate-500", children: [_jsx(Tag, { children: "Licita\u00E7\u00E3o" }), _jsxs("span", { children: ["Coluna ", _jsx("strong", { children: "ARAGUATINS" }), " do planejamento multi-campi"] })] })] }), _jsx(MetaTableDetail, { metas: metasAraguatins, got: adquiridosPorItem }), _jsx("p", { className: "mt-3 text-[11px] text-slate-500", children: "\u201CAdquirido\u201D usa os lotes informados; \u201CSaldo\u201D \u00E9 o que falta para cumprir a meta licitada." })] }), _jsxs("section", { className: "mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [_jsxs("div", { className: "mb-4 flex items-center justify-between", children: [_jsx("h2", { className: "text-base font-semibold text-slate-800", children: "Infraestrutura de Rede e Novos Blocos" }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-500", children: [_jsx(Activity, { className: "h-4 w-4" }), " Backbone, switches e fibra"] })] }), _jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [_jsx(InfoCard, { icon: Server, title: "N\u00FAcleo de switches", text: "Switches gerenci\u00E1veis para agrega\u00E7\u00E3o e VLANs, suportando maior throughput.", color: "from-indigo-500 to-sky-500" }), _jsx(InfoCard, { icon: Network, title: "Blocos A, B, C, D e Audit\u00F3rio", text: "Expans\u00E3o de cabeamento + fus\u00F5es de fibra garantindo conectividade est\u00E1vel.", color: "from-emerald-500 to-lime-500" }), _jsx(InfoCard, { icon: ShieldCheck, title: "Resili\u00EAncia", text: "Conting\u00EAncia via TLB (200 Mbps) e pol\u00EDticas de mudan\u00E7a/sustenta\u00E7\u00E3o do servi\u00E7o.", color: "from-amber-500 to-rose-500" })] })] }), _jsx("footer", { className: "px-6 pb-10 text-center text-[11px] text-slate-500", children: "IFTO \u2014 Campus Araguatins \u00B7 Plano de Gest\u00E3o (Cl\u00E1udio Galv\u00E3o)" })] }));
}
/* ---------- SUBCOMPONENTES ---------- */
function BarProgress({ label, percent, color }) {
    return (_jsxs("div", { children: [_jsx("div", { className: "mb-2 text-xs text-slate-600", children: label }), _jsx("div", { className: "h-3.5 w-full overflow-hidden rounded-full bg-slate-100", children: _jsx("div", { className: `h-full ${color}`, style: { width: `${percent}%` } }) })] }));
}
function Chip({ text, color = "emerald" }) {
    const map = {
        emerald: "bg-emerald-50 text-emerald-700",
        amber: "bg-amber-50 text-amber-700",
        sky: "bg-sky-50 text-sky-700",
        violet: "bg-violet-50 text-violet-700",
    };
    return _jsx("span", { className: `rounded-full px-3 py-1.5 text-xs font-medium ${map[color]}`, children: text });
}
function InfoCard({ icon: Icon, title, text, color }) {
    return (_jsxs("div", { className: "overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm", children: [_jsx("div", { className: `-m-5 mb-4 h-1.5 bg-gradient-to-r ${color}` }), _jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-slate-700", children: [_jsx(Icon, { className: "h-4 w-4" }), " ", title] }), _jsx("p", { className: "mt-2 text-xs text-slate-600", children: text })] }));
}
function formatBRL(n) {
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
/* Tabela simples de metas */
function MetaTableSimple() {
    const rows = [
        { item: "AP Wi-Fi 6 (802.11ax)", qtd: 40 },
        { item: "Injetor PoE 30W", qtd: 40 },
        { item: "SSD M.2 250 GB", qtd: 120 },
        { item: "SSD M.2 1 TB", qtd: 30 },
        { item: "Servidor — Tipo 2", qtd: 1 },
        { item: "Bateria VRLA 12V 7Ah", qtd: 20 },
    ];
    return (_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left text-xs uppercase tracking-wide text-slate-500", children: [_jsx("th", { className: "border-b border-slate-200 px-4 py-2.5", children: "Item" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-28", children: "Quantidade" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-32", children: "Status" })] }) }), _jsx("tbody", { children: rows.map((r, i) => (_jsxs("tr", { className: "text-sm", children: [_jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 text-slate-700", children: r.item }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900", children: r.qtd }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: _jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700", children: "\u2705 previsto" }) })] }, i))) })] }) }));
}
/* Tabela de compras (valores) */
function PurchaseTable() {
    const data = [...compras];
    return (_jsx("div", { className: "mt-5 overflow-x-auto", children: _jsxs("table", { className: "min-w-full border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left text-xs uppercase tracking-wide text-slate-500", children: [_jsx("th", { className: "border-b border-slate-200 px-4 py-2.5", children: "Item" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-16", children: "Und." }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-24", children: "Qtd." }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-36", children: "Unit\u00E1rio" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-36", children: "Total" })] }) }), _jsxs("tbody", { children: [data.map((c, i) => (_jsxs("tr", { className: "text-sm", children: [_jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 text-slate-700", children: c.item }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: c.unidade }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900", children: c.quantidade }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: formatBRL(c.unitario) }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: formatBRL(c.total) })] }, i))), _jsxs("tr", { className: "text-sm font-semibold", children: [_jsx("td", { className: "px-4 py-2.5 text-slate-800", colSpan: 4, children: "Total parcial" }), _jsx("td", { className: "px-4 py-2.5", children: formatBRL(data.reduce((a, b) => a + b.total, 0)) })] })] })] }) }));
}
/* Tabela detalhada da licitação */
function MetaTableDetail({ metas, got }) {
    return (_jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "min-w-full border-collapse", children: [_jsx("thead", { children: _jsxs("tr", { className: "text-left text-xs uppercase tracking-wide text-slate-500", children: [_jsx("th", { className: "border-b border-slate-200 px-4 py-2.5", children: "Item" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-24", children: "Meta" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-28", children: "Adquirido" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-24", children: "Saldo" }), _jsx("th", { className: "border-b border-slate-200 px-4 py-2.5 w-32", children: "Status" })] }) }), _jsx("tbody", { children: metas.map((m, i) => {
                        const val = got[m.key] ?? 0;
                        const saldo = Math.max(m.meta - val, 0);
                        const done = m.meta > 0 && val >= m.meta;
                        return (_jsxs("tr", { className: "text-sm", children: [_jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 text-slate-700", children: m.label }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900", children: m.meta }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: val }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: saldo }), _jsx("td", { className: "border-b border-slate-100 px-4 py-2.5", children: done ? (_jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700", children: "\u2705 atendido" })) : val > 0 ? (_jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700", children: "\u23F3 parcial" })) : m.meta === 0 ? (_jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700", children: "\u2014" })) : (_jsx("span", { className: "inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700", children: "\uD83D\uDD0E pendente" })) })] }, i));
                    }) })] }) }));
}
