import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const KARLSRUHE: [number, number] = [49.0069, 8.4037];

const icon = L.divIcon({
  html: `<div style="width:12px;height:12px;background:var(--background);border-radius:50%;border:2px solid var(--foreground);box-shadow:0 0 10px rgba(0,0,0,0.5)"></div>`,
  className: "",
  iconSize: [12, 12],
});

function MapEffects() {
  const map = useMap();
  useEffect(() => {
    map.flyTo(KARLSRUHE, 14, { duration: 3 });
  }, [map]);
  return null;
}

export default function Map() {
  const tileUrl = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  return (
    <div
      className="relative h-[450px] w-full overflow-hidden rounded-xl border border-border z-0"
      style={{
        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
      }}
    >
      <MapContainer center={[49, 8.4]} zoom={10} scrollWheelZoom={false} className="h-full w-full" zoomControl={false} attributionControl={false}>
        <TileLayer url={tileUrl} />
        <Marker position={KARLSRUHE} icon={icon} />
        <MapEffects />
      </MapContainer>
    </div>
  );
}
