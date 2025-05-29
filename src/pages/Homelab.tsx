import nasImg from '../assets/nas.png';
import piImg from '../assets/pi.png';
import LinkWithIcon from '../components/LinkWithIcon';

const nasServices = [
  "Jellyfin: Media library",
  "Kavita: Ebooks and manga",
  "AdGuard Home: Ad blocking",
  "Nginx: Reverse proxy",
  "Ollama: Enough for small LLM testing",
];

export default function HomelabPage() {
  return (
    <>
      <title>߸ homelab</title>
      <h1>Home lab</h1>

      <section className="mb-12">
        <h2>NAS</h2>
        <img src={nasImg} alt="NAS" className="mx-auto mb-4 w-64 rounded-lg shadow" />
        <p className="mb-4 leading-relaxed">
          My custom-built NAS running <strong>Unraid</strong> hosts the following services. See <LinkWithIcon href='/gear'>gear</LinkWithIcon> for specs.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {nasServices.map((svc) => (
            <li key={svc}>{svc}</li>
          ))}
        </ul>
        <p className="mb-4 leading-relaxed">
          For remote access, I use a VPN to connect to the machine. I also back up my MacBook using Time Machine, and for my desktop and VPS I use rsync.
        </p>
      </section>

      <section className="mb-12">
        <h2>Raspberry Pi</h2>
        <img src={piImg} alt="Raspberry Pi 5" className="mx-auto mb-4 w-64 rounded-lg shadow" />
        <p className="mb-4 leading-relaxed">
          Raspberry Pi 5 (8GB) running Homebridge to integrate non-HomeKit devices. It also serves as a precision NTP server using a <LinkWithIcon href='https://store.uputronics.com/products/raspberry-pi-gps-rtc-expansion-board' target='_blank'>Uputronics GPS module</LinkWithIcon>.
        </p>
      </section>

      {/* VPS */}
      <section>
        <h2>VPS</h2>
        <p className="mb-4 leading-relaxed">
          Cheap Ionos VPS for services exposed to the internet. Mainly using it for hosting this website and Nextcloud.
        </p>
      </section>
    </>
  );
}