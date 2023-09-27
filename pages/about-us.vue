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
  }
}
</script>