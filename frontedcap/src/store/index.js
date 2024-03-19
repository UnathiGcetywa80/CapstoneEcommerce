import { createStore } from 'vuex'
import axios from 'axios'
import sweet from "sweetalert";
let CapstoneEcommerceUrl = "https://capstoneecommerce-1.onrender.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    token: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.products = value;
    },
    setProduct(state, value){
      console.log(value);
      state.product = value;
    },
    setMsg(state, value){
      state.Msg = value;
    },
    setUsers(state, value){
      state.users = value;
    },
    setUser(state, value){
      state.user = value;
    },
    addUser(state, value) {
      state.users.push(value);
    },
    removeUser(state, value) {
      state.users = state.users.filter(user => user.id !== value);
    },
    updateUser(state, updatedUser) {
      state.users = state.users.map(user => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
    },
    async submitForm(context, formData) {
      try {
        const response = await axios.post(`${CapstoneEcommerceUrl}checkout`, formData);
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
       
      }
    },
  },
  actions: {
    async fetchProducts(context) {
      try{
        const {results} = (await axios.get(`${CapstoneEcommerceUrl}products`)).data
        console.log(results);

        if(results){
          context.commit("setProducts", results)
        }
      }catch(err){
        sweet({
          title: "Error",
          text: "An error occurred when retrieving Products.",
          icon: "error",
          timer: 2000,
        });
      }
      
    },
    async fetchProduct(context, payload) {
      try{
        // console.log("payload ->"+payload);
        const {result}  =  (await axios.get(`${CapstoneEcommerceUrl}products/${payload}`)).data;
        // console.log(result);
        if(result){
          context.commit("setProduct", result);
        }
      } catch(err){
        sweet({
          title: "Error",
          text: "An error occurred when retrieving this product.",
          icon: "error",
          timer: 2000,
        });
      }
      
    },
    async fetchUsers(context) {
      try {
        const {data} = await axios.get(`${CapstoneEcommerceUrl}Users`)
        context.commit("setUsers", data.results)
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async addUser(context, newUser) {
      try {
        const response = await axios.post(`${CapstoneEcommerceUrl}Users/register`, newUser);
        context.commit("addUser", response.data);
        console.log("User added successfully!");
      } catch (error) {
        console.error("Error adding user:", error);
        throw error;
      }
    },
    async deleteUser(context, user_id) {
      try {
        await axios.delete(`${CapstoneEcommerceUrl}Users/${user_id}`);
        context.commit("removeUser", user_id);
        console.log("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async updateUser(context, user_id) {
      try {
        await axios.patch(`${CapstoneEcommerceUrl}Users/${user_id}`);
        console.log("User updated successfully!");
        context.dispatch('fetchUsers');
      } catch (error) {
        console.error("Error updating user:", error);
      }
    },
    async deleteProduct(context, product_id) {
      try {
        console.log(product_id);
        let {msg} = (await axios.delete(`${CapstoneEcommerceUrl}products/deleteProduct/${product_id}`)).data;
        console.log("msg ->" +msg);
        if(msg){
          context.commit("setProduct");
        }

      } catch (error) {
        sweet({
          title: 'Error',
          text: 'Failed to deleted Product.',
          icon: 'error',
          timer: 2000
        });
      }
    },

    async submitForm() {
      try {
        const response = await axios.post('/Checkout', this.formData);
        console.log(response.data);
        this.submitted = true;
      } catch (error) {
        console.error('Error:', error);
        this.error = true;
        this.errorMessage = error.message || 'An error occurred during checkout.';
      }
    },
  },
  modules: {
  }
}
)
