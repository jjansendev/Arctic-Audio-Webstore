# Glacial Audio Webstore

Premium boutique webstore for professional audio VST plugins. Built with Next.js App Router, TypeScript, Tailwind CSS, and featuring the distinctive **Midnight Glacial Gradient** theme.

![Homepage](https://github.com/user-attachments/assets/25671209-5f67-44cb-8eb2-df3fe69816b9)

## Features

- ✨ **Premium Glacial Theme** - Midnight Glacial Gradient design with glass morphism effects
- 🛍️ **Complete Shop** - Product catalog with 8 plugins (6 individual + 2 bundles)
- 🔍 **Advanced Filters** - Search, category filtering, and sorting
- 💳 **Stripe Integration** - Secure checkout with webhook fulfillment
- 📦 **Digital Delivery** - Download tokens and license key generation
- 🎵 **Product Details** - Audio demos, feature lists, system requirements
- ❓ **Support Page** - FAQ accordion and contact form
- 📱 **Responsive Design** - Optimized for desktop and mobile
- ♿ **Accessible** - Keyboard navigation and ARIA labels

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom Glacial theme
- **Database:** PostgreSQL with Prisma ORM
- **Payments:** Stripe Checkout + Webhooks
- **Email:** Resend (for order confirmations)
- **UI Components:** Radix UI primitives
- **Animations:** Framer Motion
- **Validation:** Zod

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud like Neon/Supabase)
- Stripe account (test mode)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jjansendev/Arctic-Audio-Webstore.git
cd Arctic-Audio-Webstore
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual credentials:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/glacial_audio?schema=public"

# Stripe
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key_here"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret_here"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_publishable_key_here"

# Site Configuration
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Email (Resend)
RESEND_API_KEY="re_your_resend_api_key_here"
RESEND_FROM_EMAIL="orders@arcticaudio.com"
```

4. **Initialize the database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# (Optional) Seed products
npx prisma db seed
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your store.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── checkout/      # Stripe checkout session
│   │   │   ├── webhook/       # Stripe webhook handler
│   │   │   └── license/       # License generation
│   │   ├── products/          # Product listing and details
│   │   ├── shop/              # Shop with filters
│   │   ├── support/           # FAQ and contact
│   │   ├── account/           # User account page
│   │   └── layout.tsx         # Root layout
│   ├── components/            # Reusable React components
│   ├── lib/                   # Utilities and data
│   │   ├── products.ts        # Product catalog
│   │   ├── prisma.ts          # Prisma client
│   │   ├── stripe.ts          # Stripe utilities
│   │   └── utils.ts           # Helper functions
│   └── styles/
│       └── globals.css        # Global styles and theme
├── prisma/
│   └── schema.prisma          # Database schema
└── public/                    # Static assets
```

## Stripe Setup

### 1. Get Your API Keys

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy your **Publishable key** and **Secret key** (use test mode keys)
3. Add them to `.env.local`

### 2. Set Up Products in Stripe (Optional)

You can either:
- Use the built-in product data from `src/lib/products.ts`
- Create products in Stripe Dashboard and reference their IDs

### 3. Configure Webhooks

For local development, use Stripe CLI:

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret (starts with `whsec_`) to your `.env.local` as `STRIPE_WEBHOOK_SECRET`.

### 4. Test Checkout

Use Stripe test card numbers:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Use any future expiry date, any CVC, any ZIP

## Database Schema

```prisma
model Product {
  id            String      @id @default(cuid())
  slug          String      @unique
  name          String
  description   String
  priceCents    Int
  currency      String      @default("usd")
  categories    String[]
  formats       String[]
  os            String[]
  isBundle      Boolean     @default(false)
}

model Order {
  id                    String      @id @default(cuid())
  stripeSessionId       String?     @unique
  email                 String
  status                String      @default("pending")
  totalCents            Int
  items                 OrderItem[]
  downloadTokens        DownloadToken[]
}

model OrderItem {
  id            String   @id @default(cuid())
  orderId       String
  productId     String
  qty           Int
  unitPriceCents Int
}

model DownloadToken {
  id        String   @id @default(cuid())
  orderId   String
  tokenHash String   @unique
  expiresAt DateTime
}
```

