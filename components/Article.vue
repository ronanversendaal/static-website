<template>
  <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
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
