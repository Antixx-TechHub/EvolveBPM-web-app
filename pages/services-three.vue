<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="SEO Services" />
        <ServicesCard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ServicesCard from '../components/ServicesThree/ServicesCard'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        ServicesCard,
        Footer,
    }
}
</script>