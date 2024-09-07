<template>
  <svg class="pointer-events-none fixed isolate z-50 opacity-100 top-0 mix-blend-soft-light filter-brightness-105 filter-saturate-0" width="100%" height="100%">
    <filter id="pedroduarteisalegend">
      <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="4" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter="url(#pedroduarteisalegend)" />
  </svg>
</template>
