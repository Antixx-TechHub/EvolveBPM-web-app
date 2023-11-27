<template>
    <div>
        <Navbar />
        <PageTitle />
        <ServicesCard />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/ServicesOne/PageTitle'
import ServicesCard from '../components/ServicesThree/ServicesCard'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        Navbar,
        PageTitle,
        ServicesCard,
        Footer,
        Copyright,
    }
}
</script>