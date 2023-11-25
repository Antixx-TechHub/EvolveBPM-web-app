<template>
  <div>
      <Navbar />
      <PageTitle pageTitle="Contact" />
      <ContactContent />
      <Footer />
      <Copyright />
  </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ContactContent from '../components/Contact/ContactContent'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'

export default {
  components: { 
      Navbar,
      PageTitle,
      ContactContent,
      Footer,
      Copyright,
  }
}
</script>