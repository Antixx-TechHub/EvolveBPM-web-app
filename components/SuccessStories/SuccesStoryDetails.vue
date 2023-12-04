<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <SuccessStorySidebar />
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                        </div>

                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li><span>Posted On:</span> <a href="/blog-details">September 31, 2020</a></li>
                                    <li><span>Posted By:</span> <a href="/blog-details">John Anderson</a></li>
                                </ul>
                            </div>

                            <div class="article-footer">
                                <div class="article-tags">
                                    <span><i class="fas fa-bookmark"></i> Love it? Share it:</span>

                                    <!-- <a href="/blog-one">Fashion</a>,
                                    <a href="/blog-one">Games</a>,
                                    <a href="/blog-one">Travel</a> -->
                                </div>

                                <div class="article-share">
                                    <ul class="social">
                                        <li><span>Share:</span></li>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i
                                                    class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i
                                                    class="fab fa-twitter"></i></a>
                                        </li>
                                        <li><a href="https://www.linkedin.com/" target="_blank"><i
                                                    class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i
                                                    class="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <h3>{{ details[0].attributes.title }}</h3>

                            <span v-html="details[0].attributes.longDesc"></span>

                        </div>


                        <div class="comments-area">
                            <div class="comment-respond">
                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525"
                                            required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent"
                                            id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this
                                            browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SuccessStorySidebar from '../SuccessStories/SuccessStorySidebar'

export default {
    name: 'blogdetailscontent',
    props: ['detailsContent'],
    components: {
        SuccessStorySidebar
    },
    data: function () {
        return {
            details: this.detailsContent,
        }
    },
}
</script>