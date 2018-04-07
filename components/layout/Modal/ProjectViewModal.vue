<template>
    <div class="modal" :class="{'is-active': modalIsActive}" >
        <div class="modal-background" @click="toggleModal"></div>
        <div class="modal-content is-fullscreen">
            <div class="box">

                <div class="container">
                    <p class="modal-card-title">{{this.project.title}}</p>
                    <h2>{{this.project.head}}</h2>

                    <p>{{this.project.description}}</p>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" @click="toggleModal" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        props: ['project'],
        data () {
            return {
                modalIsActive: false
            }
        },
        methods: {
            toggleModal(project) {
                if(project){
                    this.project = project
                }
                this.modalIsActive = !this.modalIsActive
            }
        }
    }
</script>