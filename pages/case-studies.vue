<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <CaseStudyDescription />
        <CaseStudies />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/CaseStudies/PageTitle'
import CaseStudyDescription from '../components/CaseStudies/CaseStudyDescription'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        CaseStudyDescription,
        CaseStudies,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>