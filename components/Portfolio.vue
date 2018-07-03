<template>
    <div id="portfolio" v-if="projects.length > 0">
        <section class="section">
            <h1 class="title is-spaced has-text-centered is-size-4">Portfolio</h1>
            <h2 class="subtitle has-text-centered is-size-6">A collection of projects made by me</h2>
        </section>
        <div class="columns is-gapless is-multiline" style="margin-top: 1em">
            <div class="column " :class="currentColumnCount" v-for="project in projects" :key="project.id">
                <figure @click="toggleModal(project)" class="hero cap-bot-right image is-3by2 is-primary is-bold	">
                    <!-- <SVGFilterImage v-if="project.albums.first && project.albums.first.images.first" :src="project.albums.first.images.first.path" :src-placeholder="placeholderImage" :alt="project.name"/> -->
                    <div class="bg-primary">
                        <div v-if="project.albums.first && project.albums.first.images.first">
                            <SVGFilterImage :src="project.albums.first.images.first.path" :src-placeholder="placeholderImage" :alt="project.name"/>
                            <figcaption class="hero is-primary is-bold">{{project.title}}</figcaption>
                        </div>
                        <!-- <img src="/background.jpg"> -->
                        <!-- <p class="text-center">{{project.title}}</p> -->
                        <div v-else>
                            <span class="is-size-5">{{project.title}}</span>
                            <figcaption class="hero is-primary is-bold">{{project.head}}</figcaption>
                        </div>
                    </div>
                    <!-- <SVGFilterImage v-else src="/background.jpg" :src-placeholder="placeholderImage" :alt="project.name"/> -->
                    
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

                    <div v-if="this.project.albums
                            && this.project.albums.first 
                            && this.project.albums.first.images.first">
                        <gallery :images="this.project.albums.first.images.data.map(a => a.path)" :index="index" @close="index = null"/></gallery>
                        <img :src="this.project.albums.first.images.first.path" class="image"
                            :key="imageIndex"
                            @click="index = 0">
                    </div>

                    <section class="section">
                        <h3 class="title modal-card-title is-size-6">
                            {{this.project.head}}
                        </h3>
                        <p v-html="this.project.description"></p>
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
          console.log(projects)
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

<style>

figure {
    outline: 1px solid white
}

figure .bg-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0;
}

.modal-project .image{
    cursor: pointer;
}

.modal-project .modal-content{
    width: 80%;
}
</style>
