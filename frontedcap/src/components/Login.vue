<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Add your authentication logic here
        // For simplicity, you can use a dummy check
        if (this.username === 'demo' && this.password === 'password') {
          // Successful login, redirect or perform actions as needed
          alert('Login successful!');
        } else {
          // Failed login, show error message or redirect to an error page
          alert('Invalid username or password');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling for the login form */
  .login-form {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  