## API Routes

### POST `/api/checkout`

Creates a Stripe Checkout session.

**Request:**
```json
{
  "productSlugs": ["glacial-eq", "glacial-limit"]
}
```

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

### POST `/api/webhook`

Stripe webhook handler. Handles:
- `checkout.session.completed` - Creates order, generates download tokens
- Verifies webhook signature for security

### POST `/api/license`

Generates a license key (placeholder implementation).

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Import to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Add environment variables
- Deploy

3. **Set up production database**
- Use Neon, Supabase, or Vercel Postgres
- Update `DATABASE_URL` in Vercel environment variables

4. **Configure Stripe webhook for production**
- Add production webhook endpoint: `https://your-domain.com/api/webhook`
- Update `STRIPE_WEBHOOK_SECRET` with production secret

### Environment Variables Checklist

Make sure all these are set in Vercel:

- ✅ `DATABASE_URL`
- ✅ `STRIPE_SECRET_KEY`
- ✅ `STRIPE_WEBHOOK_SECRET`
- ✅ `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- ✅ `NEXT_PUBLIC_SITE_URL`
- ✅ `RESEND_API_KEY`
- ✅ `RESEND_FROM_EMAIL`

## Development Commands

```bash
# Development
npm run dev           # Start dev server
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint

# Database
npx prisma studio     # Open Prisma Studio (database GUI)
npx prisma migrate dev # Create and apply migrations
npx prisma generate   # Regenerate Prisma Client

# Stripe
stripe listen --forward-to localhost:3000/api/webhook
```

## Theme Customization

The **Midnight Glacial Gradient** theme is defined in:
- `src/app/globals.css` - Global styles and CSS custom properties
- `tailwind.config.ts` - Tailwind theme extensions

Key design tokens:
- Background: `#0A0F14` → `#111821`
- Glass panels: `rgba(255,255,255,0.06–0.10)` with backdrop blur
- Accents: Icy cyan `#6FE8FF` and `#9FF2FF`
- Borders: `rgba(160,220,255,0.18)`
- Glow effects: 8–16px blur with arctic cyan

## Product Catalog

Current products (8 total):

**Individual Plugins (6):**
1. Glacial Echo - Stereo Delay ($149)
2. Glacier Reverb - Reverb ($179)
3. Polar Dynamics - Compressor ($129)
4. Aurora EQ - Equalizer ($159)
5. Frost Limiter - Limiter ($119)
6. Tundra Stereo - Stereo Imaging ($139)

**Bundles (2):**
1. Glacial Suite - All 6 plugins ($599) - Save 33%
2. Midnight Studio Bundle - EQ + Dynamics + Reverb ($349) - Save 25%

To modify products, edit `src/lib/products.ts`.

## Security Notes

- ✅ Webhook signatures are verified
- ✅ Prices calculated server-side only
- ✅ Environment variables for secrets
- ✅ No hardcoded API keys
- ✅ HTTPS enforced in production
- ✅ Input validation with Zod

## Performance

- ⚡ Static generation where possible
- ⚡ Optimized images and fonts
- ⚡ Code splitting
- ⚡ Fast page transitions with App Router

## Accessibility

- ♿ Keyboard navigation support
- ♿ ARIA labels on interactive elements
- ♿ Focus-visible styles
- ♿ Proper heading hierarchy
- ♿ Color contrast compliance

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Build fails with Prisma error
```bash
npx prisma generate
npm run build
```

### Stripe webhook not receiving events
- Make sure Stripe CLI is running: `stripe listen --forward-to localhost:3000/api/webhook`
- Check webhook secret is correct in `.env.local`

### Database connection error
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running
- Run `npx prisma migrate dev`

## License

This project is for demonstration purposes. Customize as needed for production use.

## Support

For questions or issues:
- Open an issue on GitHub
- Contact: support@arcticaudio.com

---

Built with ❄️ by the Glacial Audio team
