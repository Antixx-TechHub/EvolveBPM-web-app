<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Checkout" />
        <CheckOutContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import CheckOutContent from '../components/CheckOut/CheckOutContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        CheckOutContent,
        Footer,
    }
}
</script>