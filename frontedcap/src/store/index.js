import { createStore } from 'vuex'
import axios from 'axios'
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
    setProducts(state, products){
      state.products =products
    },
    setProduct(state, product){
      state.product = product
    },
    setMsg(state, Msg){
      state.Msg = Msg
    },
    setUsers(state, users){
      state.users = users;
    },
    setUser(state, user){
      state.user = user;
    },
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    removeUser(state, user_id) {
      state.users = state.users.filter(user => user.id !== user_id);
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
        const {data} = await axios.get(`${CapstoneEcommerceUrl}Products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },
    async fetchProduct(context, product_id) {
      try {
        const { result } = await (await axios.get(`${CapstoneEcommerceUrl}Products/${product_id}`)).data;
        context.commit("setProduct", result[0]);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
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
    }
  },
  async deleteProduct(context, product_id) {
    try {
      await axios.delete(`${CapstoneEcommerceUrl}Products/${product_id}`);
      context.commit("removeProduct", product_id);
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
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
  modules: {
  }
}
)