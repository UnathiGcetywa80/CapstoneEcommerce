<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            <router-link to="/checkout" class="nav-link lobster-text">
              Checkout
            </router-link>
          </li>
          <li v-if="adminLoggedIn" class="nav-item">
            <router-link to="/admin" class="nav-link lobster-text">
              Admin
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link lobster-text">
              Contact
            </router-link>
          </li>
          <!-- Display admin link if logged in as admin -->
          <li v-if="noUserLoggedInShow" class="nav-item">
            <router-link to="/login" class="nav-link lobster-text">
              Login/Register
            </router-link>
          </li>
          <!-- Display logout button if someone is logged in -->
          <li v-if="someoneLoggedInShow" class="nav-item">
            <button @click="logout" class="nav-link lobster-text">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCookies } from 'vue3-cookies'

export default {
  name: 'NavbarComp',

  computed: {
    // Check if logged in as admin
    adminLoggedIn() {
      const { cookies } = useCookies();
      console.log( cookies.get('LegitUser')?.result.userRole);
      return cookies.get('LegitUser')?.result?.userRole === 'admin';
    },
    // Check if no user logged in
    noUserLoggedInShow() {
      const { cookies } = useCookies()
      return cookies.get('LegitUser') == null;
    },
    // Check if someone is logged in
    someoneLoggedInShow() {
      const { cookies } = useCookies()
      return cookies.get('LegitUser');
    }
  },

  methods: {
    // Logout function
    logout() {
      const { cookies } = useCookies()
      cookies.remove('LegitUser'); 
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: grey;
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
