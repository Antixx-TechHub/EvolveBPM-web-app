<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Pricing" />
        <PricingCard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import PricingCard from '../components/Pricing/PricingCard'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        PricingCard,
        Footer,
    }
}
</script>