<template>
  <div>
    <NavbarStyleTwo />
    <ContactUsPageTitle />
    <LetsGetToWork />
    <ContactContent />
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import ContactUsPageTitle from '../components/ContactUs/ContactUsPageTitle'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import ContactContent from '../components/ContactUs/ContactContent'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'

export default {
  components: {
    NavbarStyleTwo,
    ContactUsPageTitle,
    LetsGetToWork,
    ContactContent,
    Footer,
    Copyright,
  }
}
</script>