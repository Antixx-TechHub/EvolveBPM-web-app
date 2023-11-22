<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>

        <div class="cs-banner-section">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="cs-banner-content">
                            <span class="sub-title">PROFESSIONAL COMPANY WITH RELIABLE SERVICE</span>
                            <h1>Cyber Security Expert</h1>
                            <p>Secure your Cyberspace, secure your Digital Life</p>

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
                        <div class="cs-banner-image">
                            <img src="~/assets/images/cyber-security-home/banner/main.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="cs-banner-shape">
                <img src="~/assets/images/cyber-security-home/banner/shape.png" alt="image">
            </div>
            <div class="cs-lock">
                <img src="~/assets/images/cyber-security-home/banner/lock.png" alt="image">
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