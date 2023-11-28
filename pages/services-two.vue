<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <OverViewTwo />
        <OurServicesTwo />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/ServicesTwo/PageTitle'
import OverViewTwo from '../components/ServicesTwo/OverViewTwo'
import OurServicesTwo from '../components/ServicesTwo/OurServicesTwo'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        NavbarStyleTwo,
        PageTitle,
        OverViewTwo,
        OurServicesTwo,
        Footer,
        Copyright,
    }
}
</script>