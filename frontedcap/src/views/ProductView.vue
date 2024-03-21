<template>


    <div class="container">
        <div class="row d-flex justify-content-center" v-if="singleProduct">
            <div class="card m-3" style="width: 24rem;">
                <img :src="singleProduct.Image" class="card-img-top" :alt="singleProduct.Image">
                <div class="card-body">
                    <h5 class="card-title">{{ singleProduct.product_name }}</h5>
                    <p class="card-text">{{ singleProduct.description }}</p>

                    <a href="#" class="btn btn-primary" @click="addItemToCart()">Checkout</a>
                </div>
            </div>

        </div>



    </div>
</template>

<script>
import { useCookies } from "vue3-cookies";
export default {
    name: "producView",

    components: {

    },

    computed: {
        singleProduct() {
            return this.$store.state.product;
        },

    },


    methods: {
        addItemToCart() {
            const { cookies } = useCookies()
            const formData = {
                user_id: cookies.get('LegitUser').result.user_id,
                product_id: this.$store.state.product.product_id,
                quantity: 1 
            };
            this.$store.dispatch("addToCart", formData);

        }
    },

    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id);
    },
};
</script>

<style scoped>
.imgg {
    margin-top: 5em;
    border-radius: 10rem;
    height: 15rem;
    width: 15rem;
    box-shadow: 0.2vw 0.2vw 0.2vw;
}

.text {
    margin-top: 10rem;
    font-size: 20px;
}

.about {
    box-shadow: 0.3vw 0.3vw 0.3vw 0.3vw;
    border-radius: 2rem;
    width: 50rem;
    height: auto;
    padding: 1rem;
}

.heiiight {
    margin: 2rem;
}
</style>
1
