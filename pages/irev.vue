<template>
    <div>
      <Navbar />

      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../layouts/Navbar'

  import Footer from '../layouts/Footer'
  
  export default {
    components: {
      Navbar,

      Footer,
    }
  }
  </script>