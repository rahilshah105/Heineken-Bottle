<template>
  <div id="app">
    <NavTop />

    <div id="main">
      <!-- Hero Section -->
      <section id="hero" class="hero">
        <div class="container">
          <div class="bottle-wrapper">
            <img id="hero-bottle" src="@/assets/heineken-bottle.png" alt="Heineken Bottle" />
          </div>
          <div class="hero-content">
            <h1>Open Your World</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <button class="cta-button">Learn More</button>
          </div>
        </div>
      </section>

      <!-- Your other sections down here -->
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

import NavTop from "@/components/NavTop.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import TasteNotes from "@/components/TasteNotes.vue";
import PaletteSplash from "@/components/PaletteSplash.vue";
import AvailabilityGrid from "@/components/AvailabilityGrid.vue";
import RecipeCTA from "@/components/RecipeCTA.vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  // 1) rotate + pin the bottle in the hero
  gsap.to("#hero-bottle", {
    rotate: -15,
    scrollTrigger: {
      trigger: "#hero-bottle",
      scroller: "#main",
      start: "top 5%",
      end: "top -400%",
      scrub: true,
      pin: true, // ← only here
      pinSpacing: false, // optional — prevents added gap
    },
  });

  // 2) scale the bottle later, when you hit the availability section
  gsap.to("#hero-bottle", {
    scale: 0.8,
    scrollTrigger: {
      trigger: "#products", // ← point at your real section
      scroller: "#main",
      start: "top 30%", // tweak these so it feels smooth
      end: "top 5%",
      scrub: true,
      // pin: false
    },
  });
});
gsap.to("#hero-bottle", {
  scale: 0.8,
  ease: "none", // no easing so it’s a perfectly linear shrink
  scrollTrigger: {
    trigger: "#products",
    scroller: "#main",
    start: "top 30%",
    end: "bottom 30%", // <- longer section: from top 30% all the way to bottom 30%
    scrub: true,
    // markers: true      // ← uncomment to visualize start/end
  },
});
</script>

<style scoped>
:root {
  --heineken-green: #00753a;
  --headline-font: "Anton", sans-serif;
  --body-font: "Dosis", sans-serif;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: "Dosis", sans-serif;
  overflow: hidden;
}

#main {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  display: none;
}

/* Hero */
/* replace your existing .hero background-color */
.hero {
  /* radial gradient: bright in center, darker at edges */
  background: radial-gradient(circle at center, #00753a 0%, #005a31 50%, rgb(0, 48, 29) 100%);
  color: #fff;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 1rem;
  align-items: center;
  width: 70%;
  max-width: 1200px;
}

/* Bottle */
.bottle-wrapper {
  display: flex;

  justify-content: flex-end;
}
.bottle-wrapper img {
  height: 85vh;
  transform-origin: bottom center;
  backface-visibility: hidden;
  will-change: transform;
}

/* Text panel */
.hero-content h1 {
  font-family: "Anton", sans-serif;
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.125rem;
  line-height: 1.5;
  max-width: 400px;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #fff;
  color: #00753a;
}
</style>
