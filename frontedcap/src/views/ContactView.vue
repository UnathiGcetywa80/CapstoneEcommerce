<template>
  <div class="contact-form">
    <h2 class="display-2" id="contactpage">Contact us</h2>
    <form @submit.prevent="submitForm" class="form">
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
    <!-- <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2934215261566!2d18.490473614807716!3d-33.9849962806242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bfcf832a1%3A0x3b4439b8cc517802!2s314%20Bellville%20South%20Rd%2C%20The%20Blocks%2C%20Cape%20Town%2C%207780!5e0!3m2!1sen!2sza!4v1633096149800!5m2!1sen!2sza" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div> -->
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

<style scoped>
.contact-form {
  background-color: rgb(192, 192, 192) ;
  padding: 100px; 
}
#contactpage {
  margin-bottom: 20px; 
  font-family: 'Lobster', cursive;
}
.form {
  width: 100%; 
  max-width: 600px; 
  margin: 0 auto; 
}

.form-group {
  margin-bottom: 20px; 
}

label {
  display: block; 
  margin-bottom: 5px; 
}

.form-control {
  width: 100%; 
  padding: 10px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
}

.btn {
  padding: 10px 20px; 
  background-color: #6c6b6b; 
  color: #fff; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
}

.btn:hover {
  background-color: #e4e4e2; 
}

.map {
  margin-top: 20px; 
}
</style>
