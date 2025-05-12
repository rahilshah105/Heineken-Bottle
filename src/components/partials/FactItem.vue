<template>
  <div class="fact">
    <h4>{{ label }}</h4>
    <small>{{ sub }}</small>
    <div class="value">
      {{ value }}<span>{{ unit }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps(["label", "sub", "value", "unit"]);
</script>
<style scoped>
.fact {
  border-top: 2px solid var(--heineken-green);
  padding-top: 16px;
  max-width: 240px;
}
.value {
  font-size: 3rem;
  font-family: "druk heavy";
}
.value span {
  font-size: 2rem;
}
</style>
