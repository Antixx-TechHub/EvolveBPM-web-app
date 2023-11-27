<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <SuccessStoryMain />
        <Partner />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/SuccessStories/PageTitle'
import SuccessStoryMain from '../components/SuccessStories/SuccessStoryMain'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        SuccessStoryMain,
        Partner,
        Footer,
        Copyright,
    },
};
</script>