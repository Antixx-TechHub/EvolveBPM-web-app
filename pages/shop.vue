<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Shop" />
        <ShopContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ShopContent from '../components/Shop/ShopContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        ShopContent,
        Footer,
    }
}
</script>