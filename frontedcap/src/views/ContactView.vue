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
      <div class="map-container">
            <iframe
                width=""
                height="450"
                frameborder="0"
                style="border:0"
                src=""
                allowfullscreen
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
    background-image: url("https://i.postimg.cc/6585FVwM/back.jpg");
    background-size: cover;
    background-position: center;
    color: #fff; 
}
.form {
    padding-left: 45px;
    width: auto;
}

/* Add styles for form elements and other components as needed */
</style>

  