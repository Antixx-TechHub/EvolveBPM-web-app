<template>
    <div>
        <CoolLightBox :items="items" :fullScreen="true" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="solution-area pt-100">
            <div class="container">
                <div class="row align-items-center pb-70">
                    <div class="col-lg-6 col-md-12">
                        <div class="solution-content">
                            <h2>Success Stories</h2>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="solution-video">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'GetBetterSolution',
    components: { CoolLightBox },
    data: function () {
        return {
            items: [
                {
                    src: 'https://www.youtube.com/watch?v=bk7McNUjWgw',
                }
            ],
            index: null
        };
    },
}
</script>