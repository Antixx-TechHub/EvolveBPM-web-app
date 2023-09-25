<template>
    <div class="postbox__area pb-95">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12">
                    <div class="sidebar__wrapper ml-30">
                        <!-- <div class="sidebar__widget mb-20">
                        <div class="sidebar__widget-content">
                           <div class="sidebar__search">
                              <form action="#">
                                 <div class="sidebar__search-input-2">
                                    <div class="sidebar__search-input-2-box">
                                       <input type="text" placeholder="Type something...">
                                    </div>
                                    <button type="submit"><i class="far fa-search"></i></button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div> -->
                        <div class="sidebar__widget mb-20">
                            <h3 class="sidebar__widget-title">Recent Post</h3>
                            <div class="sidebar__widget-content">
                                <div class="sidebar__post rc__post">
                                    <div class="rc__post mb-10 d-flex align-items-center" v-for="blog in blogs.slice(0, 3)"
                                        :key="blog.id">
                                        <div class="rc__post-thumb mr-20">
                                            <router-link :to="'/case-studies-details/' + blog.attributes.slug"
                                                class="thumb">
                                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                                            </router-link>
                                        </div>
                                        <div class="rc__post-content">
                                            <h3 class="rc__post-title">
                                                <router-link :to="'/case-studies-details/' + blog.attributes.slug">
                                                    {{ blog.attributes.title }}
                                                </router-link>
                                            </h3>
                                            <div class="rc__meta">
                                                <span>{{ blog.attributes.date }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar__widget mb-20">
                            <h3 class="sidebar__widget-title">Categories</h3>
                            <div class="sidebar__widget-content">
                                <ul>
                                    <li v-for="blogcategory in blogcategories" :key="blogcategory.id">
                                        <router-link :to="`/case-studies-category-details/${blogcategory.attributes.slug}`">
                                            {{ blogcategory.attributes.name }}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="sidebar__widget mb-20">
                            <h3 class="sidebar__widget-title">Tags</h3>
                            <div class="sidebar__widget-content">
                                <div class="tagcloud">
                                    <a href="#">Technology</a>
                                    <a href="#">Envato</a>
                                    <a href="#">SEO</a>
                                    <a href="#">UX / UI</a>
                                    <a href="#">Marketing</a>
                                    <a href="#">WordPress</a>
                                    <a href="#">SEO Report</a>
                                    <a href="#">Ecommerce SEO</a>
                                    <a href="#">Content Marketing</a>
                                    <a href="#">Website Audit</a>
                                    <a href="#">On-Page SEO</a>
                                    <a href="#">Keywords</a>
                                    <a href="#">Website Promotion</a>
                                </div>
                            </div>
                        </div> -->
                        <div class="sidebar__widget mb-20">
                            <h3 class="sidebar__widget-title">Social</h3>
                            <div class="sidebar__widget-content">
                                <div class="sidebar__widget-social">
                                    <a target="_blank" href="https://www.facebook.com/EvolveBPM/" class="footer-facebook"><i
                                            class="fa-brands fa-facebook-f"></i></a>
                                    <a target="_blank" href="https://www.linkedin.com/company/evolve-bpm/"
                                        class="footer-linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a target="_blank" href="https://twitter.com/evolvebpm" class="footer-linkedin"><i
                                            class="fa-brands fa-twitter"></i></a>
                                    <a target="_blank" href="https://www.instagram.com/evolvebpm" class="footer-insta"><i
                                            class="fa-brands fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar__widget sidebar__newsletter mb-40">
                            <h3 class="sidebar__widget-title">Newsletter</h3>
                            <p>Register Now to Get Latest Updates
                                On Promotions & Coupons.</p>
                            <div class="sidebar__widget-content">
                                <div class="sidebar__widget-input">
                                    <input type="email" placeholder="Type your email...">
                                    <button class="blog-btn" type="submit">Subscribe</button>
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