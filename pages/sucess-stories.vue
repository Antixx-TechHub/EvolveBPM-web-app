<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Success Stories" />
        <SuccessStoryMain />
        <Partner />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import SuccessStoryMain from '../components/SuccessStories/SuccessStoryMain'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        Navbar,
        PageTitle,
        SuccessStoryMain,
        Partner,
        Footer,
        Copyright,
    },
};
</script>