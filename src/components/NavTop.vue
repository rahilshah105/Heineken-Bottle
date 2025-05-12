<template>
  <nav id="nav_top">
    <img src="@/assets/heineken-logo.png" alt="Heineken" />
    <ul class="links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#products">Products</a></li>
      <li><a href="#recipes">Recipes</a></li>
    </ul>
    <button>Buy Beer</button>
    <i class="ri-menu-line mobile-only" @click="$emit('toggleMenu')"></i>
  </nav>
</template>

<style scoped>
#nav_top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  padding: 0 3vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
#nav_top img {
  height: 46px;
}
.links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
.links a {
  text-decoration: none;
  color: #000;
  font-weight: 600;
}
button {
  background: var(--heineken-green);
  color: #fff;
  border: none;
  padding: 8px 20px;
  font-family: var(--headline-font);
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.mobile-only {
  display: none;
  font-size: 1.8rem;
}
@media (max-width: 768px) {
  .links {
    display: none;
  }
  .mobile-only {
    display: block;
  }
}
</style>
