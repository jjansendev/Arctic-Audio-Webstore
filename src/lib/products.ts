export type Product = {
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  system: string[];
  license: string[];
  demoUrl?: string;
};

export const products: Product[] = [
  {
    name: "Arctic Echo",
    slug: "arctic-echo",
    description: "A pristine stereo delay with spectral diffusion and icy air.",
    price: 149,
    category: "Delay",
    features: [
      "Dual-tap spectral engine",
      "Tight transient preservation",
      "Synced tempo morphing",
      "Oversampling up to 8x"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "1 activation + 1 portable"],
    demoUrl: "/audio/arctic-echo-demo.mp3"
  },
  {
    name: "Glacier Reverb",
    slug: "glacier-reverb",
    description: "Sculpt expansive atmospheres with surgical clarity and control.",
    price: 179,
    category: "Reverb",
    features: [
      "Adaptive early reflection matrix",
      "Dynamic ice bloom tail",
      "Damping profiles with spectral focus",
      "Clean freeze workflow"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Offline authorization"],
    demoUrl: "/audio/glacier-reverb-demo.mp3"
  },
  {
    name: "Polar Dynamics",
    slug: "polar-dynamics",
    description: "Transparent compression with depth-aware dynamics shaping.",
    price: 129,
    category: "Dynamics",
    features: [
      "Dual-stage compression",
      "Peak + RMS blend",
      "Analog knee emulation",
      "Macro contour control"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "2 activations"],
    demoUrl: "/audio/polar-dynamics-demo.mp3"
  },
  {
    name: "Aurora EQ",
    slug: "aurora-eq",
    description: "Mastering-grade equalizer with luminous tone shaping.",
    price: 159,
    category: "EQ",
    features: [
      "Discrete band sculpting",
      "Match EQ snapshots",
      "Zero-latency mode",
      "Mid/side matrix"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Cloud sync"],
    demoUrl: "/audio/aurora-eq-demo.mp3"
  },
  {
    name: "Frost Limiter",
    slug: "frost-limiter",
    description: "Transparent peak control with musical saturation options.",
    price: 119,
    category: "Limiter",
    features: [
      "Dual-stage limiting",
      "True-peak metering",
      "Auto gain staging",
      "Soft clip warmth"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Offline license file"],
    demoUrl: "/audio/frost-limiter-demo.mp3"
  },
  {
    name: "Arctic Suite",
    slug: "arctic-suite",
    description: "Flagship collection built for mastering-grade clarity.",
    price: 399,
    category: "Bundle",
    features: [
      "Full signal chain modules",
      "Unified preset system",
      "Advanced metering suite",
      "Cross-plugin recall"
    ],
    system: ["macOS 12+", "Windows 10+", "VST3 / AU / AAX"],
    license: ["Single-user perpetual", "Priority support"],
    demoUrl: "/audio/arctic-suite-demo.mp3"
  }
];

export const productMap = new Map(products.map((product) => [product.slug, product]));
