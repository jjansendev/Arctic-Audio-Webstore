export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  images: string[];
  audioDemoUrl: string;
  features: string[];
  system: string[];
  license: string[];
  demoUrl?: string;
  isBundle?: boolean;
  bundleProducts?: string[]; // slugs of products in bundle
};

export const products: Product[] = [
  {
    id: "arctic-eq",
    slug: "arctic-eq",
    name: "Arctic EQ",
    tagline: "Precision Parametric Equalizer with Arctic Clarity",
    description:
      "Surgical EQ tool featuring dynamic bands, linear-phase processing, and smooth analog-style modeling for transparent yet musical results.",
    longDescription:
      "Arctic EQ delivers surgical precision with musical character. Eight fully parametric bands, dynamic EQ capabilities, linear-phase and zero-latency modes, plus comprehensive metering and A/B comparison.",
    price: 15900,
    compareAtPrice: null,
    currency: "CAD",
    images: [
      "/products/arctic-eq-hero.webp",
      "/products/arctic-eq-interface-1.webp",
      "/products/arctic-eq-interface-2.webp",
      "/products/arctic-eq-metering.webp"
    ],
    audioDemoUrl: "/demos/arctic-eq-demo.mp3",
    features: [
      "Dynamic EQ mode with sidechain",
      "Linear-phase & minimum-phase processing",
      "Advanced psychoacoustic modellliung",
      "Real-time analyzer clearly shows what the eq is doing",
      "macOS & Windows - VST3, AU, AAX"
    ],
    category: "EQ",
    tags: ["eq", "parametric", "dynamic", "analog", "mixing", "mastering"],
    isNew: true,
    isFeatured: true,
    variants: [{ id: "full-license", name: "Full License", price: 15900 }],
    systemRequirements: {
      os: ["Windows 10+", "macOS 11+"],
      formats: ["VST3", "AU", "AAX"],
      cpu: "Intel/Apple Silicon",
      ram: "4 GB minimum, 8 GB recommended"
    }
  },
  {
    id: "arctic-limit",
    slug: "arctic-limit",
    name: "Arctic Limit",
    tagline: "Transparent Brickwall Limiter with True Peak Control",
    description:
      "Protect your masters with precision limiting, inter-sample peak detection, and high-quality oversampling - crystal clear and ice-cold.",
    longDescription:
      "Arctic Limit combines transparency with aggressive control. True-peak limiting, adaptive release, up to 16x oversampling, ISP detection, and detailed metering make it ideal for modern loudness standards.",
    price: 11900,
    compareAtPrice: 14900,
    currency: "CAD",
    images: [
      "/products/arctic-limit-hero.webp",
      "/products/arctic-limit-interface.webp",
      "/products/arctic-limit-metering.webp"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Offline license file"],
    demoUrl: "/audio/frost-limiter-demo.mp3"
  },
  {
    name: "Tundra Stereo",
    slug: "tundra-stereo",
    description: "Precision stereo imaging with mid-side processing and width control.",
    price: 139,
    category: "Stereo",
    features: [
      "Advanced mid-side processing",
      "Stereo width analyzer",
      "Phase correlation metering",
      "Mono compatibility check"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "2 activations"],
    demoUrl: "/audio/tundra-stereo-demo.mp3"
  },
  {
    name: "Arctic Suite",
    slug: "arctic-suite",
    description: "Complete mastering chain with all Arctic Audio processors.",
    price: 599,
    category: "Bundle",
    isBundle: true,
    bundleProducts: ["arctic-echo", "glacier-reverb", "polar-dynamics", "aurora-eq", "frost-limiter", "tundra-stereo"],
    features: [
      "All 6 Arctic Audio plugins",
      "Unified preset system",
      "Advanced metering suite",
      "Cross-plugin recall",
      "Priority support included"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Priority support"],
    demoUrl: "/audio/arctic-suite-demo.mp3"
  },
  {
    name: "Midnight Studio Bundle",
    slug: "midnight-studio-bundle",
    description: "Essential mixing trio for pristine clarity and depth.",
    price: 349,
    category: "Bundle",
    isBundle: true,
    bundleProducts: ["aurora-eq", "polar-dynamics", "glacier-reverb"],
    features: [
      "Aurora EQ + Polar Dynamics + Glacier Reverb",
      "Integrated workflow presets",
      "Save 25% vs individual purchase",
      "Lifetime updates"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Email support"],
    demoUrl: "/audio/midnight-studio-demo.mp3"
  }
];

export const productMap = new Map(products.map((product) => [product.slug, product]));
