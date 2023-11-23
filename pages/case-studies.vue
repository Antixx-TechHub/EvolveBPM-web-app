<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Case Studies" />
        <CaseStudies />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        Navbar,
        PageTitle,
        CaseStudies,
        Partner,
        Footer,
    },
};
</script>