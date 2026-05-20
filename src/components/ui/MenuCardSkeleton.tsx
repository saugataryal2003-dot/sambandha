'use client';

export function MenuCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
      <div className="h-3 w-20 rounded-full bg-white/10" />
      <div className="mt-3 h-8 w-40 rounded-lg bg-white/10" />
      <div className="mt-8 flex items-end justify-between border-t border-white/[0.06] pt-6">
        <div>
          <div className="h-12 w-28 rounded-lg bg-white/10" />
          <div className="mt-2 h-3 w-20 rounded-full bg-white/[0.06]" />
        </div>
        <div className="h-5 w-5 rounded bg-white/[0.06]" />
      </div>
    </div>
  );
}

export function LunchSetCardSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
      <div className="h-8 w-44 rounded-lg bg-white/10" />
      <div className="mt-2 h-3 w-28 rounded-full bg-white/[0.06]" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full rounded-full bg-white/[0.06]" />
        <div className="h-3 w-4/5 rounded-full bg-white/[0.06]" />
      </div>
      <div className="mt-6 flex items-baseline justify-between border-t border-white/[0.06] pt-6">
        <div>
          <div className="h-10 w-24 rounded-lg bg-white/10" />
          <div className="mt-1 h-3 w-20 rounded-full bg-white/[0.06]" />
        </div>
        <div className="h-3 w-28 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  );
}

export function BentoCardSkeleton({ className }: { className: string }) {
  return (
    <div
      className={`animate-pulse overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent" />
    </div>
  );
}
