<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Sign up" />
        <SignupContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import SignupContent from '../components/Signup/SignupContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        SignupContent,
        Footer,
    }
}
</script>