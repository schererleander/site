
"use client"

import { useRef } from 'react';
import MapGL, { Marker, MapRef } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const KARLSRUHE: { longitude: number, latitude: number } = { longitude: 8.4037, latitude: 49.0069 };

export default function Map() {
  const mapRef = useRef<MapRef>(null);

  const onMapLoad = () => {
    mapRef.current?.flyTo({
      center: [KARLSRUHE.longitude, KARLSRUHE.latitude],
      zoom: 10,
      speed: 0.5,
      curve: 1,
      essential: true
    });
  };

  return (
    <div
      className="relative h-[350px] -mx-4 sm:mx-0 sm:rounded-xl overflow-hidden sm:border z-0 bg-background"
      style={{
        maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
      }}
    >
      <MapGL
        ref={mapRef}
        mapLib={maplibregl}
        onLoad={onMapLoad}
        initialViewState={{
          longitude: KARLSRUHE.longitude,
          latitude: KARLSRUHE.latitude,
          zoom: 2
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={{
          version: 8,
          sources: {
            "carto-dark": {
              type: "raster",
              tiles: ["https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"],
              tileSize: 256,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
            },
          },
          layers: [
            {
              id: "carto-dark-layer",
              type: "raster",
              source: "carto-dark",
              minzoom: 0,
              maxzoom: 22,
            },
          ],
        }}
        attributionControl={false}
      >
        <Marker longitude={KARLSRUHE.longitude} latitude={KARLSRUHE.latitude} color="red">
             <div style={{width:'12px',height:'12px',background:'var(--background)',borderRadius:'50%',border:'2px solid var(--foreground)',boxShadow:'0 0 10px rgba(0,0,0,0.5)'}} />
        </Marker>
      </MapGL>
    </div>
  );
}
