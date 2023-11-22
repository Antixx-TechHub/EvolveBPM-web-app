<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="IT Services" />
        <OverViewTwo />
        <OurServicesTwo />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import OverViewTwo from '../components/ServicesTwo/OverViewTwo'
import OurServicesTwo from '../components/ServicesTwo/OurServicesTwo'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        OverViewTwo,
        OurServicesTwo,
        Footer,
    }
}
</script>