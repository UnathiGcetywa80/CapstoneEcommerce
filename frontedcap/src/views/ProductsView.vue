<template>
  <div class="container">
      <div class="sort-container">
      <button @click="sortPrice('desc')">SortByPrice</button>
      <button @click="sortBy('asc')">SortByCategory</button>
  </div>
      <div class="product-container">
          <div class="product-card" v-for="product in Products" :key="product.product_id">
              <div class="image-container">
                  <img :src="product.imageURL" alt="product Image" class="product-image" />
              </div>
              <div class="content">
                  <h4>{{ productproductName }}</h4>
                  <button @click="viewMore(product)">View More</button>
                  <div v-if="product.showDetails">
                      <p>Product: {{ product.price }}</p>
                      <p>Description: {{ product.decription }}</p>
                      <button @click="back(product)">Back</button>
                  </div>
              </div>
              </div>
          </div>
      </div>
</template>
<script>
export default {
  computed: {
      product() {
          return this.$store.state.products
      },
      filteredproducts() {
          return this.products.filter(product => product.product_name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      }
  },
  methods: {
      viewMore(product) {
          product.showDetails = !product.showDetails;
      },
      back(product) {
          product.showDetails = ! product.showDetails;
      },
      sortBy(sortType) {
          if (sortType === 'desc') {
              this.products.sort((a, b) => b.productName.localeCompare(a.productName))
          } else {
              this.products.sort((a, b) => a.productName.localeCompare(b.productName))
          }
      }
  },
  mounted() {
      this.$store.dispatch('fetchProducts')
  }
}
</script>
<style scoped>
.hotel-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
.hotel-card {
  background-color: #F0F0F0;
  padding: 20px;
}
.image-container {
  width: 100%;
  padding-bottom: 100%; /* Maintain aspect ratio (1:1) */
  position: relative;
}
.hotel-card img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the image covers the container */
}
.content {
  flex-grow: 1;
}
button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  margin-right: 10px;
  border-radius: 20px;
  cursor: pointer;
}
button:last-child {
  margin-right: 0;
}
button:hover {
  background-color: #0056B3;
}
</style>