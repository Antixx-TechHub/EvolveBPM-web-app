<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services" />
        <TheKeyToYourMotivationSuccess />
        <ProvideAwesomeServices />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import TheKeyToYourMotivationSuccess from '../components/ServicesOne/TheKeyToYourMotivationSuccess'
import ProvideAwesomeServices from '../components/ServicesOne/ProvideAwesomeServices'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        TheKeyToYourMotivationSuccess,
        ProvideAwesomeServices,
        Footer,
    }
}
</script>