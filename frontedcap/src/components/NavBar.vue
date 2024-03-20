<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">
        <img src="https://i.postimg.cc/nhjKLxXL/BOOK-SHOP.png" alt="Logo" height="30">
      </a> -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link lobster-text">
              Home
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link lobster-text">
              About
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link lobster-text">
              Products
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link lobster-text">
              Admin
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/checkout" class="nav-link lobster-text">
              Checkout
            </router-link> 
          </li>
          <li class="nav-item">
            <router-link to="/reviews" class="nav-link lobster-text">
              Reviews
            </router-link> 
          </li>
          <!-- <li class="nav-item">
            <router-link to="/cart" class="nav-link lobster-text">
              Cart
            </router-link> 
          </li> -->
          <li class="nav-item">
            <router-link to="/contact" class="nav-link lobster-text">
              Contact
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link lobster-text">
              Login/Register  
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // name: 'Navbar',
}
</script>

<style scoped>
.navbar {
  background-color: #716604;
  color: white;
}

.navbar-nav {
  color: white;
}

.lobster-text {
  color: white;
  font-family: 'Lobster', cursive;
}

.navbar-nav {
  margin-left: auto;
}
</style>
