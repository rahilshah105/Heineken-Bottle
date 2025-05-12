<template>
  <section id="availability-section" class="availability">
    <h5>Availability</h5>
    <h2>Year Round</h2>
    <div class="grid">
      <ProductCard img="keg.png" title="On Tap" />
      <ProductCard img="sixpack.png" title="12‑OZ Bottles" subtitle="6‑PACK" />
      <ProductCard img="can.png" title="12‑OZ Cans" subtitle="6‑PACK" />
      <ProductCard img="tallboy.png" title="16‑OZ Cans" />
      <ProductCard img="bottle-24oz.png" title="24‑OZ Bottle" />
    </div>
  </section>
</template>
<script setup>
import ProductCard from "./partials/ProductCard.vue";
</script>
<style scoped>
.availability {
  text-align: center;
  padding: 12vh 5vw;
}
.availability h5 {
  font-size: 2rem;
}
.availability h2 {
  font-family: var(--headline-font);
  font-size: 6vw;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url("@/assets/texture.png");
}
.grid {
  margin-top: 6vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 3vw;
  align-items: start;
}
</style>
