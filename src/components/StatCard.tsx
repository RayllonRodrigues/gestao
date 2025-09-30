import { motion } from "framer-motion";
import React from "react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-600">{title}</h3>
        {Icon ? <Icon className="h-5 w-5" /> : null}
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </p>
      {subtitle ? (
        <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
      ) : null}
    </motion.div>
  );
}
