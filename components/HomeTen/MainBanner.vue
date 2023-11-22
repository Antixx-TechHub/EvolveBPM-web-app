<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="cryptocurrency-banner-section">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="cryptocurrency-banner-content">
                            <span class="sub-title">TRADE OVER 60 CRYPTOCURRENCIES</span>
                            <h1>Buy, Sell, and Trade <span>Cryptocurrencies</span></h1>
                            <p>We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential of digital engagements We work hand-in-hand with industry-leading brands to help redefine the possibilities and potential.</p>

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
                        <div class="cryptocurrency-banner-image">
                            <img src="~/assets/images/cryptocurrency-home/banner/main.png" alt="image">

                            <div class="cart1">
                                <img src="~/assets/images/cryptocurrency-home/banner/cart1.png" alt="cart1">
                            </div>
                            <div class="cart2">
                                <img src="~/assets/images/cryptocurrency-home/banner/cart2.png" alt="cart2">
                            </div>
                            <div class="graph">
                                <img src="~/assets/images/cryptocurrency-home/banner/graph.png" alt="graph">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cryptocurrency-shape-1">
                <img src="~/assets/images/cryptocurrency-home/banner/icon1.png" alt="image">
            </div>
            <div class="cryptocurrency-shape-2">
                <img src="~/assets/images/cryptocurrency-home/banner/icon2.png" alt="image">
            </div>
            <div class="cryptocurrency-shape-3">
                <img src="~/assets/images/cryptocurrency-home/banner/icon3.png" alt="image">
            </div>
            <div class="cryptocurrency-shape-4">
                <img src="~/assets/images/cryptocurrency-home/banner/icon4.png" alt="image">
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