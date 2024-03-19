<template>
  <div>
    <h1>{{ product.name }}</h1>
    <img :src="Product.imageUrl" :alt="Product.name">
    <p>Product.description:{{ Product.description }}</p>
    <p>Product_id: {{ product_id  }}</p>
    <p>Product_name : {{ product_name  }}</p>
    <p>Category: {{ category }}</p>
    <p>Price: {{ price  }}</p>
    <p>Quantity: {{stock_quantity }}</p>
    <p>Description: {{  description}}</p>

    
  </div>
</template>


<style scoped>

</style>
