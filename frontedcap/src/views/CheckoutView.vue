<template>

<div class="row">
            <h2 class="display-2">Shopping cart</h2>
        </div>
        <div class="row">
            <table>
    <thead>
        <tr>
            <th>Product ID</th>
            <th>Customer Name</th>
            <th>Product Name</th>

            <th>Quantity</th>
            <th>Cost(R)</th>
        </tr>
    </thead>
    <tbody>
        <tr  v-for="item in cartItems" :key="item.id">
            
            <td>{{ item.cart_item_id }}</td>
            <td>{{ item.buyers_name}}</td>
            <td>{{ item.book_name }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.total_price}}</td>
        </tr>
    </tbody>
</table>

        </div>
        <div>
            <button onclick="clearCart()" checkout-clear-all id="BClear">Clear Cart </button>
            <button onclick="BuyNow()" checkout-buy-now id="Bbuy">Buy Now</button>
            <tr>
                <td id="Tcost" class="text-end">Total Cost:</td>
            </tr>
            <p id="Message" style="display: none;">Thank For Shopping With Us</p>
        </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default{
    name : 'CheckoutView',

    computed : {
        cartItems(){
            return this.$store.state.cart
        }
    },

    methods : {
        userId(){
            let {cookies} = useCookies()
             return cookies.get('LegitUser').result.user_id;
        }
    },

    mounted(){
        // console.log(this.cartItems)
        this.$store.dispatch('userCart', this.userId())
    }
}

</script>

<style scoped>

</style>
