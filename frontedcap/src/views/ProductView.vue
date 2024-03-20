<template>


    <div class="container">
        <div class="row d-flex justify-content-center" v-if="singleProduct">
            <div class="card m-3" style="width: 24rem;">
                <img :src="singleProduct.Image" class="card-img-top" :alt="singleProduct.Image">
                <div class="card-body">
                    <h5 class="card-title">{{ singleProduct.product_name }}</h5>
                    <p class="card-text">{{ singleProduct.description }}</p>
                    
                    <a href="#" class="btn btn-primary">Checkout</a>
                </div>
            </div>

        </div>



    </div>
</template>

<script>
export default {
    name: "producView",
    components: {

    },

    computed: {
        singleProduct() {
            return this.$store.state.product;
        },

    },

    mounted() {
        this.$store.dispatch("fetchProduct",  this.$route.params.id );
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
