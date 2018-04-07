<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-narrow">
            <figure class="image is-256x256" id="picture">
              <img class="rounded" src="~/assets/img/cv-portfolio.jpg">
            </figure>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-half is-narrow">
            <h1 class="title is-size-6 has-text-centered">Web Developer</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half has-text-centered is-size-5">
              <p>I am a web developer based in Rotterdam, The Netherlands.</p><p> My interests lie in creating web apps and learning about new technologies in web development. I am proficient in PHP, JavaScript and often utiltize frameworks/libraries for these languages.</p>

              <p>I usually rely on the <a href="https://laravel.com/" target="_blank" rel="noopener" >Laravel framework</a> for back-end work to implement business logic in all sorts of web apps or API's.</p>
              <p>Recently I have been building alot with front-end frameworks such as <a href="https://vuejs.org/" target="_blank" rel="noopener" >Vue.js</a> and have 
                
                  been experimenting
                
                a lot with new technologies.
              </p>

              <!-- <p>Aside from building, I often <nuxt-link to="/articles">publish some useful things</nuxt-link> about development, or I'll be somewhere shooting some arrows :)</p> -->
              <p>Aside from developing, I love to do archery, and will often be somewhere shooting some arrows.</p>
            </div>
          </div>
        </div>
      </div>   
    </div>
  
    <Portfolio/>

    <div class="section">
      <div class="container">    
        <!-- <Timeline/> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Portfolio from '~/components/Portfolio.vue'
  // import Timeline from '~/components/Timeline.vue'

  export default {
    components: { Portfolio }
  }
</script>

<style>
p{
  margin: 20px 0;
}
</style>
