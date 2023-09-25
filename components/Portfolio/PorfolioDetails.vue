<template>
    <section class="postbox-area mt-90 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="postbox-area-wrap">
                        <div class="postbox-main">
                            <div class="postbox-img">
                                <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                            </div>
                            <div class="postbox-single-text">
                                <h4 class="blog-details-title">{{ details[0].attributes.title }}</h4>
                                <span v-html="details[0].attributes.longDesc"></span>
                            </div>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

import axios from 'axios';

export default {
    name: 'BlogDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            blogcategories: [],
            blogs: [],
        }
    },
    created: async function () {
        axios.get('https://evolvestrapi.pbwebvision.in/api/blogs?populate=*')
            .then(response => {
                this.blogs = response.data.data.sort((b, a) => a.id - b.id);
                this.rows = this.blogs?.length;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/blog-categories')
        this.blogcategories = response.data.data.sort((b, a) => a.id - b.id);
    },
}
</script>