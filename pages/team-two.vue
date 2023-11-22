<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Team Style Two" />
        <TeamCard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import TeamCard from '../components/TeamTwo/TeamCard'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        TeamCard,
        Footer,
    }
}
</script>