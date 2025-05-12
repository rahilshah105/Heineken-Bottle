<template>
  <div class="card">
    <img :src="`@/assets/${img}`" :alt="title" />
    <h4>{{ title }}</h4>
    <h6 v-if="subtitle">{{ subtitle }}</h6>
  </div>
</template>
<script setup>
defineProps(["img", "title", "subtitle"]);
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card img {
  width: 100%;
  height: auto;
  max-height: 240px;
  object-fit: contain;
  transition: 0.3s;
}
.card img:hover {
  transform: translateY(-6px) rotate(-2deg);
}
.card h4 {
  margin-top: 12px;
  font-family: var(--body-font);
  font-weight: 600;
}
.card h6 {
  font-size: 0.85rem;
  color: #666;
}
</style>
