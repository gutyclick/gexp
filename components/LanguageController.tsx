"use client";

import { useEffect, useState } from "react";
import { translations } from "@/data/translations";

type Language = "es" | "en";

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([es, en]) => [en, es]));

function replacePreservingSpace(value: string, translated: string) {
  const start = value.match(/^\s*/)?.[0] ?? "";
  const end = value.match(/\s*$/)?.[0] ?? "";
  return `${start}${translated}${end}`;
}

function translatePage(language: Language) {
  const map = language === "en" ? translations : reverseTranslations;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    if (node.parentElement?.closest("[data-no-translate]")) continue;
    const value = node.nodeValue ?? "";
    const translated = map[value.trim()];
    if (translated) node.nodeValue = replacePreservingSpace(value, translated);
  }

  for (const element of document.querySelectorAll<HTMLElement>("[aria-label],[title]")) {
    for (const attribute of ["aria-label", "title"] as const) {
      const value = element.getAttribute(attribute);
      if (value && map[value]) element.setAttribute(attribute, map[value]);
    }
  }
  if (map[document.title]) document.title = map[document.title];
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description?.content && map[description.content]) description.content = map[description.content];
  document.documentElement.lang = language;
}

export function LanguageController() {
  const [language, setLanguage] = useState<Language>("es");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("gexp-language") as Language | null;
    const detected: Language = navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
    const timer = window.setTimeout(() => {
      setLanguage(saved === "en" || saved === "es" ? saved : detected);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    translatePage(language);
    localStorage.setItem("gexp-language", language);
    const observer = new MutationObserver(() => translatePage(language));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language, ready]);

  return <div className="language-switcher" data-no-translate role="group" aria-label={language === "es" ? "Seleccionar idioma" : "Select language"}>
    <button className={language === "es" ? "selected" : ""} onClick={() => setLanguage("es")} aria-pressed={language === "es"}>ES</button>
    <span>/</span>
    <button className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
  </div>;
}
