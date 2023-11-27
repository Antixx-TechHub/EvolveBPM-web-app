<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <CaseStudies />
        <Partner />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/CaseStudies/PageTitle'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        CaseStudies,
        Partner,
        Footer,
        Copyright,
    },
};
</script>