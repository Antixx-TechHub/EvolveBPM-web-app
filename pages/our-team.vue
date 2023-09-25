<template>
    <div>
        <Navbar />
        <TeamAreaHomeFive />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import TeamAreaHomeFive from '../components/AboutUs/TeamAreaHomeFive'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        Navbar,
        TeamAreaHomeFive,
        Partner,
        Footer,
    },
};
</script>