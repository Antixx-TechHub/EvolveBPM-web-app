<template>
    <carousel
        :autoplay="true"
        :loop="true"
        :autoplayTimeout="7000"
        :speed="1000"
        :paginationEnabled="false"
        :perPageCustom="[[0, 2], [576, 3], [768, 4], [1200, 5]]"
        class="partner-slides owl-carousel owl-theme"
    >
        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-1.png" alt="image">
                    <img src="~/assets/images/partner/partner-1.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-2.png" alt="image">
                    <img src="~/assets/images/partner/partner-2.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-3.png" alt="image">
                    <img src="~/assets/images/partner/partner-3.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-4.png" alt="image">
                    <img src="~/assets/images/partner/partner-4.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-5.png" alt="image">
                    <img src="~/assets/images/partner/partner-5.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-6.png" alt="image">
                    <img src="~/assets/images/partner/partner-6.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-7.png" alt="image">
                    <img src="~/assets/images/partner/partner-7.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-8.png" alt="image">
                    <img src="~/assets/images/partner/partner-8.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-9.png" alt="image">
                    <img src="~/assets/images/partner/partner-9.png" alt="image">
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-partner-item">
                <div class="partner-image">
                    <img src="~/assets/images/partner/partner-10.png" alt="image">
                    <img src="~/assets/images/partner/partner-10.png" alt="image">
                </div>
            </div>
        </slide>
    </carousel>
</template>