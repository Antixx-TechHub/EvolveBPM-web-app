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
import MainBanner from '../components/Index/MainBanner'
import KeyFeaturesHome from '../components/Index/KeyFeaturesHome'
import BusinessGrowth from '../components/Index/BusinessGrowth'
import OurServices from '../components/Index/OurServices'
import Award from '../components/Index/Award'
import OurProjects from '../components/Index/OurProjects'
import FunFact from '../components/Index/FunFact'
import Testimonials from '../components/Index/Testimonials'
import Faq from '../components/Index/Faq'
import SocialButton from '../components/Index/SocialButton'
import CallUs from '../components/Index/CallUs'
import Partner from '../components/Common/Partner'
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