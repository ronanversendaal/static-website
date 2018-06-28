<template>
    <div id="portfolio" v-if="projects.length > 0">
        <section class="section">
            <h1 class="title has-text-centered is-size-4">Portfolio</h1>
        </section>
        <div class="columns is-gapless is-multiline">
            <div class="column " :class="currentColumnCount" v-for="project in projects" :key="project.id">
                <figure @click="toggleModal(project)" class="image is-3by2" v-if="project.images">
                    <SVGFilterImage :src="project.images.first.path" :src-placeholder="placeholderImage" :alt="project.name"/>
                </figure>
            </div>
        </div>
        <div class="modal modal-project" :class="{'is-active': modalIsActive}" >
            <div class="modal-background" @click="toggleModal"></div>
            <div class="modal-content is-fullscreen">
                <div class="project-box">
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            {{this.project.title}}
                        </a>
                    </div>
                    </nav>

                    <div v-if="this.project.images">
                        <gallery :images="this.project.images.data.map(a => a.path)" :index="index" @close="index = null"/></gallery>
                        <div
                            class="image"
                            :key="imageIndex"
                            @click="index = 0"
                            :style="{ backgroundImage: 'url(' + this.project.images.first.path + ')', width: '100%', height: '30vh', backgroundSize: 'cover' }"
                            >
                        </div>
                    </div>

                    <section class="section">
                        <p class="modal-card-title">
                            {{this.project.head}}
                        </p>
                        <p>{{this.project.description}}</p>
                    </section>
                </div>
            </div>
            <button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
        </div>
    </div>
</template>

<script>
    import placeholderImage from '~/assets/img/transparent.png'
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
