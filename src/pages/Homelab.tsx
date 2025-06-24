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
        <img src="/images/nas.webp" alt="NAS" className="mx-auto mb-4 w-64 rounded-lg shadow" />
        <p className="mb-4 leading-relaxed">
          My custom-built NAS running <strong>Unraid</strong> hosts the following services. See <LinkWithIcon href='/gear'>gear</LinkWithIcon> for specs.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          {nasServices.map((svc) => (
            <li key={svc}>{svc}</li>
          ))}
        </ul>
        <p className="mb-4 leading-relaxed">
          For remote access, I connect to the machine via VPN. I back up my MacBook to that machine with Time Machine, and I back up my desktop and VPS to it using rsync.
        </p>
      </section>

      <section className="mb-12">
        <h2>Raspberry Pi</h2>
        <img src="/images/pi.webp" alt="Raspberry Pi 5" className="mx-auto mb-4 w-64 rounded-lg shadow" />
        <p className="mb-4 leading-relaxed">
          Raspberry Pi 5 (8GB) running <LinkWithIcon href='https://homebridge.io'>Homebridge</LinkWithIcon> to integrate non-HomeKit devices. It also serves as a precision NTP server using a <LinkWithIcon href='https://store.uputronics.com/products/raspberry-pi-gps-rtc-expansion-board' target='_blank'>Uputronics GPS module</LinkWithIcon>.
        </p>
      </section>

      <section>
        <h2>VPS</h2>
        <p className="mb-4 leading-relaxed">
          Cheap Ionos VPS running nixos via <LinkWithIcon href='https://github.com/elitak/nixos-infect'>nixos-infect</LinkWithIcon> for services exposed to the internet. Mainly using it for hosting this website and <LinkWithIcon href='https://nextcloud.com'>Nextcloud</LinkWithIcon>.
        </p>
      </section>
    </>
  );
}