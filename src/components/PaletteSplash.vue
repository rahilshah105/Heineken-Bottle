<template>
  <section class="palette">
    <PaletteItem
      img="green-splash.png"
      title="fresh hops"
      copy="Aromas of grassy, floral hop character that give Heineken its trademark bouquet."
    />
    <PaletteItem
      img="golden-splash.png"
      title="golden hue"
      copy="Brilliant clarity and a radiant golden colour greet you in every pour."
    />
    <PaletteItem
      img="froth-splash.png"
      title="creamy head"
      copy="Smooth, lasting foam crowned by our iconic red star."
    />
  </section>
</template>
<script setup>
import PaletteItem from "./partials/PaletteItem.vue";
</script>
<style scoped>
.palette {
  display: flex;
  gap: 4vw;
  justify-content: center;
  align-items: center;
  padding: 12vh 0;
  flex-wrap: wrap;
}
</style>
