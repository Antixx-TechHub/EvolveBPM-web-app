<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Our Team" />
        <TeamContent />
        <Partner />
        <LetsGetToWork />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
// import TeamAreaHomeFive from '../components/AboutUs/TeamAreaHomeFive'
import TeamContent from '../components/TeamOne/TeamContent'
import Partner from '../components/Common/Partner'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import axios from 'axios';


export default {
    components: {
        Navbar,
        PageTitle,
        TeamContent,
        Partner,
        LetsGetToWork,
        Footer,
    },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=our-team&populate=deep,5`, { params: { slug } })
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
}
</script>