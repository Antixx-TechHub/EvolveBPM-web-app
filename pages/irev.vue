<template>
    <div>
      <NavbarStyleTwo />
      <PageTitle />
      <!-- <IrevHeader /> -->
      <LetsGetToWork />
      <Footer />
      <Copyright />
    </div>
  </template>
  
  <script>
  import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
  import PageTitle from '../components/Irev/PageTitle'
//   import IrevHeader from '../components/Irev/IrevHeader'
  import LetsGetToWork from '../components/Common/LetsGetToWork'
  import Footer from '../layouts/Footer'
  import Copyright from '../layouts/Copyright'
  import axios from 'axios';

  export default {
    components: {
      NavbarStyleTwo,
      PageTitle,
    //   IrevHeader,
      LetsGetToWork,
      Copyright,
      Footer,
    },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=irev&populate=deep,5`, { params: { slug } })
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