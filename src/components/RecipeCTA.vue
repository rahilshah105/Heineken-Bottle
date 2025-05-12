<template>
  <section id="recipes" class="cta">
    <div class="image">
      <img src="@/assets/food-pairing.jpg" alt="Food pairing" />
    </div>
    <div class="copy">
      <h5>Recipes</h5>
      <h2>Beer Speaks. Bellies Grumble.</h2>
      <p>
        Discover gourmet dishes crafted to complement Heineken’s balanced flavour – from zesty lime tacos to
        herb‑crusted salmon.
      </p>
      <button>Explore Recipes</button>
    </div>
  </section>
</template>
<style scoped>
.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 4vw;
  align-items: center;
  padding: 12vh 8vw;
}
.image img {
  width: 50vw;
  max-width: 600px;
  border-radius: 16px;
}
.copy {
  max-width: 420px;
}
.copy h5 {
  font-size: 1.6rem;
}
.copy h2 {
  font-family: var(--headline-font);
  font-size: 3.2rem;
  margin: 16px 0;
}
.copy button {
  margin-top: 24px;
  background: var(--heineken-green);
  color: #fff;
  border: none;
  padding: 12px 30px;
  font-weight: 700;
  cursor: pointer;
}
</style>
