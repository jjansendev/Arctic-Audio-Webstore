import GlowButton from "@/components/GlowButton";
import { products } from "@/lib/products";

export const metadata = {
  title: "Checkout"
};

const item = products[0];

export default function CheckoutPage() {
  return (
    <section className="px-6 py-16 md:px-12">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div className="glass rounded-panel p-6">
            <h1 className="text-3xl font-semibold">Secure Checkout</h1>
            <p className="mt-2 text-white/70">Stripe-ready flow with VAT placeholders.</p>
          </div>
          <form className="glass rounded-panel p-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="First name"
                aria-label="First name"
              />
              <input
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
            <input
              className="w-full rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
              placeholder="Email for license delivery"
              aria-label="Email"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="Country"
                aria-label="Country"
              />
              <input
                className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/40"
                placeholder="VAT / Tax ID (optional)"
                aria-label="VAT"
              />
            </div>
            <div className="rounded-panel border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70">
              Payment is securely handled by Stripe in production.
            </div>
            <GlowButton href="#" label="Proceed to Payment" />
          </form>
        </div>
        <aside className="space-y-6">
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-white/60">
              <span>VAT / Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-base font-semibold">
              <span>Total</span>
              <span>${item.price}</span>
            </div>
          </div>
          <div className="glass rounded-panel p-6">
            <h2 className="text-xl font-semibold">License Delivery</h2>
            <p className="mt-3 text-sm text-white/70">
              License keys are delivered instantly via email. Your account will store all purchases for
              redownload.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
