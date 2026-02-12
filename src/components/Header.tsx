import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 px-6 py-6 md:px-12">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
        <Link href="/" className="text-xs uppercase tracking-[0.5em] text-white/80">
          ARCTIC AUDIO
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-white/60 md:flex">
          <Link href="/products" className="transition hover:text-white">
            Plugins
          </Link>
          <Link href="/checkout" className="transition hover:text-white">
            Checkout
          </Link>
          <Link href="/account" className="transition hover:text-white">
            Account
          </Link>
        </nav>
        <Link
          href="/products"
          className="rounded-full border border-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:border-white/30 hover:text-white"
        >
          Explore
        </Link>
      </div>
    </header>
  );
}
