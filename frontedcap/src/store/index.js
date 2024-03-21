import { createStore } from 'vuex'
import axios from 'axios'
import sweet from "sweetalert"
import router from '@/router'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
import AuthenticateUser from "../service/AuthenticatedUser";
let CapstoneEcommerceUrl = "https://capstoneecommerce-1.onrender.com/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    user: null,
    cart: null,
  },
  getters: {
  },
  mutations: {
    setProducts(state, value){
      state.products = value;
    },
    setProduct(state, value){
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
    setCart(state,value){
      state.cart = value
    },
    removeUser(state, value) {
      state.users = state.users.filter(user => user.id !== value);
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
// PRODUCTS ROUTES
    async fetchProducts(context) {
      try{
        const {results} = (await axios.get(`${CapstoneEcommerceUrl}products`)).data

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
        const {result}  =  (await axios.get(`${CapstoneEcommerceUrl}products/${payload}`)).data;
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
    async deleteProduct(context, product_id) {
      try {
     
        let {msg} = (await axios.delete(`${CapstoneEcommerceUrl}products/deleteProduct/${product_id}`)).data;
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

// USER ROUTES
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
    
    async registerUser(context, userdata) {
      try {
        console.log(userdata);
        let {data} = await axios.post(`${CapstoneEcommerceUrl}users/register`, userdata);
        console.log("msg ->" + data);
        if(data){
          sweet({
            title: "Success",
            text: data.msg,
            icon: "success",
            timer: 2000,
          });
        } else{
          sweet({
            title: "Error",
            text: "Failed to register user. Please try again.",
            icon: "error",
            timer: 2000,
          });
        }

      } catch (error) {
        console.error("Error during user registration:", error);
        sweet({
          title: "Error",
          text: "An error occurred during user registration.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    async loginUser(context, payload) {
      try {
        const { msg, token, result } = (await axios.post(`${CapstoneEcommerceUrl}users/login`, payload)).data
        if (result) {
          context.commit("setUser", result);
          cookies.set("LegitUser", { msg, result, token });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Welcome back, ${result?.full_name}`,
            icon: "success",
            timer: 5000,
          });
          router.push('/products');
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 5000,
          });
        }
      } catch (error) {
        sweet({
          title: "Error",
          text: "Failed to login.",
          icon: "error",
          timer: 5000,
        });
      }
    },

  // CART ROUTES
  async addToCart(context, formData) {
    try {
      const response = await axios.post(`${CapstoneEcommerceUrl}cart/add`, formData);
      console.log(response.data);
      if(response.data){
        context.commit('setCart',response.data)
        sweet({
          title: "Success",
          text: "Item added to cart successfully.",
          icon: "success",
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      sweet({
        title: "Error",
        text: "Failed to add item to cart.",
        icon: "error",
        timer: 2000,
      });
    }
  },


// 
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
