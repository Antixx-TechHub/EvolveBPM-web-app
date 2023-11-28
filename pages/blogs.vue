<template>
    <div>
        <NavbarStyleTwo />
        <BlogsPageTitle />
        <Blog />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import BlogsPageTitle from '../components/Blogs/BlogsPageTitle'
import Blog from '../components/Blogs/Blog'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        BlogsPageTitle,
        Blog,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>