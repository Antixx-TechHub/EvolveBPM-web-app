<template>
    <div>
      <Navbar />
      <PageTitle pageTitle="IIntel" />
      <LetsGetToWork />
      <Footer />
      <Copyright />
    </div>
  </template>
  
  <script>
  import Navbar from '../layouts/Navbar'
  import PageTitle from '../components/Common/PageTitle'
  import LetsGetToWork from '../components/Common/LetsGetToWork'
  import Footer from '../layouts/Footer'
  import Copyright from '../layouts/Copyright'
  import axios from 'axios';

  export default {
    components: {
      Navbar,
      PageTitle,
      LetsGetToWork,
      Footer,
      Copyright,
    },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=iintel&populate=deep,5`, { params: { slug } })
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