<template>
    <div>
        <Navbar />
        <PageTitle />
        <OverViewTwo />
        <OurServicesTwo />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/ServicesOne/PageTitle'
import OverViewTwo from '../components/ServicesTwo/OverViewTwo'
import OurServicesTwo from '../components/ServicesTwo/OurServicesTwo'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        Navbar,
        PageTitle,
        OverViewTwo,
        OurServicesTwo,
        Footer,
        Copyright,
    }
}
</script>