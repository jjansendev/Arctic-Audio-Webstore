# Arctic Audio Webstore

Premium boutique webstore for professional audio VST plugins. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 18+ and npm

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file:

```
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## API Routes

- `POST /api/checkout` creates a Stripe-ready checkout payload (mocked)
- `POST /api/webhook` handles Stripe webhook events (placeholder)
- `POST /api/license` generates a mock license key

## Notes

- Audio demo files and plugin mockups are placeholders. Replace with production assets.
- Stripe integration points are wired but require real keys and product IDs.
