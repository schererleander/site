
import { withContentlayer } from 'next-contentlayer2'

/** @type {import('next').NextConfig} */
const nextConfig = { 
  reactStrictMode: true,
  transpilePackages: ['react-map-gl', 'maplibre-gl'],
  output: 'standalone',
}

export default withContentlayer(nextConfig)
