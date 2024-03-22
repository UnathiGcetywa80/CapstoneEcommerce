<template>
  <div class="home">
    <img src="https://i.postimg.cc/tJGbv9qz/homeimg3.jpg" alt="" class="homePage">
    <div class="overlay-text">
      <p class="bright-text">BE BRIGHT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.homePage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(250, 247, 247);
}

.bright-text {
  font-family: 'Lobster', cursive;
  font-size: 100px;
}
</style>
