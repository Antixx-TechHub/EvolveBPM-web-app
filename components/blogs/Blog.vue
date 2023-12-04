<template>
    <div class="postbox__area pt-100 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6" v-for="blog in blogs.slice(
                    (currentPage - 1) * perPage,
                    currentPage * perPage,
                )" :key="blog.id">
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

                <b-pagination class="basic-pagination mt-30" v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="itemList" align="center">
                </b-pagination>

            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'Blog',
    data() {
        return {
            blogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 9,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
        this.blogs = response.data.data;
        this.rows = this.blogs?.length;
    },
}
</script>