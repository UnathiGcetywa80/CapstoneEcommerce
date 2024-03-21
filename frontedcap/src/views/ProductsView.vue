<template>
  <div class="container">
    <div class="sort-container">
      <button @click="sortPrice('desc')">SortByPrice</button>
      <button @click="sortBy('asc')">SortByCategory</button>
    </div>

    <div class="row d-flex justify-content-center">

      <div class="card m-2" v-for="products in product" :key="products.id" style="width: 18rem;">
        <img :src="products.Image" class="card-img-top p-2" :alt="products.Image">
        <div class="card-body">
          <h5 class="card-title">{{ products.product_name }}</h5>
          <p class="card-text">{{ products.decription }}</p>
          <router-link class="btn btn-primary" :to="{ name: 'product', params: { id: products.product_id } }">
            View More
          </router-link>
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
      product.showDetails = !product.showDetails;
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
