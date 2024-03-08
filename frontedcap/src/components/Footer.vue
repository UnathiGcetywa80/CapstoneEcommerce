<template>
    <div class="container-fluid fixed-bottom">
      <div id="app"></div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            Connect with us:
            <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linked"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="lead">
            BE BRIGHT &copy;
            <span>{{ currYear }}</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComp',
    data() {
      return {
        currYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .fixed-bottom {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  .social-link {
    color: #fff;
    margin: 0 5px;
    text-decoration: none;
    font-size: 20px;
  }
  
  
  .fa-facebook {
    background-image: "https://i.postimg.cc/C1bGMXWJ/facebook.jpg"
  }
  
  .fa-linkedin {
    background-image: "https://i.postimg.cc/htxPYnxC/linked.jpg"

  }
  
  .fa-instagram {
    background-image: "https://i.postimg.cc/ZKPJPHhg/insta.jpg"
  }
  </style>
  