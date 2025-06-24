export interface Part {
  name: string;
  description: string;
  image?: string;
  url?: string;
}

export const dailyDrivers: Part[] = [
  { name: "iPhone 11", description: "64 GB - White", url: "https://support.apple.com/111865", image: "/images/iphone11.webp" },
  { name: "AirPods Pro", description: "1st Gen", url: "https://support.apple.com/111861", image: "/images/airpodspro.webp" },
  { name: "MacBook Air", description: "13\" - M2 - 512 GB", url: "https://support.apple.com/111867", image: "/images/macbookair.webp" }
];

export const desktopParts: Part[] = [
  { name: "AMD Ryzen 7 7700X", description: "CPU", image: "/images/amdryzen7700x.webp" },
  { name: "Noctua NH-D9L chromax.black", description: "CPU cooler", image: "/images/noctuanh-d9l.webp" },
  { name: "G.Skill Trident Z5 NEO 32 GB DDR5-6000", description: "RAM", image: "/images/gskilltridentz5.webp" },
  { name: "ROG STRIX B650E-I", description: "Motherboard", image: "/images/b650e-i.webp" },
  { name: "Samsung 980 Pro 2 TB", description: "NVMe (Windows)", image: "/images/980pro.webp" },
  { name: "Crucial P3 Plus 500 GB", description: "NVMe (Linux)", image: "/images/p3plus.webp" },
  { name: "Corsair SF750", description: "SFX PSU", image: "/images/sf750.webp" },
  { name: "XFX Radeon RX 9070 XT QuickSilver", description: "GPU", image: "/images/rx9070xt.webp" },
  { name: "NCASE M2 - Round", description: "Case", image: "/images/ncasem2.webp" }
];

export const nasParts: Part[] = [
  { name: "AMD Ryzen 5 5600G", description: "CPU", image: "/images/amdryzen55600g.webp" },
  { name: "Kingston KSM32ED8 2x 8 GB ECC", description: "RAM", image: "/images/ksm32ed8.webp" },
  { name: "ASRock B550M-ITX", description: "Motherboard", image: "/images/B550MITX.webp" },
  { name: "Seagate IronWolf 8 TB x 2", description: "Storage", image: "/images/seagateironwolf.webp" },
  { name: "Patriot P300 128 GB", description: "Cache SSD", image: "/images/patriop300.webp" },
  { name: "Corsair SF450", description: "SFX PSU", image: "/images/sf450.webp" },
  { name: "Jonsbo N2", description: "Mini-NAS case", image: "/images/jonsbon2.webp" }
];