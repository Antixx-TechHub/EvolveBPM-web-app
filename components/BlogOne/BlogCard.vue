<template>
    <div class="postbox__area pt-120 pb-5">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink to="/blog-details">
                                <img src="~/assets/images/blog/blog-2.jpg" alt="image">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: 
                                        <NuxtLink to="/blog-details">
                                            James Anderson
                                        </NuxtLink>
                                    </li>
                                    <li>June 26, 2020</li>
                                </ul>
                            </div>
                            
                            <h3>
                                <NuxtLink to="/blog-details">
                                    The Rise Of Smarketing And Why You Need It
                                </NuxtLink>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, constetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                            <NuxtLink to="/blog-details" class="read-more-btn">
                                Read More 
                                <i class="flaticon-right-arrow"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <a href="/blog-one" class="prev page-numbers"><i class="fas fa-angle-double-left"></i></a>
                        <a href="/blog-one" class="page-numbers">1</a>
                        <span class="page-numbers current" aria-current="page">2</span>
                        <a href="/blog-one" class="page-numbers">3</a>
                        <a href="/blog-one" class="page-numbers">4</a>
                        <a href="/blog-one" class="next page-numbers"><i class="fas fa-angle-double-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'blogcard'
    }
</script>