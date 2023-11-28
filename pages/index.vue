<template>
    <div>
        <Navbar />
        <HomeMainBanner />
        <WeveDoneLotsOfWork />
        <GlobalSalesTeam />
        <OurCaseStudies />
        <Certificates />
        <OurMediaAssets />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/NavbarStyleTwo'
import HomeMainBanner from '../components/Index/HomeMainBanner'
import OurFeaturedServices from '../components/Index/OurFeaturedServices'
import GlobalSalesTeam from '../components/Index/GlobalSalesTeam'
import OurCaseStudies from '../components/Index/OurCaseStudies'
import Certificates from '../components/Index/Certificates'
import AmazingBusinessSolution from '../components/Common/AmazingBusinessSolution'
import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
import WeveDoneLotsOfWork from '../components/Common/WeveDoneLotsOfWork'
import MeetOurAwesomeTeam from '../components/Common/MeetOurAwesomeTeam'
import GetBetterSolution from '../components/Common/GetBetterSolution'
import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
import ChooseYourBestPlan from '../components/Common/ChooseYourBestPlan'
import GetOnlyNewUpdate from '../components/Common/GetOnlyNewUpdate'
import OurLatestNews from '../components/Common/OurLatestNews'
import OurMediaAssets from '../components/Index/OurMediaAssets'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'
import axios from 'axios';


export default {
    components: {
        Navbar,
        HomeMainBanner,
        OurFeaturedServices,
        GlobalSalesTeam,
        OurCaseStudies,
        Certificates,
        AmazingBusinessSolution,
        WeAlwaysTryToUnderstand,
        WeveDoneLotsOfWork,
        MeetOurAwesomeTeam,
        GetBetterSolution,
        SomeLovelyFeedback,
        ChooseYourBestPlan,
        GetOnlyNewUpdate,
        OurLatestNews,
        OurMediaAssets,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/pages?filters[slug][$eq]=index&populate=deep,5`, { params: { slug } })
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