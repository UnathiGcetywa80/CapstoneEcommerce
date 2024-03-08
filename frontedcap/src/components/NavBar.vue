<template>
    <nav class="navbar navbar-expand-lg">
   <div class="container-fluid">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item text-black">
           <router-link to="/" class="nav-link active">
             Home
           </router-link> 
         </li>
         <li class="nav-link active">
           <router-link to="/about" class="text-black">
             About
           </router-link> 
         </li>
         <li class="nav-link active text-black">
           <router-link to="/products" class="text-black">
             Products
           </router-link> 
         </li>
         <li class="nav-link active">
           <router-link to="/admin" class="text-black">
             Admin
           </router-link> 
         </li>
         <li class="nav-link active">
           <router-link to="/checkout" class="text-black">
             Checkout
           </router-link> 
         </li>
         <li class="nav-link active">
           <router-link to="/reviews" class="text-black">
             Reviews
           </router-link> 
         </li>
         <li class="nav-link active">
           <router-link to="/contact" class="text-black">
             Contact
           </router-link>
         </li>
 
         </ul>
     </div>
   </div>
 </nav>
 </template>
 
 <script>
     export default {
        //  name: 'Navbar',
         
     }
 </script>
 
 <style scoped>
.navbar {
    background-color: #f7f4f3;
    color: white;
}

.navbar-nav {
    color: white;
}

.nav-link {
    color: white;
    
}


</style>