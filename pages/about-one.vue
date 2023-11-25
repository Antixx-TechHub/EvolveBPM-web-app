<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="About Us" />
        <AboutText />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AboutText from '../components/AboutOne/AboutText'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        Navbar,
        PageTitle,
        AboutText,
        Footer,
        Copyright,
    },
}
</script>