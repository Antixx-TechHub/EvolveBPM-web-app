<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Login" />
        <LoginContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import LoginContent from '../components/Login/LoginContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        LoginContent,
        Footer,
    }
}
</script>