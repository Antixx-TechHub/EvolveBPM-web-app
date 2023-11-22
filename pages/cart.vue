<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Cart" />
        <CartContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import CartContent from '../components/Cart/CartContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        CartContent,
        Footer,
    }
}
</script>