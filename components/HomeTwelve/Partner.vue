<template>
    <div class="cs-partner-area pt-100 pb-70">
        <div class="container-fluid">
            <div class="section-title with-line-text-with-white-color">
                <span class="sub-title">THE POWER OF BIONIX</span>
                <h2>Bionix Has Been Trusted <span>Over 2300 +</span> Companies In The World</h2>
            </div>

            <div class="cs-partner-slides">
                <carousel
                    :autoplay="true"
                    :loop="true"
                    :autoplayTimeout="7000"
                    :speed="1000"
                    :paginationEnabled="false"
                    :perPageCustom="[[0, 2], [576, 3], [768, 3], [1200, 7], [1600, 8]]"
                >
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-1.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-2.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-3.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-4.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-5.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-6.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-7.png" alt="image">
                            </a>
                        </div>
                    </slide>
                    <slide>
                        <div class="cs-partner-item">
                            <a href="#">
                                <img src="~/assets/images/cyber-security-home/partner/partner-8.png" alt="image">
                            </a>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Partner'
}
</script>