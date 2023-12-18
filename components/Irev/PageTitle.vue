<template>
    <div>
        <CoolLightBox :items="items" :fullScreen="true" :index="index" @close="index = null">
        </CoolLightBox>

        <div class="solution-area pt-100">
            <div class="container">
                <div class="row align-items-center pb-70">
                    <div class="col-lg-6 col-md-12">
                        <div class="solution-content">
                            <h2>IRev</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <!-- <div class="solution-video">
                            <div class="video-btn popup-youtube" v-for="(image, imageIndex) in items" :key="imageIndex"
                                @click="index = imageIndex" style="cursor: pointer">
                                <i class="flaticon-play-button"></i>
                            </div>
                        </div> -->
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
    name: 'PageHeaderIrev',
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