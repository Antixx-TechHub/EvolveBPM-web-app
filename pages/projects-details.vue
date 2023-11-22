<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects Details" />
        <ProjectsDetailsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ProjectsDetailsContent from '../components/ProjectsDetails/ProjectsDetailsContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        ProjectsDetailsContent,
        Footer,
    }
}
</script>