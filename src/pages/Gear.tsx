import Card from '../components/Card';

import {
  dailyDrivers,
  desktopParts,
  nasParts,
  type Part,
} from '../data/gear';

function PartsGroup({ title, parts }: { title?: string; parts: Part[] }) {
  return (
    <>
      {title && <h2 className="text-2xl font-semibold my-8">{title}</h2>}
      <ul className="space-y-2">
        {parts.map((p) => (
          <li key={p.name}>
            <Card
              title={p.name}
              body={p.description}
              href={p.url}
              imgSrc={p.image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Gear() {
  return (
    <>
      <title>߸ gear</title>
      <h1>Gear</h1>

      <PartsGroup parts={dailyDrivers} />

      <PartsGroup title="Desktop" parts={desktopParts} />

      <PartsGroup title="NAS" parts={nasParts} />
    </>
  );
}
