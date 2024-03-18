import { createStore } from 'vuex'
import axios from 'axios'
let CapstoneEcommerceUrl = "http://localhost:4500/";
export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
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
    addUser(state, newUser) {
      state.users.push(newUser);
    },
    removeUser(state, ID) {
      state.users = state.users.filter(user => user.ID !== ID);
    },
    updateUser(state, ID) {
        state.users = state.users.filter(user => user.ID !== ID);
      },
      submitForm(state, formData) {
        state.users.push(formData);
      },
    },
  actions: {
    async fetchProducts(context) {
      try{
        const {data} = await axios.get(`${CapstoneEcommerceUrl}products`)
        context.commit("setProducts", data.results)
        console.log(data.results);
      }catch(e){
        context.commit("setMsg", "An error occured.")
      }
    },
    async fetchProduct(context, ID) {
      try {
        const { result } = await (await axios.get(`${CapstoneEcommerceUrl}products/${ID}`)).data;
        context.commit("setProduct", result[0]);
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async fetchUsers(context) {
      try {
        const {data} = await axios.get(`${CapstoneEcommerceUrl}users`)
        context.commit("setUsers", data.results)
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async addUser(context, newUser) {
      try {
        const response = await axios.post(`${CapstoneEcommerceUrl}users/register`, newUser);
        context.commit("addUser", response.data);
        console.log("User added successfully!");
      } catch (error) {
        console.error("Error adding user:", error);
        throw error;
      }
    },
    async deleteUser(context, ID) {
      try {
        await axios.delete(`${CapstoneEcommerceUrl}users/${ID}`);
        context.commit("removeUser", ID);
        console.log("User deleted successfully!");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async updateUser(context, ID) {
      try {
        await axios.patch(`${CapstoneEcommerceUrl}users/${ID}`);
        console.log("User updated successfully!");
        context.dispatch('fetchUsers');
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  },
  async deleteProduct(context, ID) {
    try {
      await axios.delete(`${CapstoneEcommerceUrl}products/${ID}`);
      context.commit("removeProduct", ID);
      console.log("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  },
  async submitForm() {
    try {
      const response = await axios.post('/checkout', this.formData);
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