<template>
  <div class="home">
    <img src="https://i.postimg.cc/9QfTh0tF/xy55bl5mzam-uai-1600x900.jpg" class="homePage" alt="">
    <div class="overlay-text">
      <p>BE BRIGHT</p>
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
.homePage {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay-text {
  position: absolute;
  top: 50%; /* Adjust the top position as needed */
  left: 50%; /* Adjust the left position as needed */
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; /* Adjust text color */
  font-size: 100px; /* Adjust font size */
}
</style>
