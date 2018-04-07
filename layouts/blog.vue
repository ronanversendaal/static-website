<template>
  <div id="articles">
    <NavBar/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from '~/components/layout/NavBar.vue'
  import Footer from '~/components/layout/Footer.vue'
  
  export default {
    components: { NavBar, Footer }
  }
</script>

<style>

</style>
