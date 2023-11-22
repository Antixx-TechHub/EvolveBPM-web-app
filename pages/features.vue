<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Features" />
        <CreativeSolutions />
        <WeAlwaysTryToUnderstand />
        <FunFacts />
        <WePartnerWithCompanies />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import CreativeSolutions from '../components/Features/CreativeSolutions'
import WeAlwaysTryToUnderstand from '../components/Common/WeAlwaysTryToUnderstand'
import FunFacts from '../components/Common/FunFacts'
import WePartnerWithCompanies from '../components/Common/WePartnerWithCompanies'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        CreativeSolutions,
        WeAlwaysTryToUnderstand,
        FunFacts,
        WePartnerWithCompanies,
        Footer,
    }
}
</script>