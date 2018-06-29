<template>
    <div id="portfolio" v-if="projects.length > 0">
        <section class="section">
            <h1 class="title is-spaced has-text-centered is-size-4">Portfolio</h1>
            <h2 class="subtitle has-text-centered is-size-6">A collection of projects made by me</h2>
        </section>
        <div class="columns is-gapless is-multiline" style="margin-top: 1em">
            <div class="column " :class="currentColumnCount" v-for="project in projects" :key="project.id">
                <figure @click="toggleModal(project)" class="cap-bot-right image is-3by2" v-if="project.images" >
                    <SVGFilterImage :src="project.images.first.path" :src-placeholder="placeholderImage" :alt="project.name"/>
                    <figcaption class="hero is-primary is-bold">{{project.description}}</figcaption>
                </figure>
            </div>
        </div>
        <div class="modal modal-project" :class="{'is-active': modalIsActive}" >
            <div class="modal-background" @click="toggleModal"></div>
            <div class="modal-content is-fullscreen">
                <div class="project-box">
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <h2 class="title is-size-4">
                            <span class="navbar-item">
                                {{this.project.title}}
                            </span>
                        </h2>
                    </div>
                    </nav>

                    <div v-if="this.project.images">
                        <gallery :images="this.project.images.data.map(a => a.path)" :index="index" @close="index = null"/></gallery>
                        <img :src="this.project.images.first.path" class="image"
                            :key="imageIndex"
                            @click="index = 0">
                    </div>

                    <section class="section">
                        <h3 class="title modal-card-title is-size-4">
                            {{this.project.head}}
                        </h3>
                        <p>{{this.project.description}}</p>
                    </section>
                </div>
            </div>
            <button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
    import placeholderImage from '~/assets/img/cv-portfolio.jpg'
    import SVGFilterImage from '~/components/layout/SVGFilterImage.vue'

    export default {
      computed: {
        currentColumnCount () {
          var i = this.projects.length
          switch (this.projects.length % i === 0) {
            case i === 4:
              this.currentColumnClass = 'is-one-quarter'
              break
            case i === 3:
              this.currentColumnClass = 'is-one-third'
              break
            case i === 2:
              this.currentColumnClass = 'is-half'
              break
            case i === 1:
              this.currentColumnClass = 'is-fullscreen'
              break
          }
          return this.currentColumnClass
        }
      },
      data () {
        return {
          currentColumnClass: 'is-one-quarter',
          index: null,
          imageIndex: null,
          placeholderImage: '',
          projects: [],
          project: {},
          modalIsActive: false
        }
      },
      components: { SVGFilterImage, placeholderImage },
      methods: {
        async fetchProjects () {
          const projects = await this.$axios.$get('/projects')
          this.projects = projects
        },
        toggleModal (project) {
          if (project) {
            this.project = project
          }
          this.modalIsActive = !this.modalIsActive
        }
      },
      created () {
        this.fetchProjects()
      }
    }
</script>
