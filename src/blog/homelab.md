---
title: "Homelab"
date: "2025-06-25"
excerpt: "My Homelab setup"
cover: "/images/nas.webp"
---

## NAS
![NAS](/images/nas.webp)
My custom-built NAS running Unraid hosts the following services. See [gear](/gear) for specs.

- Jellyfin: Media library
- Kavita: Ebooks and manga
- AdGuard Home: Ad blocking
- Nginx: Reverse proxy
- Ollama: Enough for small LLM testing

For remote access, I connect to the machine via VPN. I back up my MacBook to that machine with Time Machine, and I back up my desktop and VPS to it using rsync.

## Raspberry Pi
![Raspberry Pi](/images/pi.webp)
Raspberry Pi 5 (8GB) running [Homebridge](https://homebridge.io/) to integrate non-HomeKit devices. It also serves as a precision NTP server using a [Uputronics](https://store.uputronics.com/products/raspberry-pi-gps-rtc-expansion-board) GPS module.

## VPS
Cheap Ionos VPS running nixos via [nixos-infect](https://github.com/elitak/nixos-infect) for services exposed to the internet. Mainly using it for hosting this website and [Nextcloud](https://nextcloud.com/).

