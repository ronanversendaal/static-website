<template>
  <div>
    <div class="columns is-multiline">
        <div class="column is-one-third" v-if="articles.length > 0" v-for="article in articles" :key="article.id">
            <nuxt-link :to="{ name : 'articles-id', params : {id: article.id} }"><Article :article="article"/></nuxt-link>
        </div>
        <div class="column is-fullscreen" v-if="articles.length == 0">
            <p class="title is-size-4">No articles yet. Coming soon.</p>
        </div>
    </div>
  </div>
</template>

<script>
    import Article from '~/components/Article'

    export default {
      data () {
        return {
          articles: []
        }
      },
      components: { Article },
      methods: {
        async fetchArticles () {
          const articles = await this.$axios.$get('/articles')
          // this.articles = articles
        }
      },
      created () {
        this.fetchArticles()
      }
    }
</script>
