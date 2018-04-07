<template>
  <div>
    <section class="hero is-small is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{article.title}}
          </h1>
          <h2 class="subtitle">
            {{article.subtitle}}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container" id="article-body" v-html="article.body"></div>
    </section>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        article: []
      }
    },
    methods: {
      async fetchArticle (id) {
        const article = await this.$axios.$get('/articles/' + id)
        this.article = article
      }
    },
    created () {
      this.fetchArticle(this.$route.params.id)
    }
  }
</script>
