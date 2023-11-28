<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <TheKeyToYourMotivationSuccess />
        <ProvideAwesomeServices />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/ServicesOne/PageTitle'
import TheKeyToYourMotivationSuccess from '../components/ServicesOne/TheKeyToYourMotivationSuccess'
import ProvideAwesomeServices from '../components/ServicesOne/ProvideAwesomeServices'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        NavbarStyleTwo,
        PageTitle,
        TheKeyToYourMotivationSuccess,
        ProvideAwesomeServices,
        Footer,
        Copyright,
    }
}
</script>