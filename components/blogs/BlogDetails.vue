<template>
   <section class="postbox-area mt-90 pb-120">
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
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

                  <!-- <div class="row align-items-center">
                        <div class="col-md-6">
                           <div class="postbox-more-left mb-55">
                              <div class="postbox-more-icon">
                                 <a href="blog-details.html">
                                    <span>
                                       <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5.5 10L1 5.5L5.5 1" stroke="#84848B" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                       </svg>
                                    </span>
                                    Previous
                                 </a>
                              </div>
                              <div class="postbox-more-content">
                                 <span><a href="blog-details.html">10 Quick Tips About Blogging</a></span>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-6">
                           <div class="postbox-more-right mb-55">
                              <div class="postbox-more-icon text-md-end">
                                 <a href="blog-details.html">
                                    Next
                                    <span>
                                       <svg width="7" height="11" viewBox="0 0 7 11" fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1 10L5.5 5.5L1 1" stroke="#84848B" stroke-width="1.5"
                                             stroke-linecap="round" stroke-linejoin="round" />
                                       </svg>
                                    </span>
                                 </a>
                              </div>
                              <div class="postbox-more-content d-flex align-items-center justify-content-md-end">
                                 <span class="text-end"><a href="blog-deatails.html">Getting Ready To Google
                                       Sitelinks</a></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="postbox-author d-flex mb-95">
                        <div class="postbox-author-thumb">
                           <img src="assets/img/blog/comments/postbox-author-1.png" alt="">
                        </div>
                        <div class="postbox-author-content">
                           <span>About Author</span>
                           <h4 class="postbox-author-title">Peter Bowman</h4>
                           <p>Eget lorem dolor sed viverra ipsum nunc aliqueted bibendum felis donec et odio
                              pellentesque diames volutpat commodo.</p>
                           <div class="postbox-author-social">
                              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                              <a href="#"><i class="fa-brands fa-twitter"></i></a>
                              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                              <a href="#"><i class="fa-brands fa-instagram"></i></a>
                           </div>
                        </div>
                        <span></span>
                     </div>
                     <div class="postbox-comment mb-100">
                        <h3 class="postbox-comment-title mb-35">3 Comments</h3>
                        <ul>
                           <li>
                              <div class="postbox-comment-box p-relative">
                                 <div class="postbox-comment-info d-flex align-items-center mb-10">
                                    <div class="postbox-comment-avater">
                                       <img src="assets/img/blog/comments/comment-1.jpg" alt="">
                                    </div>
                                    <div class="postbox-comment-name d-flex align-items-center">
                                       <h5>Collin Davis</h5>
                                       <span class="post-meta"> March 26, 2020 at 6:17 pm</span>
                                    </div>
                                 </div>
                                 <div class="postbox-comment-text ml-65 grey-bg-2">
                                    <p>Hello Collin,thanks for your response. Where did you read that you can use only one <br> sitemap index for each website?</p>
                                 </div>
                                 <div class="postbox-comment-reply">
                                    <a href="#"><span><svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path d="M3.8125 6.625L1 3.8125L3.8125 1" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                             <path
                                                d="M10 10V6.0625C10 5.46576 9.76295 4.89347 9.34099 4.47151C8.91903 4.04955 8.34674 3.8125 7.75 3.8125H1"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                          </svg>
                                       </span> Reply</a>
                                 </div>
                              </div>
                           </li>
                           <li class="children">
                              <div class="postbox-comment-box p-relative">
                                 <div class="postbox-comment-info d-flex align-items-center mb-10">
                                    <div class="postbox-comment-avater">
                                       <img src="assets/img/blog/comments/comment-3.jpg" alt="">
                                    </div>
                                    <div class="postbox-comment-name d-flex align-items-center">
                                       <h5>Ben Chiwell</h5>
                                       <span class="post-meta"> March 26, 2020 at 6:17 pm</span>
                                    </div>
                                 </div>
                                 <div class="postbox-comment-text ml-65 grey-bg-2">
                                    <p>Filip however if you think about it, look at the sitemap generation tools <br>
                                       used in Wordpress.</p>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div class="postbox-comment-box p-relative">
                                 <div class="postbox-comment-info d-flex align-items-center mb-10">
                                    <div class="postbox-comment-avater">
                                       <img src="assets/img/blog/comments/comment-2.jpg" alt="">
                                    </div>
                                    <div class="postbox-comment-name d-flex align-items-center">
                                       <h5>Robert Fox</h5>
                                       <span class="post-meta"> March 26, 2020 at 6:17 pm</span>
                                    </div>
                                 </div>
                                 <div class="postbox-comment-text ml-65 grey-bg-2">
                                    <p>Thank you for this post! Looks like we’re “headed in the right direction”.</p>
                                 </div>
                                 <div class="postbox-comment-reply">
                                    <a href="#"><span><svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path d="M3.8125 6.625L1 3.8125L3.8125 1" stroke="currentColor"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                             <path
                                                d="M10 10V6.0625C10 5.46576 9.76295 4.89347 9.34099 4.47151C8.91903 4.04955 8.34674 3.8125 7.75 3.8125H1"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                          </svg>
                                       </span> Reply</a>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div class="postbox-comment-form">
                        <h3 class="postbox-comment-form-title">Leave a Comment</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="#">
                           <div class="row gx-8">
                              <div class="col-xl-12 col-lg-12">
                                 <div class="postbox-comment-input">
                                    <textarea placeholder="Your Comment"></textarea>
                                 </div>
                              </div>
                              <div class="col-lg-4">
                                 <div class="postbox-comment-input">
                                    <input type="text" placeholder="Full name">
                                 </div>
                              </div>
                              <div class="col-lg-4">
                                 <div class="postbox-comment-input">
                                    <input type="email" placeholder="Your email">
                                 </div>
                              </div>
                              <div class="col-lg-4">
                                 <div class="postbox-comment-input">
                                    <input type="text" placeholder="Website">
                                 </div>
                              </div>
                              <div class="col-lg-12">
                                 <div class="postbox-comment-agree d-flex align-items-start mb-35">
                                    <input class="e-check-input" type="checkbox" id="e-agree">
                                    <label class="e-check-label" for="e-agree">Save my name, email, and website in this
                                       browser for the next time I comment.</label>
                                 </div>
                              </div>
                              <div class="col-xxl-12">
                                 <div class="postbox-comment-btn">
                                    <button type="submit" class="tp-btn">Post Comment</button>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div> -->
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
                                 <router-link :to="'/blog-details/' + blog.attributes.slug" class="thumb">
                                    <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                                 </router-link>
                              </div>
                              <div class="rc__post-content">
                                 <h3 class="rc__post-title">
                                    <router-link :to="'/blog-details/' + blog.attributes.slug">
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