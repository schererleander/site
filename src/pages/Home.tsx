import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Projects } from "@/data/projects";
import { Tools } from "@/data/tools";
import { Github, Mail } from "lucide-react";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const KARLSRUHE: [number, number] = [49.0069, 8.4037];

const icon = L.divIcon({
  html: `<div style="width:12px;height:12px;background:#fff;border-radius:50%;border:2px solid #000;box-shadow:0 0 10px rgba(255,255,255,0.5)"></div>`,
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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const obs = new MutationObserver(checkDark);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  if (!mounted) return null;

  const tileUrl = isDark 
    ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

  return (
    <main className="container mx-auto py-12">
      <section className="relative">
        <div 
          className="relative h-[450px] w-full overflow-hidden rounded-xl border border-border z-0"
          style={{ 
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)", 
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)" 
          }}
        >
          <MapContainer center={[49, 8.4]} zoom={10} scrollWheelZoom={false} className="h-full w-full" zoomControl={false} attributionControl={false}>
            <TileLayer key={tileUrl} url={tileUrl} />
            <Marker position={KARLSRUHE} icon={icon} />
            <MapEffects />
          </MapContainer>
        </div>

        <div className="relative -mt-32 z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, <span className="text-blue-500 dark:text-purple-500">I'm Leander.</span></h1>
          <p className="text-lg max-w-2xl mx-auto mb-4">Passionate about hardware & software, pursuing computer science studies. Currently building 3D-printing projects and exploring homelabing.</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="mt-4"><a href="https://github.com/schererleander" target="_blank" rel="noopener noreferrer"><Github className="mr-2 h-4 w-4" /> Github</a></Button>
            <Button asChild className="mt-4 bg-blue-500 dark:bg-purple-500"><a href="mailto:leander@schererleander.de" target="_blank" rel="noopener noreferrer"><Mail className="mr-2 h-4 w-4" /> Mail</a></Button>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Tools.map((t, i) => (
            <Card key={i} className="bg-secondary border border-border p-2">
              <div className="flex items-center px-4 py-2">
                <div className={`p-2 rounded-sm ${t.color}`}><img src={t.image} alt={t.name} className="w-6 h-6" /></div>
                <div className="ml-4"><CardTitle>{t.name}</CardTitle><CardDescription>{t.description}</CardDescription></div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-2xl font-semibold mb-6">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer">
              <Card className="bg-secondary border border-border py-2 h-full">
                <CardContent>
                  <img src={p.image} alt={p.name} className="w-full h-48 rounded-lg mb-4 object-cover mx-auto" />
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 my-4">{p.badges.map(b => <Badge key={b}>{b}</Badge>)}</div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
