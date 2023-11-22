<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Projects" />
        <ProjectsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import ProjectsContent from '../components/ProjectsOne/ProjectsContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        ProjectsContent,
        Footer,
    }
}
</script>