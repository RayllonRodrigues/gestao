import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl p-6">
      {children}
    </div>
  );
}
