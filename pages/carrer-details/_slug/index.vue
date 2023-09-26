<template>
    <div>
        <NavbarTwo />
        <div class="blog-details-area blog-details-bg pb-120 pt-200" :style="bannerStyle">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="blog-details-content" v-if="details !== null">
                            <div class="blog-details-tag">
                                <span><a href="blog-details.html">{{ details[0].attributes.shortDesc }}</a></span>
                            </div>
                            <h4 class="blog-details-banner-title">{{ details[0].attributes.title }}</h4>
                            <div class="blog-details-meta">
                                <span class="blog-details-meta-author">
                                    <a href="#">
                                        <img :src="details[0].attributes.avtar.data.attributes.url" alt="blog">
                                        {{ details[0].attributes.author }}
                                    </a>
                                </span>
                                <span>
                                    <i>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M10.5967 10.226L8.42672 8.93099C8.04872 8.70699 7.74072 8.16799 7.74072 7.72699V4.85699"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </i>
                                    {{ details[0].attributes.date }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="inner-shape-dots">
                <img src="../../../assets/img/shape/inner-dots-shape.png" alt="">
            </div>
        </div>
        <div v-if="details !== null">
            <FortfolioDetails v-bind:detailsContent="details" />
        </div>
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../../../layouts/NavbarTwo';
import PageTitle from '../../../components/Common/PageTitle';
import FortfolioDetails from '../../../components/Carrer/FortfolioDetails'
import Partner from '../../../components/Common/Partner'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        NavbarTwo,
        PageTitle,
        FortfolioDetails,
        Partner,
        Footer,
    },

    data() {
        return {
            details: null,
            seoData: null,
            bannerStyle: {
                backgroundImage: `url(${require('../../../assets/img/blog/blog-details-banner-1.jpg')})`
            },
        }
    },

    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/job-listings?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
        this.details = reaponse.data.data;
        const pageData = this.details.length > 0 ? this.details[0] : {};
        if (pageData?.attributes?.seo) {
            this.seoData = pageData.attributes.seo;
        }
    },
    head({ $seo }) {

        return $seo({
            title: this.seoData?.metaTitle,
            description: this.seoData?.metaDescription,
            keywords: this.seoData?.keywords,
        });
    },
};
</script>