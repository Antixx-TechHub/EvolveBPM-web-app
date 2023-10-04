<template>
    <div>
        <Navbar />
        <TermsHeader />
        <maincontent />
        <Footer />
    </div>
</template>
  
<script>
import Navbar from '../layouts/Navbar'
import TermsHeader from '../components/TermsConditions/TermsHeader'
import maincontent from '../components/TermsConditions/maincontent'
import Footer from '../layouts/Footer'
import axios from 'axios';

export default {
    components: {
        Navbar,
        TermsHeader,
        maincontent,
        Footer,
    },
    data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=terms-condition&populate=deep,5`, { params: { slug } })
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