<template>
  <section class="taste">
    <h1>Taste Notes</h1>
    <div class="content">
      <div class="video">
        <a href="https://youtu.be/HBpMfNg3bOY" target="_blank" rel="noopener">
          <img src="@/assets/youtube_thumbnail.jpg" alt="Brewmaster video" />
        </a>
        <h5>Hear it from our brewmaster Willem van Waesberghe</h5>
      </div>
      <div class="text">
        <h5>CRISP· BALANCED· REFRESHING</h5>
        <p>
          Golden lager with a delicate hop aroma, subtle fruity esters, and the signature Heineken finish - sparkling
          and satisfying.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.taste {
  padding: 8vh 10vw;
  text-align: center;
  background-color: #005a31;
}
.taste h1 {
  font-size: 12vw;
  font-family: var(--headline-font);
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url("@/assets/texture.png");
}
.content {
  display: flex;
  flex-wrap: wrap;
  gap: 4vw;
  align-items: center;
  justify-content: center;
}
.video img {
  width: 320px;
  border-radius: 12px;
}
.video h5 {
  max-width: 280px;
  margin: 12px auto 0;
  font-weight: 600;
}
.text {
  max-width: 420px;
}
.text h5 {
  color: var(--heineken-green);
  font-weight: 700;
  margin-bottom: 12px;
}
</style>
