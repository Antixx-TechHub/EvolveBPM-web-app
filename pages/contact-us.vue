<template>
  <div>
    <NavbarStyleTwo />
    <PageTitle />
    <LetsGetToWork />
    <ContactContent />
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/ContactUs/PageTitle'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import ContactContent from '../components/Contact/ContactContent'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'

export default {
  components: {
    NavbarStyleTwo,
    LetsGetToWork,
    PageTitle,
    ContactContent,
    Footer,
    Copyright,
  }
}
</script>