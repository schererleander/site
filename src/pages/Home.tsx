import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <title>߸ hi</title>
      <h1>Hi, <span className="text-blue-500 dark:text-purple-500">I'm Leander.</span></h1>

      <p className="leading-relaxed mb-6">
        I have a passion for hardware and software, studying computer science. Currently building own 3d printing projects and learning nix.
      </p>

      <Gallery
        images={[
          { src: "/images/3ds.webp", alt: "Nintendo 3DS", id: 1 },
          { src: "/images/esp32.webp", alt: "ESP 32", id: 2 },
          { src: "/images/rice.webp", alt: "Linux rice", id: 3 },
          { src: "/images/setup.webp", alt: "Setup", id: 4 },
          { src: "/images/luigimansion.webp", alt: "Luigi Mansion", id: 5 },
          { src: "/images/ocarinaoftime.webp", alt: "Ocarina of Time", id: 6 },
          { src: "/images/hellsparadise.webp", alt: "Hells paradise", id: 7 }
        ]}
      />

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
