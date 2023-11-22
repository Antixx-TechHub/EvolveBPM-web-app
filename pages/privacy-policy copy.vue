<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Privacy Policy" />
        <PrivacyPolicyContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        PrivacyPolicyContent,
        Footer,
    }
}
</script>