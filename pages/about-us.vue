<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <!-- <WeAredDynamicTeam /> -->
        <!-- <AboutFunFacts /> -->
        <AboutUsDescription />
        <!-- <EngagingNew class="pt-100" /> -->
        <!-- <GetBetterSolution /> -->
        <CertficationsRecogniations />
        <TeamContent />
        <!-- <SomeLovelyFeedback /> -->
        <!-- <OurExpertTeam class="pt-0" /> -->
        <!-- <GetOnlyNewUpdateFrom /> -->
        <!-- <WePartnerWithCompaniessizes /> -->
        <AboutPersonInfo />
        <EvoleCoreValues />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/AboutTwo/PageTitle'
import WeAredDynamicTeam from '../components/Common/WeAredDynamicTeam'
import AboutFunFacts from '../components/AboutTwo/AboutFunFacts'
import AboutUsDescription from '../components/AboutUs/AboutUsDescription'
import EngagingNew from '../components/AboutTwo/EngagingNew'
// import GetBetterSolution from '../components/Common/GetBetterSolution'
import CertficationsRecogniations from '../components/AboutUs/CertficationsRecogniations'
import AboutPersonInfo from '../components/AboutUs/AboutPersonInfo'
import EvoleCoreValues from '../components/AboutUs/EvoleCoreValues'
import TeamContent from '../components/TeamOne/TeamContent'
import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
import OurExpertTeam from '../components/Common/OurExpertTeam'
import GetOnlyNewUpdateFrom from '../components/AboutTwo/GetOnlyNewUpdateFrom'
import WePartnerWithCompaniessizes from '../components/AboutTwo/WePartnerWithCompaniessizes'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        WeAredDynamicTeam,
        AboutFunFacts,
        AboutUsDescription,
        EngagingNew,
        // GetBetterSolution,
        CertficationsRecogniations,
        TeamContent,
        AboutPersonInfo,
        EvoleCoreValues,
        SomeLovelyFeedback,
        OurExpertTeam,
        GetOnlyNewUpdateFrom,
        WePartnerWithCompaniessizes,
        LetsGetToWork,
        Footer,
        Copyright,
    }
}
</script>