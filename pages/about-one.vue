<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <AboutText />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AboutText from '../components/AboutOne/AboutText'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        AboutText,
        Footer,
    },
}
</script>