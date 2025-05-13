<template>
  <section id="hero" class="hero">
    <img id="hero-bottle" src="@/assets/heineken-bottle.png" alt="Heineken Bottle" />
    <div class="tagline">
      <h1>premium quality</h1>
      <img class="star" src="@/assets/red-star.png" alt="Red Star" />
    </div>
  </section>
</template>
<script setup></script>
<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(to bottom, #e8f5e9, #c8e6c9);
}
#hero-bottle {
  position: absolute;
  z-index: 2;
  height: 90vh;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  will-change: transform;
  backface-visibility: hidden;
}

.tagline {
  text-align: center;
  z-index: 5;
}
.tagline h1 {
  font-size: 11vw;
  font-family: var(--headline-font);
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url("@/assets/texture.png");
  background-size: cover;
}
.star {
  height: 18vh;
  transform: rotate(-25deg);
  margin-top: -6vh;
}
</style>
