<template>
    <div>
      <NavbarStyleTwo />
      <PageTitle />
      <IdataFourDivsions />
      <IdataZigZag />
      <DataCoverageIdata />
      <FirstPartyUniverseData />
      <FirstPartySlider />
      <LetsGetToWork />
      <Footer />
      <Copyright />
    </div>
  </template>
  
  <script>
  import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
  import PageTitle from '../components/IData/PageTitle'
  import IdataFourDivsions from '../components/IData/IdataFourDivsions'
  import IdataZigZag from '../components/IData/IdataZigZag'
  import DataCoverageIdata from '../components/IData/DataCoverageIdata'
  import FirstPartySlider from '../components/IData/FirstPartySlider'
  import FirstPartyUniverseData from '../components/IData/FirstPartyUniverseData'
  import LetsGetToWork from '../components/Common/LetsGetToWork'
  import Footer from '../layouts/Footer'
  import Copyright from '../layouts/Copyright'
  import axios from 'axios';

  export default {
    components: {
      NavbarStyleTwo,
      PageTitle,
      IdataFourDivsions,
      IdataZigZag,
      DataCoverageIdata,
      FirstPartyUniverseData,
      FirstPartySlider,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=idata&populate=deep,5`, { params: { slug } })
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