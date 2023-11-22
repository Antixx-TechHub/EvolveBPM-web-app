<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team Style One" />
        <TeamContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import TeamContent from '../components/TeamOne/TeamContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        TeamContent,
        Footer,
    }
}
</script>