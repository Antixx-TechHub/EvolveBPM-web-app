<template>
    <div>
        <Navbar />
        <MainBanner />
        <WeveDoneLotsOfWork />
        <Partner />
        <OurFeaturedServices class="pt-40" />
        <AmazingBusinessSolution />
        <WeAlwaysTryToUnderstand />
        <FunFacts />
        <MeetOurAwesomeTeam />
        <GetBetterSolution />
        <SomeLovelyFeedback />
        <ChooseYourBestPlan />
        <GetOnlyNewUpdate />
        <OurLatestNews />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/HomeOne/MainBanner'
import OurFeaturedServices from '../components/Common/OurFeaturedServices'
import Partner from '../components/HomeOne/Partner'
import AmazingBusinessSolution from '../components/Common/AmazingBusinessSolution'
import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
import FunFacts from '../components/Common/FunFacts'
import WeveDoneLotsOfWork from '../components/Common/WeveDoneLotsOfWork'
import MeetOurAwesomeTeam from '../components/Common/MeetOurAwesomeTeam'
import GetBetterSolution from '../components/Common/GetBetterSolution'
import SomeLovelyFeedback from '../components/Common/SomeLovelyFeedback'
import ChooseYourBestPlan from '../components/Common/ChooseYourBestPlan'
import GetOnlyNewUpdate from '../components/Common/GetOnlyNewUpdate'
import OurLatestNews from '../components/Common/OurLatestNews'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'

export default {
    components: {
        Navbar,
        MainBanner,
        OurFeaturedServices,
        Partner,
        AmazingBusinessSolution,
        WeAlwaysTryToUnderstand,
        FunFacts,
        WeveDoneLotsOfWork,
        MeetOurAwesomeTeam,
        GetBetterSolution,
        SomeLovelyFeedback,
        ChooseYourBestPlan,
        GetOnlyNewUpdate,
        OurLatestNews,
        Footer,
        Copyright,
    }
}
</script>