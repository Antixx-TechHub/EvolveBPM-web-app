<template>
    <carousel :autoplay="true" :loop="true" :autoplayTimeout="7000" :speed="1000" :paginationEnabled="true"
        :perPageCustom="[[0, 1], [576, 2], [768, 2], [1200, 3]]" class="projects-slides owl-carousel owl-theme">
        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-1.jpg" alt="image">

                <div class="projects-content">
                    <h3>
                        <NuxtLink to="/">iRev</NuxtLink>
                    </h3>
                    <span class="category">Demand Gen Solutions</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-2.jpg" alt="image">

                <div class="projects-content">
                    <h3>
                        <NuxtLink to="/">iIntel</NuxtLink>
                    </h3>
                    <span class="category">Data Research & Management Solutions</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-3.jpg" alt="image">

                <div class="projects-content">
                    <h3>
                        <NuxtLink to="/">iMedia</NuxtLink>
                    </h3>
                    <span class="category">Media & Content Solutions</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-2.jpg" alt="image">

                <div class="projects-content">
                    <h3>
                        <NuxtLink to="/">Innovator</NuxtLink>
                    </h3>
                    <span class="category">AI-based Digital Marketing platform</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

        <slide>
            <div class="single-projects-box">
                <img src="~/assets/images/projects/projects-3.jpg" alt="image">

                <div class="projects-content">
                    <h3>
                        <NuxtLink to="/">TechBase</NuxtLink>
                    </h3>
                    <span class="category">Customer intelligence platform powered by Big Data</span>
                </div>

                <div class="plus-icon">
                    <NuxtLink to="/" class="popup-btn">
                        <span></span>
                    </NuxtLink>
                </div>
            </div>
        </slide>

    </carousel>
</template>