<template>
  <nav id="nav_left">
    <i class="ri-search-line"></i>
    <i class="ri-shopping-cart-line"></i>
  </nav>
</template>
<style scoped>
#nav_left {
  position: fixed;
  left: 0;
  top: 72px;
  bottom: 0;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 32px;
  background: #fafafa;
  border-right: 1px solid #eee;
  z-index: 900;
}
#nav_left i {
  font-size: 1.4rem;
  cursor: pointer;
  color: #555;
}
</style>
