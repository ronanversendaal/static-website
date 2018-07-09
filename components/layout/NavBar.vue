<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
            <nuxt-link @click.native="deactivateMenu" class="has-text-primary navbar-item" to="/">Ronan Versendaal</nuxt-link>
            <div class="navbar-burger" @click="switchActive">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="navbar-menu navbar-end" :class="{'is-active': menuActive}">
            <!-- navbar start, navbar end -->
            <!-- <div class="navbar-item">
                <nuxt-link @click.native="deactivateMenu" class="has-text-primary" to="/articles">Articles</nuxt-link>
            </div> -->
        </div>
      </div>
  </nav>
</template>

<script>
    export default {
      data () {
        return {
          menuActive: false
        }
      },
      methods: {
        switchActive () {
          this.menuActive = !this.menuActive
        },
        deactivateMenu () {
          this.menuActive = false
        }
      }
    }
</script>
