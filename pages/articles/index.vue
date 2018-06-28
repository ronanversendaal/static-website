<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Articles
          </h1>
          <h2 class="subtitle">
            Publications about web development written by me.
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <Articles/>
      </div>
    </section>
  </div>
</template>

<script>
  import Articles from '~/components/Articles.vue'

  export default {
    // layout: ['blog'],
    head () {
      return {
        title: 'Articles'
      }
    },
    components: { Articles },
    created () {
      // console.log(this.$router)
    }
  }
</script>

