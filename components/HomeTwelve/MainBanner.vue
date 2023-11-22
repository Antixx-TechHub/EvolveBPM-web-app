<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="bd-banner-section">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="bd-banner-content">
                            <span class="sub-title">PROFESSIONAL COMPANY WITH RELIABLE SERVICES</span>
                            <h1>Customer Ai & <span>Big Data</span> Solution For Analytics</h1>
                            <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work hand-in-hand.</p>

                            <ul class="banner-btn">
                                <li>
                                    <NuxtLink to="/contact" class="default-btn">
                                        Get Started <span></span>
                                    </NuxtLink>
                                </li>
                                <li>
                                    <a 
                                        class="video-btn popup-youtube"
                                        v-for="(image, imageIndex) in items"
                                        :key="imageIndex"
                                        @click="index = imageIndex"
                                        style="cursor: pointer"
                                    >
                                        <i class="flaticon-play-button"></i> 
                                        Play Video
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="bd-banner-image">
                            <img src="~/assets/images/big-data-home/banner/main.png" class="wow animate__animated animate__fadeInUp" alt="image">

                            <div class="circle-shape"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bd-banner-shape-1">
                <img src="~/assets/images/big-data-home/banner/shape-1.png" alt="image">
            </div>
            <div class="bd-banner-shape-2">
                <img src="~/assets/images/big-data-home/banner/shape-2.png" alt="image">
            </div>
            <div class="bd-banner-shape-3">
                <img src="~/assets/images/big-data-home/banner/shape-3.png" alt="image">
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'MainBanner',
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