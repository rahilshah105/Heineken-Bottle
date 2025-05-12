<template>
  <div id="app">
    <NavTop />
    <NavLeft />

    <!-- LocomotiveScroll target -->
    <div id="main">
      <HeroBottle />
      <ProductDetails />
      <TasteNotes />
      <PaletteSplash />
      <AvailabilityGrid />
      <RecipeCTA />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
/* --------------------------------------------------
import useSmoothScroll from "@/composables/useSmoothScroll";
-------------------------------------------------- */

import NavTop from "@/components/NavTop.vue";
import NavLeft from "@/components/NavLeft.vue";
import HeroBottle from "@/components/HeroBottle.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import TasteNotes from "@/components/TasteNotes.vue";
import PaletteSplash from "@/components/PaletteSplash.vue";
import AvailabilityGrid from "@/components/AvailabilityGrid.vue";
import RecipeCTA from "@/components/RecipeCTA.vue";

// GSAP registration + smooth‑scroll composable
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  // const { locoScroll } = useSmoothScroll("#main");

  // Bottle rotation / scale animations (targets inside HeroBottle)
  gsap.to("#hero-bottle", {
    rotate: -15,
    scrollTrigger: {
      trigger: "#hero-bottle",
      scroller: "#main",
      start: "top 5%",
      end: "top -400%",
      scrub: true,
      pin: true,
    },
  });

  gsap.to("#hero-bottle", {
    scale: 0.55,
    scrollTrigger: {
      trigger: "#availability-section",
      scroller: "#main",
      start: "top 450%",
      end: "top -450%",
      scrub: true,
      pin: true,
    },
  });
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --heineken-green: #00753a;
  --heineken-red: #d4002a;
  --headline-font: "Anton", sans-serif;
  --body-font: "Dosis", sans-serif;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: var(--body-font);
}
#main {
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
}
::-webkit-scrollbar {
  display: none;
}
</style>
