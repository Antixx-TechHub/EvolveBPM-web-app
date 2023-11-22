<template>
    <div>
        <CoolLightBox 
            :items="items" 
            :fullScreen="true"
            :index="index"
            @close="index = null">
        </CoolLightBox>
        
        <div class="mining-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="mining-image">
                            <img src="~/assets/images/cryptocurrency-home/mining.png" alt="image">
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="mining-content">
                            <span class="sub-title">START MINING CRYPTO</span>
                            <h3>Start <span>Mining  Crypto</span> Currency Today With Us</h3>
                            <p>Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator. The network is peer-to-peer and transactions take place between users directly.</p>

                            <ul class="mining-btn">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
    name: 'MiningCrypto',
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