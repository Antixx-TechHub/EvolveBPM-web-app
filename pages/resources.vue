<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <ResourceDescription />
        <CaseStudiesRsesources />
        <EbookResources />
        <WhitePaperResources />
        <BlogResource />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/Resources/PageTitle'
import ResourceDescription from '../components/Resources/ResourceDescription'
import CaseStudiesRsesources from '../components/Resources/CaseStudiesRsesources'
import EbookResources from '../components/Resources/EbookResources'
import WhitePaperResources from '../components/Resources/WhitePaperResources'
import BlogResource from '../components/Resources/BlogResource'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ResourceDescription,
        CaseStudiesRsesources,
        EbookResources,
        WhitePaperResources,
        BlogResource,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>