<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Style Three" />
        <AllProjectsThree />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AllProjectsThree from '../components/ProjectsThree/AllProjectsThree'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        AllProjectsThree,
        Footer,
    }
}
</script>