<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Services Details" />
        <ServicesDetailsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ServicesDetailsContent from '../components/ServicesDetails/ServicesDetailsContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        ServicesDetailsContent,
        Footer,
    }
}
</script>