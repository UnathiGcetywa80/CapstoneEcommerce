import { createStore } from 'vuex';
const dataUrl = 'https://capstoneecommerce-1.onrender.com'
export default createStore({
  state: {
    Products: null,
    Product: null,
    Users: null,
    User: null
  },
  mutations: {
    setProducts(state, value) {
      state.Products = value;
    },
    setProduct(state, value) {
      state.Product = value;
    },
    setUsers(state, value) {
      state.Users = value;
    },
    setUser(state, value) {
      state.User = value;
    },
    updateProduct(state, updatedProduct) {
      state.Products = state.Products.map(Product => (Product.id === updatedProduct.id ? updatedProduct : Product));
    },
    deleteProduct(state, Productid) {
      state.Product = state.Product.filter(Product => Product.id !==Productid);
    },
    addProduct(state, newProduct) {
      state.Products.push(newProduct);
    },
    updateUser(state, updatedUser) {
      state.users = state.users.map(user => (user.id === updatedUser.id ? updatedUser : user));
    },
    deleteUser(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    }
  },
  actions: {
     // Hotels CRUD operations
     async fetchHotels(context) {
       let res = await fetch(`${dataUrl}hotel`);
       let { results } = await res.json();
       if (results) {
         context.commit('setHotels', results);
       }
     },
     async fetchHotel(context, id) {
       let res = await fetch(`${dataUrl}hotels/${id}`);
       let { result } = await res.json();
       if (result) {
         context.commit('setHotel', result);
       }
     },
     async updatehotel(context, updatedhotel) {
       let res = await fetch(`${dataUrl}Hotels/${updatedhotel.id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedhotel),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('updatehotel', updatedhotel);
       }
     },
     async deletehotel(context, hotelId) {
       let res = await fetch(`${dataUrl}Hotels/${hotelId}`, { method: 'DELETE' });
       if (res.ok) {
         context.commit('deletehotel', hotelId);
       }
     },
     async addhotel(context, newhotel) {
       let res = await fetch(`${dataUrl}Hotels`, {
         method: 'POST',
         body: JSON.stringify(newhotel),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('addhotel', newhotel);
       }
     },
     // Users CRUD operations
     async fetchUsers(context) {
       let res = await fetch(`${dataUrl}users`);
       let { results } = await res.json();
       if (results) {
         context.commit('setUsers', results);
       }
     },
     async fetchUser(context, id) {
       let res = await fetch(`${dataUrl}users/${id}`);
       let { result } = await res.json();
       if (result) {
         context.commit('setUser', result);
       }
     },
     async updateUser(context, updatedUser) {
       let res = await fetch(`${dataUrl}users/${updatedUser.id}`, {
         method: 'PATCH',
         body: JSON.stringify(updatedUser),
         headers: { 'Content-Type': 'application/json' }
       });
       if (res.ok) {
         context.commit('updateUser', updatedUser);
       }
     },
     async deleteUser(context, userId) {
       let res = await fetch(`${dataUrl}users/${userId}`, {
        method: 'DELETE'
       });
       if (res.ok) {
         context.commit('deleteUser', userId);
       }
     },
     async addUser(context, newUser) {
        let res = await fetch(`${dataUrl}users/${newUser}`,{
          method:'POST',
          body:JSON.stringify(newUser),
          headers:{'Content-Type':'application/json'}
        });
        if(res.ok){
          context.commit('addUser',newUser)
        }
      }
   }
});