<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <OverViewDescription />
        <CaseStudies />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/CaseStudies/PageTitle'
import OverViewDescription from '../components/blogs/OverViewDescription'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        OverViewDescription,
        CaseStudies,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>