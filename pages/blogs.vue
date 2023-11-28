<template>
    <div>
        <NavbarStyleTwo />
        <BlogsPageTitle />
        <OverViewDescription />
        <Blog />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import BlogsPageTitle from '../components/blogs/BlogsPageTitle'
import OverViewDescription from '../components/blogs/OverViewDescription'
import Blog from '../components/Blogs/Blog'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        BlogsPageTitle,
        OverViewDescription,
        Blog,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>