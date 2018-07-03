<template>
  <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img v-if="article.albums.first" :src="article.albums.first.images.first.path" :alt="article.title">
                <img v-else src="https://placehold.it/1920x1080" :alt="article.title">
            </figure>
        </div>
        <header class="card-header">
            <p class="card-header-title">
                {{article.title}}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
            </a>
        </header>
        <div class="card-content" v-if="article.subtitle">
            <div class="content">
                {{article.subtitle}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: ['article']
    }
</script>
