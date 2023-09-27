<template>
  <div>
    <Navbar />
    <Breadcrumb />
    <AboutBrandArea />
    <ProcessAreaHomeOne />
    <AboutMissionArea />
    <AboutCounterArea />
    <AboutCompanyArea />
    <AwardAreaHomeFour />
    <FunfactAreaHomeOne />
    <TeamAreaHomeFive />
    <Partner />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import Breadcrumb from '../components/AboutUs/Breadcrumb'
import AboutBrandArea from '../components/AboutUs/AboutBrandArea'
import ProcessAreaHomeOne from '../components/AboutUs/ProcessAreaHomeOne'
import AboutMissionArea from '../components/AboutUs/AboutMissionArea'
import AboutCounterArea from '../components/AboutUs/AboutCounterArea'
import AboutCompanyArea from '../components/AboutUs/AboutCompanyArea'
import AwardAreaHomeFour from '../components/AboutUs/AwardAreaHomeFour'
import FunfactAreaHomeOne from '../components/AboutUs/FunfactAreaHomeOne'
import TeamAreaHomeFive from '../components/AboutUs/TeamAreaHomeFive'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'
import axios from 'axios';


export default {
  components: {
    Navbar,
    Breadcrumb,
    AboutBrandArea,
    ProcessAreaHomeOne,
    AboutMissionArea,
    AboutCounterArea,
    AboutCompanyArea,
    AwardAreaHomeFour,
    FunfactAreaHomeOne,
    TeamAreaHomeFive,
    Partner,
    Footer,
  },
        data() {
        return {
            seoData: null,
        }
    },
    created: async function () {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=about-us&populate=deep,5`, { params: { slug } })
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