/* /src/components/partials/PaletteItem.vue */
<template>
  <div class="item">
    <img :src="`@/assets/${img}`" :alt="title" />
    <div class="caption">
      <h4>{{ title }}</h4>
      <p>{{ copy }}</p>
    </div>
  </div>
</template>
<script setup>
defineProps(["img", "title", "copy"]);
</script>
<style scoped>
.item {
  position: relative;
  text-align: center;
}
.item img {
  width: 22vw;
  max-width: 280px;
}
.caption {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
}
.caption h4 {
  font-family: var(--headline-font);
  text-transform: uppercase;
  margin-bottom: 8px;
  border-bottom: 2px solid #000;
}
</style>
