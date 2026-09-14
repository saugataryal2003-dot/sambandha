import Link from 'next/link';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[80dvh] items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 50% 40%, rgb(var(--saffron-300-rgb) / 0.12), transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-32 text-center">
        <p
          className="font-display text-[32vw] font-light leading-none tracking-tighter text-saffron-300/[0.07] sm:text-[22vw]"
          aria-hidden
        >
          404
        </p>

        <div className="-mt-10 sm:-mt-16">
          <h1 className="font-jp text-3xl font-light text-cream md:text-5xl">
            ページが見つかりませんでした
          </h1>
          <p className="mt-4 font-jp text-sm leading-relaxed text-cream/60 md:text-base">
            お探しのページは移動・削除されたか、URLが正しくない可能性があります。
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-saffron-300 px-7 py-3.5 font-jp text-sm font-semibold text-ink transition hover:bg-saffron-200 hover:-translate-y-0.5"
            >
              ホームへ戻る
            </Link>
            <Link
              href="/menu/lunch"
              className="glass-card-medium inline-flex items-center rounded-full px-7 py-3.5 font-jp text-sm font-medium text-cream transition hover:-translate-y-0.5"
            >
              メニューを見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}