<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <!-- <ServicesCard /> -->
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/ServicesThree/PageTitle'
import ServicesCard from '../components/ServicesThree/ServicesCard'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: { 
        NavbarStyleTwo,
        PageTitle,
        ServicesCard,
        Footer,
        Copyright,
    }
}
</script>