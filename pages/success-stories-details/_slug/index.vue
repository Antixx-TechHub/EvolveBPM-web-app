<template>
    <div>
        <Navbar />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
        <div v-if="details !== null">
            <SuccesStoryDetails v-bind:detailsContent="details" />
        </div>
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import SuccesStoryDetails from '../../../components/SuccessStories/SuccesStoryDetails'
import Partner from '../../../components/Common/Partner'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        Navbar,
        PageTitle,
        SuccesStoryDetails,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/successstories?filters[slug][$eq]=${slug}&populate=*`, { params: { slug } })
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