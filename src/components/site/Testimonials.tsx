import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const t = testimonials[i]!;
  const initials = t.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] lg:p-12">
      <Quote className="size-9 text-accent" aria-hidden />
      <blockquote className="mt-5 text-lg leading-relaxed font-medium text-navy sm:text-xl lg:text-2xl lg:leading-[1.5]">
        "{t.quote}"
      </blockquote>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-navy-foreground">
            {initials}
          </span>
          <div className="min-w-0">
            <p className="truncate font-bold text-navy">{t.name}</p>
            <p className="truncate text-sm text-muted-foreground">
              {t.role}, {t.company}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setI((v) => (v - 1 + total) % total)}
            aria-label="Previous testimonial"
            className="grid size-10 cursor-pointer place-items-center rounded-md border border-border text-navy transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setI((v) => (v + 1) % total)}
            aria-label="Next testimonial"
            className="grid size-10 cursor-pointer place-items-center rounded-md border border-border text-navy transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 flex gap-1.5">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to testimonial ${idx + 1}`}
            onClick={() => setI(idx)}
            className={cn(
              "h-1 cursor-pointer rounded-full transition-all",
              idx === i ? "w-10 bg-accent" : "w-4 bg-border",
            )}
          />
        ))}
      </div>
    </div>
  );
}
