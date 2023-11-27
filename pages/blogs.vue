<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <OverViewDescription />
        <Blog />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/blogs/PageTitle'
import OverViewDescription from '../components/blogs/OverViewDescription'
import Blog from '../components/Blogs/Blog'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        OverViewDescription,
        Blog,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>