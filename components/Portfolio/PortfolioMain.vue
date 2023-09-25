<template>
    <div class="postbox__area pt-120 pb-95">
        <div class="container">
            <div class="row">
                <div class="col-xxl-8 col-xl-8 col-lg-8">
                    <div class="blog-grid-wrapper">
                        <div class="row">
                            <div class="col-lg-6 col-md-6" v-for="blog in blogs.slice(
                                (currentPage - 1) * perPage,
                                currentPage * perPage,
                            )" :key="blog.id">
                                <div class="tpblog-item-2 mb-30">
                                    <div class="tpblog-thumb-2">
                                        <router-link :to="'/portfolio-details/' + blog.attributes.slug" class="d-block">
                                            <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                                        </router-link>
                                    </div>
                                    <div class="tpblog-wrap">
                                        <div class="tpblog-content-2">
                                            <span>{{ blog.attributes.tag }}</span>
                                            <h4 class="tpblog-title-2"><router-link
                                                    :to="'/portfolio-details/' + blog.attributes.slug">
                                                    {{ blog.attributes.title }}
                                                </router-link></h4>
                                            <p>{{ blog.attributes.shortDesc }}</p>
                                        </div>
                                        <div class="tpblog-meta-2">
                                            <span>
                                                <i>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                                                            stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M10.5967 10.226L8.42672 8.93099C8.04872 8.70699 7.74072 8.16799 7.74072 7.72699V4.85699"
                                                            stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </i>
                                                {{ blog.attributes.date }}
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i>
                                                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6.99976 7.98487C8.92858 7.98487 10.4922 6.42125 10.4922 4.49243C10.4922 2.56362 8.92858 1 6.99976 1C5.07094 1 3.50732 2.56362 3.50732 4.49243C3.50732 6.42125 5.07094 7.98487 6.99976 7.98487Z"
                                                                stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M13 14.9697C13 12.2665 10.3108 10.0803 7 10.0803C3.68917 10.0803 1 12.2665 1 14.9697"
                                                                stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </i>
                                                    {{ blog.attributes.author }}
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <b-pagination class="basic-pagination mt-30" v-model="currentPage" :total-rows="rows"
                            :per-page="perPage" aria-controls="itemList" align="center"></b-pagination>

                    </div>
                </div>

                <div class="col-xxl-4 col-xl-4 col-lg-4">
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
                                            <router-link :to="'/success-stories-details/' + blog.attributes.slug" class="thumb">
                                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                                            </router-link>
                                        </div>
                                        <div class="rc__post-content">
                                            <h3 class="rc__post-title">
                                                <router-link :to="'/success-stories-details/' + blog.attributes.slug">
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
                                        <router-link :to="`/category-details/${blogcategory.attributes.slug}`">
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
    name: 'Blog',
    data() {
        return {
            featuredblogs: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
            blogcategories: [],
            blogs: [],
        }
    },
    created: async function () {
        axios.get('https://evolvestrapi.pbwebvision.in/api/portfolios?populate=*')
            .then(response => {
                this.blogs = response.data.data.sort((b, a) => a.id - b.id);
                this.rows = this.blogs?.length;
            })
            .catch(error => {
                console.error(error);
            });
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/successcategories')
        this.blogcategories = response.data.data.sort((b, a) => a.id - b.id);
    },
}
</script>