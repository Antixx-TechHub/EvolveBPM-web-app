<template>
  <div>
    <Navbar />
    <MainBanner />
    <KeyFeaturesHome />
    <BusinessGrowth />
    <OurServices />
    <Award />
    <OurProjects />
    <FunFact />
    <Testimonials />
    <faq />
    <SocialButton />
    <CallUs />
    <Partner />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/index/MainBanner'
import KeyFeaturesHome from '../components/index/KeyFeaturesHome'
import BusinessGrowth from '../components/index/BusinessGrowth'
import OurServices from '../components/index/OurServices'
import Award from '../components/index/Award'
import OurProjects from '../components/index/OurProjects'
import FunFact from '../components/index/FunFact'
import Testimonials from '../components/index/Testimonials'
import Faq from '../components/index/Faq'
import SocialButton from '../components/index/SocialButton'
import CallUs from '../components/index/CallUs'
import Partner from '../components/index/Partner'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    MainBanner,
    KeyFeaturesHome,
    BusinessGrowth,
    OurServices,
    Award,
    OurProjects,
    FunFact,
    Testimonials,
    Faq,
    SocialButton,
    CallUs,
    Partner,
    Footer,
  }
}
</script>