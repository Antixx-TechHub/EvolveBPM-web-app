<template>
  <div>
    <Navbar />
    <ContactArea />
    <GoogleMapArea />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import ContactArea from '../components/ContactUs/ContactArea'
import GoogleMapArea from '../components/ContactUs/GoogleMapArea'
import Footer from '../layouts/Footer'

export default {
  components: {
    Navbar,
    ContactArea,
    GoogleMapArea,
    Footer,
  }
}
</script>