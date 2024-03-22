<template >
  <div>
      <div v-if="!loaded" class="loader">
    <div class="loader-spinner"></div>
  </div>
  </div>
</template>
<script>
export default {
  
  name: 'SpinnerComp',
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
}
</script>
<style >
  .loader {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.9);
display: flex;
justify-content: center;
align-items: center;
z-index: 3333;
}
.loader-spinner {
border: 6px double rgb(90, 90, 89);
border-top: 6px solid rgb(81, 81, 81);
border-radius: 50%;
width: 80px;
height: 80px;
animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
}
</style>