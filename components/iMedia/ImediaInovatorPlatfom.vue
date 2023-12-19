<template>
    <div class="it-banner ptb-100">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="section-title">
                        <h2>Innovator platform</h2>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-5 ">
                            <carousel :autoplay="true" :loop="true" :autoplayTimeout="7000" :speed="1000"
                                :paginationEnabled="false" :perPageCustom="[[0, 1]]"
                                class="it-banner-image owl-carousel owl-theme">
                                <slide>
                                    <div class="image">
                                        <img src="~/assets/images/it-banner/animate-img.jpg" alt="image">
                                    </div>
                                </slide>

                                <slide>
                                    <div class="image">
                                        <img src="~/assets/images/it-banner/animate-img2.jpg" alt="image">
                                    </div>
                                </slide>
                            </carousel>
                        </div>

                        <div class="col-7">
                            <div class="overview-content">
                                <div class="content right-content">
                                    <h2>Web Design & Development</h2>
                                    <p>We believe brand interaction is key to communication. Real innovations and positive
                                        customer experience are the heart of success.</p>

                                    <div class="rm-btn">
                                        <NuxtLink to="/services-details" class="default-btn">
                                            Innovator Demo site
                                            <span></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MicrositeLogos from '../Carousels/MicrositeLogos'

export default {
    name: 'ImediaInovatorPlatfom',
    components: {
        MicrositeLogos
    },
}
</script>