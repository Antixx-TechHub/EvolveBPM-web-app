<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="FAQ" />
        <FrequentlyAsked />
        <FaqContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import FrequentlyAsked from '../components/Faq/FrequentlyAsked'
import FaqContent from '../components/Faq/FaqContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        FrequentlyAsked,
        FaqContent,
        Footer,
    }
}
</script>