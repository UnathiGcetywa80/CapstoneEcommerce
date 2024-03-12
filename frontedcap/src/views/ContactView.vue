<template>
    <div class="contact-form">
      <h1>Contact us</h1>
      <form action="https://formspree.io/f/xjvnkgnq" class="form" method="post">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required class="form-control">
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" v-model="formData.message" required class="form-control"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
      <div class="map">
      <!-- Embed your map here, for example, using an iframe from Google Maps -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2934215261566!2d18.490473614807716!3d-33.9849962806242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Bellville%20South%20Rd%2C%20The Blocks%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1633096149800!5m2!1sen!2sza"
        width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
      ></iframe>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
       console.log('Form submitted with data:', this.formData);
      }
    }
  };
  </script>
  <style>
.contact form{
    background-image: "https://i.postimg.cc/6585FVwM/back.jpg";
}

</style>
<style>
.contact-form {
    background-size: cover;
    background-position: center;
    color: #090909; 
}
.form {
    padding-left: 45px;
    width:800px;
}

/* Add styles for form elements and other components as needed */
</style>

  