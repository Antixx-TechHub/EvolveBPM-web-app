<template>
    <div class="postbox__area pt-100 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="section-title with-linear-gradient-text solution-content">
                        <h2><span>Ebooks</span></h2>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="banner-btn solution-video">
                        <NuxtLink to="/blogs" class="default-btn mr-3">
                            View More <span></span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(0, 3)" :key="blog.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: {{ blog.attributes.author }}</li>
                                    <li>{{ blog.attributes.date }}</li>
                                </ul>
                            </div>

                            <h3>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h3>

                            <p>{{ blog.attributes.shortDesc }}</p>

                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="read-more-btn">
                                Read More
                                <i class="flaticon-right-arrow"></i>
                            </NuxtLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'EbookResources',
    data() {
        return {
            blogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
        this.blogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>