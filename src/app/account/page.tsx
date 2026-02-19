import GlowButton from "@/components/GlowButton";

export default function AccountPage() {
  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="glass rounded-panel p-6">
            <h1 className="text-3xl font-semibold">Account Access</h1>
            <p className="mt-2 text-white/70">Sign in to manage licenses and downloads.</p>
          </div>
          <div className="glass rounded-panel p-6 space-y-4">
            <input
              className="w-full rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Email"
              aria-label="Email"
            />
            <input
              className="w-full rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Password"
              aria-label="Password"
              type="password"
            />
            <GlowButton href="#" label="Login" />
            <p className="text-xs text-white/50">No account yet? Registration is instant after purchase.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Licenses</h2>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Arctic Echo</span>
                <span className="text-arctic-cyan">AAE5N-7XK2P-Q8Z1M</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Glacier Reverb</span>
                <span className="text-arctic-cyan">AGR9T-K1L7P-X2M6Q</span>
              </div>
            </div>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Downloads</h2>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Arctic Suite Installer</span>
                <button className="text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white">
                  Download
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>Frost Limiter Installer</span>
                <button className="text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white">
                  Download
                </button>
              </div>
            </div>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Order History</h2>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <div className="flex items-center justify-between">
                <span>Jan 18, 2026 · Arctic Suite</span>
                <span>399.00 CAD</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Dec 02, 2025 · Glacier Reverb</span>
                <span>179.00 CAD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
