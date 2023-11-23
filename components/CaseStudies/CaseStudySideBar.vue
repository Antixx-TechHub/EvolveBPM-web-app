<template>
    <div class="widget-area" id="secondary">
        <div class="widget widget_search">
            <form class="search-form">
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>

        <div class="widget widget_bionix_posts_thumb">
            <h3 class="widget-title">Popular Posts</h3>
            <div class="item" v-for="blog in blogs.slice(0, 3)" :key="blog.id">
                <router-link :to="'/case-studies-details/' + blog.attributes.slug" class="thumb">
                    <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                </router-link>
                <div class="info">
                    <time datetime="2020-06-30">{{ blog.attributes.date }}</time>
                    <h4 class="title usmall">
                        <router-link :to="'/case-studies-details/' + blog.attributes.slug"> {{ blog.attributes.title }}
                        </router-link>
                    </h4>
                </div>
                <div class="clear"></div>
            </div>
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>
            <ul>
                <li v-for="blogcategory in blogcategories" :key="blogcategory.id">
                    <router-link :to="`/case-studies-category-details/${blogcategory.attributes.slug}`">
                        {{ blogcategory.attributes.name }}</router-link>
                </li>
            </ul>
        </div>

        <!-- <div class="widget widget_recent_entries">
            <h3 class="widget-title">Recent Posts</h3>
            <ul>
                <li><a href="/blog-one">How to Become a Successful Entry Level UX Designer</a></li>
                <li><a href="/blog-one">How to start your business as an entrepreneur</a></li>
                <li><a href="/blog-one">How to be a successful entrepreneur</a></li>
                <li><a href="/blog-one">10 Building Mobile Apps With Ionic And React</a></li>
                <li><a href="/blog-one">Protect your workplace from cyber attacks</a></li>
            </ul>
        </div> -->

        <!-- <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Tags</h3>

            <div class="tagcloud">
                <a href="/blog-one">IT <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Bionix <span class="tag-link-count"> (3)</span></a>
                <a href="/blog-one">Games <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Fashion <span class="tag-link-count"> (2)</span></a>
                <a href="/blog-one">Travel <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Smart <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Marketing <span class="tag-link-count"> (1)</span></a>
                <a href="/blog-one">Tips <span class="tag-link-count"> (2)</span></a>
            </div>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'BlogSidebar',
    data() {
        return {
            blogcategories: [],
            blogs: [],
        }
    },
    created: async function () {
        axios.get('https://evolvestrapi.pbwebvision.in/api/case-studies?populate=*')
            .then(response => {
                this.blogs = response.data.data.sort((b, a) => a.id - b.id);
                this.rows = this.blogs?.length;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/case-study-categories')
        this.blogcategories = response.data.data.sort((b, a) => a.id - b.id);
    },
}
</script>