<template>
  <div class="container">
    <h2 class="display-2" id="OURPRODUCTS">Our Poducts</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search products..." v-model="searchQuery">
      <button class="btn btn-outline-secondary" type="button" @click="searchProducts">Search</button>
    </div>
    <div>
      <button class="btn btn-outline-secondary" type="button" @click="sortBy('name')">Sort by Name</button>
      <button class="btn btn-outline-secondary" type="button" @click="sortBy('category')">Sort by Category</button>
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
      if (sortType === 'name') {
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
.product-card {
  width: 18rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
 }


.product-card:hover {
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-weight: bold;
}

.card-text {
  color: #555;
}

.btn-primary {
  background-color: #9a9998;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #91918f;
}

#OURPRODUCTS {
  font-family: 'Lobster', cursive;
  margin-bottom: 20px;
}
</style>
