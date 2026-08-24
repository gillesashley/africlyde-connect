import { useState } from "react";
import { locations } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const legend = [
  { type: "Headquarters", color: "bg-accent" },
  { type: "Regional Hub", color: "bg-accent/70" },
  { type: "Port Office", color: "bg-white" },
  { type: "Distribution Hub", color: "bg-white/70" },
  { type: "Gateway", color: "bg-white/40" },
];

const routes: Array<[string, string]> = [
  ["Accra", "Lagos"],
  ["Lagos", "Kinshasa"],
  ["Abidjan", "Accra"],
  ["Dakar", "Abidjan"],
  ["Casablanca", "Dakar"],
  ["Cairo", "Nairobi"],
  ["Nairobi", "Mombasa"],
  ["Nairobi", "Lusaka"],
  ["Lusaka", "Johannesburg"],
  ["Johannesburg", "Durban"],
  ["Dubai", "Nairobi"],
  ["Kinshasa", "Lusaka"],
];

export function CoverageMap() {
  const [active, setActive] = useState<string | null>(null);
  const byCity = Object.fromEntries(locations.map((l) => [l.city, l]));

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
      <div className="surface-navy relative overflow-hidden rounded-2xl p-4 sm:p-6">
        <div className="relative aspect-4/5 w-full sm:aspect-16/12">
          <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" preserveAspectRatio="none" aria-hidden>
            {routes.map(([a, b], i) => {
              const A = byCity[a];
              const B = byCity[b];
              if (!A || !B) return null;
              return (
                <line
                  key={i}
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  stroke="currentColor"
                  className="text-accent/40"
                  strokeWidth={0.25}
                  strokeDasharray="1.5 1.5"
                />
              );
            })}
          </svg>

          {locations.map((l) => (
            <button
              key={l.city}
              type="button"
              onMouseEnter={() => setActive(l.city)}
              onFocus={() => setActive(l.city)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(l.city)}
              style={{ left: `${l.x}%`, top: `${l.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-2"
              aria-label={`${l.city}, ${l.country} — ${l.type}`}
            >
              <span
                className={cn(
                  "block size-2.5 rounded-full ring-4 transition-all",
                  l.type === "Headquarters" || l.type === "Regional Hub"
                    ? "bg-accent ring-accent/25"
                    : "bg-white ring-white/15",
                  active === l.city && "scale-150 ring-8",
                )}
              />
              {active === l.city ? (
                <span className="absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 rounded-md bg-white px-2 py-1 text-[0.65rem] leading-tight font-semibold whitespace-nowrap text-navy shadow-lg">
                  {l.city} · {l.type}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-[0.7rem] text-navy-foreground/70">
          {legend.map((l) => (
            <li key={l.type} className="flex items-center gap-2">
              <span className={cn("size-2 rounded-full", l.color)} />
              {l.type}
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        {[
          { k: "34", v: "Countries served" },
          { k: "12", v: "Owned country offices" },
          { k: "28", v: "Warehouses & cold hubs" },
          { k: "9", v: "Major trade corridors" },
        ].map((s) => (
          <li key={s.v} className="rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <p className="text-3xl font-extrabold text-navy">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
