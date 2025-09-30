import { motion } from "framer-motion";
import {
  Activity,
  CircleCheck,
  CircleDashed,
  CircleDot,
  Network,
  Server,
  ShieldCheck,
  TrendingUp,
  Wifi
} from "lucide-react";
import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* ---------- LAYOUT & UI ---------- */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mx-auto max-w-7xl p-0 sm:p-6">
    {/* Banner mais espaçado */}
    <div className="rounded-b-3xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 p-8 text-white shadow-md">
      <h1 className="text-3xl font-bold drop-shadow-sm">
        Plano de Gestão — Claúdio Galvão (2022 - 2025) 
      </h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <Badge text="" />
        <Badge text="" />
        <Badge text="" />
        <Badge text="" />
      </div>
    </div>
    <div className="-mt-6 sm:-mt-10 px-4 sm:px-0">{children}</div>
  </div>
);

const Badge: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur ring-1 ring-white/30 shadow-sm">
    {text}
  </span>
);

const Tag: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = "indigo",
}) => (
  <span
    className={`inline-flex items-center rounded-full bg-${color}-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-${color}-700`}
  >
    {children}
  </span>
);

const StatCard: React.FC<{
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ElementType;
  gradient?: string;
}> = ({ title, value, subtitle, icon: Icon, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
  >
    {gradient ? (
      <div className={`pointer-events-none absolute inset-0 opacity-10 ${gradient}`} />
    ) : null}
    <div className="relative z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        {Icon ? <Icon className="h-5 w-5 text-slate-700" /> : null}
      </div>
      <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
        {value}
      </p>
      {subtitle ? (
        <p className="mt-1.5 text-xs text-slate-600">{subtitle}</p>
      ) : null}
    </div>
  </motion.div>
);

const LegendBadge: React.FC<{ label: string; colorClass: string }> = ({
  label,
  colorClass,
}) => (
  <div className="flex items-center gap-2">
    <span className={`h-2.5 w-2.5 rounded-full ${colorClass}`} />
    <span className="text-xs text-slate-600">{label}</span>
  </div>
);

/* ---------- DADOS ---------- */
type Ponto = {
  ano: string;
  rnp: number;
  secundario: number;
  gestao: "Gestão Anterior" | "Transição 2022" | "Cláudio Galvão";
};

const serie: Ponto[] = [
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

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3 text-xs shadow">
      <div className="font-semibold text-slate-700">Ano: {label}</div>
      <div className="text-slate-600">Gestão: {p.gestao}</div>
      <div className="mt-1.5 space-y-0.5">
        <div>RNP (principal): <strong>{p.rnp} Mbps</strong></div>
        <div>Secundário (Oi/TLB): <strong>{p.secundario} Mbps</strong></div>
        <div className="pt-1 border-t text-slate-700">
          Total: <strong>{p.total} Mbps</strong>
        </div>
      </div>
    </div>
  );
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

/* ---------- LICITAÇÃO (Araguatins) ---------- */
type MetaLocal = { key: string; label: string; meta: number };
const metasAraguatins: MetaLocal[] = [
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

const adquiridosPorItem: Record<string, number> = {
  controlador_wireless: 0,
  ap_wifi6: 10,
  poe_injetor: 20,
  guia_cabos_1u: 0,
  caixa_cat6_305m: 6,     // 3 + 3
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

/* Compras (com valores) */
type Compra = { item: string; unidade: string; quantidade: number; unitario: number; total: number; };
const comprasLote1: Compra[] = [
  { item: "Dispositivo de armazenamento - Tipo 1 (M.2 250 GB)", unidade: "UN", quantidade: 60, unitario: 182.39, total: 21886.8 },
  { item: "Access Point Corporativo - Padrão Wireless IEEE 802.11ax", unidade: "UN", quantidade: 10, unitario: 5138.39, total: 51383.9 },
  { item: "Caixa de cabo de rede U/UTP CAT6 305 m (azul)", unidade: "UN", quantidade: 3, unitario: 3000.0, total: 9000.0 },
  { item: "Injector PoE PoE12-30W", unidade: "UN", quantidade: 10, unitario: 351.02, total: 3510.2 },
];
const comprasLote2: Compra[] = [
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
  return (
    <Layout>
      {/* KPIs */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Nível 1 — Links"
          value="1,2 Gbps"
          subtitle="RNP 1000 (2025) + TLB 200 — 8× 2018–2022"
          icon={TrendingUp}
          gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#34d399,transparent),radial-gradient(50%_50%_at_100%_0%,#22d3ee,transparent)]"
        />
        <StatCard
          title="Nível 2 — Wi-Fi"
          value="40 APs"
          subtitle="Cobertura ampliada (em execução)"
          icon={Wifi}
          gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#60a5fa,transparent),radial-gradient(50%_50%_at_100%_0%,#a78bfa,transparent)]"
        />
        <StatCard
          title="Nível 3 — Infraestrutura"
          value="3 blocos"
          subtitle="A, B, C, D e Auditório (planejado)"
          icon={Server}
          gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#f59e0b,transparent),radial-gradient(50%_50%_at_100%_0%,#f97316,transparent)]"
        />
        <StatCard
          title="Licitação ARAGUATINS"
          value={`${licitacaoPct}%`}
          subtitle="Cumprimento das metas licitadas"
          icon={ShieldCheck}
          gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#10b981,transparent),radial-gradient(50%_50%_at_100%_0%,#22c55e,transparent)]"
        />
      </section>

      {/* Etapas */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {etapas.map((e) => (
          <div key={e.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-800">
                Etapa {e.id} — {e.nome}
              </h3>
              <e.icon className="h-5 w-5 text-slate-600" />
            </div>
            <div className="mt-3.5 flex items-baseline justify-between text-sm">
              <span className="font-semibold text-slate-900">{e.progresso}%</span>
              <span className="text-xs text-slate-500">{e.detalhe}</span>
            </div>
            <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className={`h-full ${e.cor}`} style={{ width: `${e.progresso}%` }} />
            </div>
          </div>
        ))}
      </section>

      {/* Gráfico */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="text-base font-semibold text-slate-800">Banda disponível por ano (Mbps)</h2>
          <div className="flex items-center gap-5">
            <LegendBadge label="RNP (principal)" colorClass="bg-sky-600" />
            <LegendBadge label="Secundário (Oi/TLB)" colorClass="bg-violet-500" />
            <LegendBadge label="Total (RNP + Sec.)" colorClass="bg-emerald-600" />
          </div>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataChart} margin={{ left: 8, right: 16, top: 12, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" tickMargin={10} />
              <YAxis tickFormatter={(v) => `${v}`} width={64} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <ReferenceArea x1="2018" x2="2021" fill="#e0f2fe" strokeOpacity={0} />
              <ReferenceArea x1="2022" x2="2022" fill="#fef3c7" strokeOpacity={0} />
              <ReferenceArea x1="2023" x2="2025" fill="#dcfce7" strokeOpacity={0} />
              <ReferenceLine x="2025" stroke="#0ea5e9" strokeDasharray="4 2" />
              <ReferenceDot x="2025" y={1000} r={5} fill="#0ea5e9" stroke="none" />
              <Line type="monotone" dataKey="rnp" name="RNP (principal)" stroke="#0284c7" strokeWidth={3} dot />
              <Line type="monotone" dataKey="secundario" name="Secundário (Oi/TLB)" stroke="#7c3aed" strokeWidth={3} dot strokeDasharray="4 2" />
              <Line type="monotone" dataKey="total" name="Total (RNP + Sec.)" stroke="#059669" strokeWidth={3} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-4 text-xs text-slate-700 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-3.5">
            <span className="font-semibold">Gestão Anterior (2018–2022):</span> RNP 100 Mbps; secundário Oi 50 Mbps.
          </div>
          <div className="rounded-xl bg-amber-50 p-3.5">
            <span className="font-semibold">Transição (2022):</span> manutenção do cenário anterior.
          </div>
          <div className="rounded-xl bg-emerald-50 p-3.5">
            <span className="font-semibold">Cláudio Galvão (2023–2025):</span> TLB 200 Mbps (2023) e upgrade RNP para 1 Gbps (2025).
          </div>
        </div>
      </section>


      {/* Compras realizadas */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-800">Aquisições realizadas — parcial</h2>
          <div className="text-xs text-slate-500">Última atualização manual</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total gasto (parcial)" value={formatBRL(totalComprasBRL)} subtitle="Somatório dos itens informados" gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#22d3ee,transparent),radial-gradient(50%_50%_at_100%_0%,#818cf8,transparent)]" />
          <StatCard title="APs adquiridos" value={`${apComprados}/${apMeta}`} subtitle="25% da meta de 40 unidades" icon={Wifi} gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#34d399,transparent),radial-gradient(50%_50%_at_100%_0%,#10b981,transparent)]" />
          <StatCard title="PoE Injetores" value={`${poeComprados}/${poeMeta}`} subtitle="50% da meta de 40 unidades" icon={Network} gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#f59e0b,transparent),radial-gradient(50%_50%_at_100%_0%,#f97316,transparent)]" />
          <StatCard title="M.2 250 GB" value={`${m2Comprados}/${m2Meta}`} subtitle="50% da meta de 120 unidades" icon={Server} gradient="bg-[radial-gradient(60%_60%_at_0%_0%,#a78bfa,transparent),radial-gradient(50%_50%_at_100%_0%,#6366f1,transparent)]" />
        </div>

        <div className="mt-4 text-xs text-slate-600">
          <span className="font-semibold">Cabo CAT6 adquirido (estimado):</span>{" "}
          4×350 m (1.400 m) + 6×305 m (1.830 m) = <strong>{cat6_metros_total} m</strong>.
        </div>

        <PurchaseTable />
      </section>

      {/* Metas da Licitação — detalhe */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-800">Licitação — ARAGUATINS (23235.013872/2023-84)</h2>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <Tag>Licitação</Tag>
            <span>Coluna <strong>ARAGUATINS</strong> do planejamento multi-campi</span>
          </div>
        </div>
        <MetaTableDetail metas={metasAraguatins} got={adquiridosPorItem} />
        <p className="mt-3 text-[11px] text-slate-500">
          “Adquirido” usa os lotes informados; “Saldo” é o que falta para cumprir a meta licitada.
        </p>
      </section>

      {/* Infraestrutura & Timeline */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-slate-800">Infraestrutura de Rede e Novos Blocos</h2>
          <div className="flex items-center gap-2 text-xs text-slate-500"><Activity className="h-4 w-4" /> Backbone, switches e fibra</div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard icon={Server} title="Núcleo de switches" text="Switches gerenciáveis para agregação e VLANs, suportando maior throughput." color="from-indigo-500 to-sky-500" />
          <InfoCard icon={Network} title="Blocos A, B, C, D e Auditório" text="Expansão de cabeamento + fusões de fibra garantindo conectividade estável." color="from-emerald-500 to-lime-500" />
          <InfoCard icon={ShieldCheck} title="Resiliência" text="Contingência via TLB (200 Mbps) e políticas de mudança/sustentação do serviço." color="from-amber-500 to-rose-500" />
        </div>
      </section>

      <footer className="px-6 pb-10 text-center text-[11px] text-slate-500">
        IFTO — Campus Araguatins · Plano de Gestão (Cláudio Galvão)
      </footer>
    </Layout>
  );
}

/* ---------- SUBCOMPONENTES ---------- */
function BarProgress({ label, percent, color }: { label: string; percent: number; color: string }) {
  return (
    <div>
      <div className="mb-2 text-xs text-slate-600">{label}</div>
      <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Chip({ text, color = "emerald" }: { text: string; color?: "emerald" | "amber" | "sky" | "violet" }) {
  const map: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    sky: "bg-sky-50 text-sky-700",
    violet: "bg-violet-50 text-violet-700",
  };
  return <span className={`rounded-full px-3 py-1.5 text-xs font-medium ${map[color]}`}>{text}</span>;
}

function InfoCard({ icon: Icon, title, text, color }: { icon: React.ElementType; title: string; text: string; color: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`-m-5 mb-4 h-1.5 bg-gradient-to-r ${color}`} />
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        <Icon className="h-4 w-4" /> {title}
      </div>
      <p className="mt-2 text-xs text-slate-600">{text}</p>
    </div>
  );
}

function formatBRL(n: number) {
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
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="border-b border-slate-200 px-4 py-2.5">Item</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-28">Quantidade</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-32">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="text-sm">
              <td className="border-b border-slate-100 px-4 py-2.5 text-slate-700">{r.item}</td>
              <td className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900">{r.qtd}</td>
              <td className="border-b border-slate-100 px-4 py-2.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">✅ previsto</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Tabela de compras (valores) */
function PurchaseTable() {
  const data = [...compras];
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="border-b border-slate-200 px-4 py-2.5">Item</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-16">Und.</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-24">Qtd.</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-36">Unitário</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-36">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c, i) => (
            <tr key={i} className="text-sm">
              <td className="border-b border-slate-100 px-4 py-2.5 text-slate-700">{c.item}</td>
              <td className="border-b border-slate-100 px-4 py-2.5">{c.unidade}</td>
              <td className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900">{c.quantidade}</td>
              <td className="border-b border-slate-100 px-4 py-2.5">{formatBRL(c.unitario)}</td>
              <td className="border-b border-slate-100 px-4 py-2.5">{formatBRL(c.total)}</td>
            </tr>
          ))}
          <tr className="text-sm font-semibold">
            <td className="px-4 py-2.5 text-slate-800" colSpan={4}>
              Total parcial
            </td>
            <td className="px-4 py-2.5">{formatBRL(data.reduce((a, b) => a + b.total, 0))}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* Tabela detalhada da licitação */
function MetaTableDetail({ metas, got }: { metas: MetaLocal[]; got: Record<string, number>; }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="border-b border-slate-200 px-4 py-2.5">Item</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-24">Meta</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-28">Adquirido</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-24">Saldo</th>
            <th className="border-b border-slate-200 px-4 py-2.5 w-32">Status</th>
          </tr>
        </thead>
        <tbody>
          {metas.map((m, i) => {
            const val = got[m.key] ?? 0;
            const saldo = Math.max(m.meta - val, 0);
            const done = m.meta > 0 && val >= m.meta;
            return (
              <tr key={i} className="text-sm">
                <td className="border-b border-slate-100 px-4 py-2.5 text-slate-700">{m.label}</td>
                <td className="border-b border-slate-100 px-4 py-2.5 font-semibold text-slate-900">{m.meta}</td>
                <td className="border-b border-slate-100 px-4 py-2.5">{val}</td>
                <td className="border-b border-slate-100 px-4 py-2.5">{saldo}</td>
                <td className="border-b border-slate-100 px-4 py-2.5">
                  {done ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">✅ atendido</span>
                  ) : val > 0 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">⏳ parcial</span>
                  ) : m.meta === 0 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">—</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700">🔎 pendente</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
