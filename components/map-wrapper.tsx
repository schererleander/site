
"use client"

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./map'))

export default function MapWrapper() {
  return <Map />
}
