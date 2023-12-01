<template>
    <div>
      <NavbarStyleTwo />
      <PageTitle />
      <IrevZigZag />
      <designdefine />
      <CrossFunnelEvoleBPM />
      <CaseStudiesRsesources />
      <IrevTelemarketing />
      <IrevOurServicesTwo />
      <!-- <IrevHeader /> -->
      <LetsGetToWork />
      <Footer />
      <Copyright />
    </div>
  </template>
  
  <script>
  import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
  import PageTitle from '../components/Irev/PageTitle'
  import IrevZigZag from '../components/Irev/IrevZigZag'
  import designdefine from '../components/Irev/designdefine'
  import CrossFunnelEvoleBPM from '../components/Irev/CrossFunnelEvoleBPM'
  import CaseStudiesRsesources from '../components/Resources/CaseStudiesRsesources'
  import IrevTelemarketing from '../components/Irev/IrevTelemarketing'
  import IrevOurServicesTwo from '../components/Irev/IrevOurServicesTwo'
//   import IrevHeader from '../components/Irev/IrevHeader'
  import LetsGetToWork from '../components/Common/LetsGetToWork'
  import Footer from '../layouts/Footer'
  import Copyright from '../layouts/Copyright'
  import axios from 'axios';

  export default {
    components: {
      NavbarStyleTwo,
      PageTitle,
      IrevZigZag,
      designdefine,
      CrossFunnelEvoleBPM,
      CaseStudiesRsesources,
      IrevTelemarketing,
      IrevOurServicesTwo,
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