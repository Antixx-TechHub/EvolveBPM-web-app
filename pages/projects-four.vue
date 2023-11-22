<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Style Four" />
        <AllProjectsFour />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AllProjectsFour from '../components/ProjectsFour/AllProjectsFour'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        AllProjectsFour,
        Footer,
    }
}
</script>