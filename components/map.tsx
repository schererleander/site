"use client";

import { useRef } from 'react';
import MapGL, { Marker, MapRef } from 'react-map-gl/maplibre';
import maplibregl, { type StyleSpecification } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Protocol } from 'pmtiles';

import styleDark from '@/public/style-dark.json';

const KARLSRUHE = { longitude: 8.4037, latitude: 49.0069 };
const mapStyle = styleDark as unknown as StyleSpecification;

if (typeof window !== 'undefined') {
  const globalForProtocol = globalThis as typeof globalThis & {
    __maplibrePmtilesProtocol?: Protocol;
  };

  if (!globalForProtocol.__maplibrePmtilesProtocol) {
    globalForProtocol.__maplibrePmtilesProtocol = new Protocol({ metadata: true });
    maplibregl.addProtocol('pmtiles', globalForProtocol.__maplibrePmtilesProtocol.tile);
  }
}

export default function Map() {
  const mapRef = useRef<MapRef>(null);

  const onMapLoad = () => {
    mapRef.current?.flyTo({
      center: [KARLSRUHE.longitude, KARLSRUHE.latitude],
      zoom: 8,
      speed: 0.8,
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
          zoom: 3
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle}
        attributionControl={false}
      >
        <Marker longitude={KARLSRUHE.longitude} latitude={KARLSRUHE.latitude}>
          <div className="h-3 w-3 rounded-full border-2 border-foreground bg-background shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
        </Marker>
      </MapGL>
    </div>
  );
}
