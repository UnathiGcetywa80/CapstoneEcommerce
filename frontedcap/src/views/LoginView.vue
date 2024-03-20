<template>
    <div class="container">
      <div class="register-container">
        <h2>Register</h2>
        <form @submit.prevent="registerFormSubmit">
          <input type="text" v-model="registerUserData.full_name" placeholder="Full Name" required>
          <input type="text" v-model="registerUserData.username" placeholder="Username" required>
          <input type="email" v-model="registerUserData.email" placeholder="Email" required>
          <input type="password" v-model="registerUserData.password" placeholder="Password" required>
          <select v-model="registerUserData.userRole" class="form-select" required>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
      <div class="login-container">
  <h2>Login</h2>
  <form @submit.prevent="loginFormSubmit">
    <input type="email" v-model="loginData.email" placeholder="Email" required>
    <input type="password" v-model="loginData.password" placeholder="Password" required>
    <select v-model="loginData.userRole" class="form-select" required>
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <button type="submit">Login</button>
  </form>
</div>



    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
  
    data() {
      return {
        registerUserData: {
          userRole: '',
          full_name: '',
          username: '',
          email: '',
          password: ''
        },
        loginData: {
          email: '',
          password: '',
          userRole: this.userRole
        }
      }
    },
  
    methods: {
       registerFormSubmit() {
      
          this.$store.dispatch('registerUser', this.registerUserData);
          this.$router.push('/products'); 
       
      },
  
       loginFormSubmit() {
        this.loginData.full_name = this.$store.state.user ? this.$store.state.user.full_name : ''; // Set full_name from store
        this.$store.dispatch('loginUser', this.loginData);
        this.$router.push('/products')
      }
    }
  }
  </script>
  
  <style scoped>
 body, h2, form, input, button, p, a {
        margin: 0;
        padding: 0;
    }
    
    body {
        font-family: 'Lobster', cursive;
    }
    
    .container {
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        margin: 50px auto;
    }
    
    .login-container, .register-container {
        width: 45%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }
    
    h2 {
        font-size: 50px;
        margin-bottom: 20px;
        text-align: center;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    input[type="text"],
    input[type="email"],
    input[type="password"] {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    
    input[type="submit"] {
        padding: 10px 15px;
        border: none;
        border-radius: 3px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
    }
    
    input[type="submit"]:hover {
        background-color: #0056b3;
    }
    
    p {
        margin-top: 15px;
        text-align: center;
    }
    
    a {
        color: #007bff;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
  </style>
  
