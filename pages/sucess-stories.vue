<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <SuccessStoryMain />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/SuccessStories/PageTitle'
import SuccessStoryMain from '../components/SuccessStories/SuccessStoryMain'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        SuccessStoryMain,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>