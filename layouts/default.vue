<template>
    <div>
        <Preloader v-if="isLoading" />
        <Nuxt />
        <BackToTop />
    </div>
</template>

<script>
import Preloader from './Preloader'
import BackToTop from './BackToTop'

export default {
    components: { 
        Preloader,
        BackToTop
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>