<template>
  <div class="fact-item">
    <div class="label">{{ label }}</div>
    <div class="sub">{{ sub }}</div>
    <div class="value">
      <span class="number">{{ value }}</span
      ><span class="unit">{{ unit }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  sub: String,
  value: [String, Number],
  unit: String,
});
</script>

<style scoped>
.fact-item {
  background: #f9f9f9;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--heineken-green);
  margin-bottom: 0.25rem;
}

.sub {
  font-size: 0.75rem;
  color: #777;
  margin-bottom: 0.75rem;
}

.value .number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
}

.value .unit {
  font-size: 1.25rem;
  margin-left: 0.25rem;
  color: #333;
}
</style>
