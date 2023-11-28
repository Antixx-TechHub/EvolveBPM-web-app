<template>
    <carousel :autoplay="true" :loop="true" :autoplayTimeout="7000" :speed="1000" :paginationEnabled="false"
        :perPageCustom="[[0, 1], [576, 2], [930, 3], [1200, 4]]" :perPage="1" :navigationEnabled="true"
        navigationNextLabel="<i class='flaticon-right-chevron'></i>"
        navigationPrevLabel="<i class='flaticon-left-chevron'></i>" class="work-slider owl-carousel owl-theme">
        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-1.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-2.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-3.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-4.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-5.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="work-card">
                <img src="~/assets/images/works/work-6.jpg" alt="image">

                <div class="content text-center">
                    <span>
                        <NuxtLink to="/">Lorem Ipsum</NuxtLink>
                    </span>
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>

                    <NuxtLink class="work-btn" to="/">Read more...</NuxtLink>
                </div>
            </div>
        </slide>
    </carousel>
</template>