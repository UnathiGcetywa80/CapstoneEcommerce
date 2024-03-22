<template>
  <div class="Aboutpage">
    <div class="row">
      <div id="carouselExampleSlidesOnly" class="carousel slide col-lg-6" data-bs-ride="carousel" data-bs-interval="2000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.postimg.cc/Y219Ys8H/ookd.jpg" class="d-block w-100" alt="Carousel Image 1">
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/T1SCR3sz/BOOKS.jpg" class="d-block w-100" alt="Carousel Image 2">
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/4xCsZVkx/bookg.jpg" class="d-block w-100" alt="Carousel Image 3">
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h2 class="display-4" id="Aboutpage1">About Us</h2>
        <p class="lead" id="text">
          The Be Bright book shop was founded in 2021 by Unathi Gcetywa, in De Doorns.
        </p>
        <p id="text">
          This website is based on selling books. Our target is mainly on school children. The books are there to help the children upskill their vocabulary in English.
        </p>
        <p id="text">
          Before the electronic era, everyday reading was a ritual that almost everyone who wanted to gain knowledge adapted. The benefits of reading needed not to be reminded all the time. Amongst other things, we have been so preoccupied with social media and the internet that hardly anyone contemplates reading books. While some may be too busy to read, others merely don’t care to read. There are many benefits to reading, from making you smarter to improving your reading and writing skills. In summary, reading books is a multifaceted activity that not only imparts knowledge but also enhances various aspects of personal development, well-being, and connectivity with the world. Cultivating a habit of reading can have long-lasting positive effects on individuals and society as a whole.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
   
  }
};
</script>

<style scoped>
.Aboutpage {
  padding: 100px 0;
  background-color: rgb(192, 192, 192) ;
  background-size: cover;
  background-position: center;
  color: #080808;
}

.carousel-item img {
  border-radius: 10px;
}

#Aboutpage1 {
  font-family: 'Lobster', cursive;
}

#text {
  font-family: 'Lobster', cursive;
}

@media (max-width: 768px) {
  .carousel {
    margin-bottom: 20px;
  }
}
</style>