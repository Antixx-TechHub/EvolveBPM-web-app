<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Partner" />
        <PartnerContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import PartnerContent from '../components/Partner/PartnerContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        PartnerContent,
        Footer,
    }
}
</script>