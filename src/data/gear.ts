import iphone11Img from "../assets/iphone11.webp";
import airpodsProImg from "../assets/airpodspro.webp";
import macbookAirImg from "../assets/macbookair.webp";

import ryzen7700xImg from "../assets/amdryzen7700x.webp";
import ryzen5600gImg from "../assets/amdryzen55600g.webp";
import noctuaNhD9lImg from "../assets/noctuanh-d9l.webp";
import gskillTridentZ5Img from "../assets/gskilltridentz5.webp";
import b650eIImg from "../assets/b650e-i.webp";
import b550mItxImg from "../assets/B550MITX.webp";
import pro980Img from "../assets/980pro.webp";
import p3plusImg from "../assets/p3plus.webp";
import patriotP300Img from "../assets/patriop300.webp";
import sf750Img from "../assets/sf750.webp";
import sf450Img from "../assets/sf450.webp";
import rx9070xtImg from "../assets/rx9070xt.webp";
import ncaseM2Img from "../assets/ncasem2.webp";

import ksm32ed8Img from "../assets/ksm32ed8.webp";
import seagateIronWolfImg from "../assets/seagateironwolf.webp";
import jonsboN2Img from "../assets/jonsbon2.webp";

export interface Part {
  name: string;
  description: string;
  /** string URL returned by the static import above */
  image?: string;
  url?: string;
}

export const dailyDrivers: Part[] = [
  {
    name: "iPhone 11",
    description: "64 GB - White",
    url: "https://support.apple.com/111865",
    image: iphone11Img,
  },
  {
    name: "AirPods Pro",
    description: "1st Gen",
    url: "https://support.apple.com/111861",
    image: airpodsProImg,
  },
  {
    name: "MacBook Air",
    description: "13\" - M2 - 512 GB",
    url: "https://support.apple.com/111867",
    image: macbookAirImg,
  },
];

export const desktopParts: Part[] = [
  { name: "AMD Ryzen 7 7700X", description: "CPU", image: ryzen7700xImg },
  { name: "Noctua NH-D9L chromax.black", description: "CPU cooler", image: noctuaNhD9lImg },
  { name: "G.Skill Trident Z5 NEO 32 GB DDR5-6000", description: "RAM", image: gskillTridentZ5Img },
  { name: "ROG STRIX B650E-I", description: "Motherboard", image: b650eIImg },
  { name: "Samsung 980 Pro 2 TB", description: "NVMe (Windows)", image: pro980Img },
  { name: "Crucial P3 Plus 500 GB", description: "NVMe (Linux)", image: p3plusImg },
  { name: "Corsair SF750", description: "SFX PSU", image: sf750Img },
  { name: "XFX Radeon RX 9070 XT QuickSilver", description: "GPU", image: rx9070xtImg },
  { name: "NCASE M2 - Round", description: "Case", image: ncaseM2Img },
];

export const nasParts: Part[] = [
  { name: "AMD Ryzen 5 5600G", description: "CPU", image: ryzen5600gImg },
  { name: "Kingston KSM32ED8 2x 8 GB ECC", description: "RAM", image: ksm32ed8Img },
  { name: "ASRock B550M-ITX", description: "Motherboard", image: b550mItxImg },
  { name: "Seagate IronWolf 8 TB x 2", description: "Storage", image: seagateIronWolfImg },
  { name: "Patriot P300 128 GB", description: "Cache SSD", image: patriotP300Img },
  { name: "Corsair SF450", description: "SFX PSU", image: sf450Img },
  { name: "Jonsbo N2", description: "Mini-NAS case", image: jonsboN2Img },
];