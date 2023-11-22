<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Style Two" />
        <AllProjectsTwo />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import AllProjectsTwo from '../components/ProjectsTwo/AllProjectsTwo'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        AllProjectsTwo,
        Footer,
    }
}
</script>