"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { const id = window.setTimeout(() => setDone(true), 1250); return () => clearTimeout(id); }, []);
  if (done) return null;
  return <div className="loader" aria-hidden="true"><div><span>GUSTAVO</span><span>RAMOS</span><span>POLO</span></div><p>00:00:01</p></div>;
}
