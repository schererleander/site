import ImageGalleryGrid from "../components/ImageGalleryGrid";

import dsImg from "../assets/3ds.webp";
import esp32Img from "../assets/esp32.webp";
import riceImg from "../assets/rice.webp";
import setupImg from "../assets/setup.webp";
import luigimansionImg from "../assets/luigimansion.webp";
import ocarinaoftimeImg from "../assets/ocarinaoftime.webp";
import hellsparadiseImg from "../assets/hellsparadise.webp";

export default function HomePage() {
  return (
    <>
      <title>߸ hi</title>
      <h1>Hi, <span className="text-blue-500 dark:text-purple-500">I'm Leander.</span></h1>

      <p className="leading-relaxed mb-6">
        I have a passion for hardware and software, studying computer science. Currently building own 3d printing projects and learning nix.
      </p>

      <ImageGalleryGrid images={[{ src: dsImg, alt: "Nintendo 3DS", id: 1}, { src: esp32Img, alt: "ESP 32", id: 2}, { src: riceImg, alt: "Linux rice", id: 3}, { src: setupImg, alt: "Setup", id: 4}, {src: luigimansionImg, alt: "Luigi Mansion", id: 5}, { src: ocarinaoftimeImg, alt: "Ocarina of Time", id: 6}, { src: hellsparadiseImg, alt: "Hells paradise", id: 7 }]} />

      <p className="mb-4">A few things I'm interrested in:</p>

      <ul className="list-disc pl-6 space-y-1">
        <li>Digital minimalism</li>
        <li>*nix systems</li>
        <li>3D printing</li>
        <li>Homelab / self-hosting</li>
        <li>Seinen manga</li>
      </ul>
    </>
  );
}
