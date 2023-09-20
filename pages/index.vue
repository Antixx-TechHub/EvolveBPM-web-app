<template>
  <div>
    <Navbar />
    <MainBanner />
    <KeyFeaturesHome />
    <BusinessGrowth />
    <OurServices />
    <Award />

    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import MainBanner from '../components/index/MainBanner'
import KeyFeaturesHome from '../components/index/KeyFeaturesHome'
import BusinessGrowth from '../components/index/BusinessGrowth'
import OurServices from '../components/index/OurServices'
import Award from '../components/index/Award'


// import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    MainBanner,
    KeyFeaturesHome,
    BusinessGrowth,
    OurServices,
    Award,


    // Footer,
  }
}
</script>