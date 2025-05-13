<template>
  <section id="products" class="details">
    <div class="copy">
      <h3>since 1873</h3>
      <h2>Original Lager</h2>
      <p>
        Brewed with pure malt, Heineken® A-yeast and over 150 years of Dutch mastery, this crisp pilsner shines golden
        with a mild bitter note and a refreshingly clean finish.
      </p>
      <button class="add-button">Add to Cart</button>
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
  margin: 4rem auto 26rem auto;
  width: 92vw;
  max-width: 1200px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.copy h3 {
  font-family: "Dancing Script", cursive;
  font-size: 1.25rem;
  color: var(--heineken-green);
  margin-bottom: 0.5rem;
  font-style: italic;
}

.copy h2 {
  font-family: var(--headline-font);
  font-size: 3.5rem;
  color: #222;
  margin-bottom: 1rem;
  text-transform: uppercase;
  line-height: 1.1;
}

.copy p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.add-button {
  background: var(--heineken-green);
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 600;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.add-button:hover {
  background: #005a31;
}

/* Facts grid */
.facts {
  display: grid;
  gap: 2rem;
}
</style>
