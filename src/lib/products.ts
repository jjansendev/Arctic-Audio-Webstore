export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  longDescription?: string;
  price: number;
  compareAtPrice?: number | null;
  currency?: string;
  images?: string[];
  audioDemoUrl?: string;
  features: string[];
  category: string;
  tags?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  variants?: Array<{
    id: string;
    name: string;
    price: number;
  }>;
  systemRequirements?: {
    os: string[];
    formats: string[];
    cpu: string;
    ram: string;
  };
  system: string[];
  license: string[];
  demoUrl?: string;
  isBundle?: boolean;
  bundleProducts?: string[];
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
      "Advanced psychoacoustic modelling",
      "Real-time analyzer clearly shows what the EQ is doing",
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
    },
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Offline authorization"],
    demoUrl: "/demos/arctic-eq-demo.mp3"
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
    audioDemoUrl: "/demos/arctic-limit-before-after.mp3",
    features: [
      "True peak & inter-sample peak limiting",
      "Adaptive intelligent release",
      "Up to 64x linear-phase oversampling",
      "Ceiling & threshold automation",
      "Comprehensive loudness & peak metering",
      "macOS & Windows - VST3, AU, AAX"
    ],
    category: "Limiter",
    tags: ["limiter", "mastering", "brickwall", "true-peak", "loudness"],
    isNew: true,
    isFeatured: true,
    variants: [{ id: "full-license", name: "Full License", price: 11900 }],
    systemRequirements: {
      os: ["Windows 10+", "macOS 11+"],
      formats: ["VST3", "AU", "AAX"],
      cpu: "Intel/Apple Silicon",
      ram: "4 GB minimum, 8 GB recommended"
    },
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Offline license file"],
    demoUrl: "/demos/arctic-limit-before-after.mp3"
  }
];

export const productMap = new Map(products.map((product) => [product.slug, product]));
