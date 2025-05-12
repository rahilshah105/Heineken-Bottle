<template>
  <section id="products" class="details">
    <div class="copy">
      <h3>since 1873</h3>
      <h2>Original Lager</h2>
      <p>
        Brewed with pure malt, Heineken® A‑yeast and more than 150 years of Dutch mastery, this crisp pilsner shines
        golden with a mild bitter note and a refreshingly clean finish.
      </p>
      <button>Add to Cart</button>
    </div>
    <div class="facts">
      <FactItem label="ABV" sub="Alcohol by volume" value="5" unit="%" />
      <FactItem label="IBU" sub="International Bitterness Units" value="19" unit="" />
    </div>
  </section>
</template>

<script setup>
import FactItem from "./partials/FactItem.vue";
</script>

<style scoped>
.details {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8vw;
  gap: 6vw;
}
.copy {
  max-width: 420px;
}
.copy h3 {
  color: var(--heineken-green);
  font-family: "Dancing Script", cursive;
  font-size: 1.8rem;
}
.copy h2 {
  font-family: var(--headline-font);
  font-size: 4rem;
  text-transform: uppercase;
  margin: 8px 0 16px;
}
.copy p {
  line-height: 1.6;
  margin-bottom: 24px;
}
.copy button {
  background: var(--heineken-green);
  color: #fff;
  border: none;
  padding: 12px 28px;
  font-weight: 700;
  cursor: pointer;
}
.facts {
  display: grid;
  gap: 32px;
}
</style>
