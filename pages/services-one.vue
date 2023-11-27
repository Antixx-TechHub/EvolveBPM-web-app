<template>
    <div>
        <Navbar />
        <PageTitle />
        <TheKeyToYourMotivationSuccess />
        <ProvideAwesomeServices />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/ServicesOne/PageTitle'
import TheKeyToYourMotivationSuccess from '../components/ServicesOne/TheKeyToYourMotivationSuccess'
import ProvideAwesomeServices from '../components/ServicesOne/ProvideAwesomeServices'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        Navbar,
        PageTitle,
        TheKeyToYourMotivationSuccess,
        ProvideAwesomeServices,
        Footer,
        Copyright,
    }
}
</script>