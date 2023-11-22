<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Terms & Conditions" />
        <TermsConditionsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import TermsConditionsContent from '../components/TermsConditions/TermsConditionsContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        TermsConditionsContent,
        Footer,
    }
}
</script>