<template>
    <div>
        <NavbarStyleTwo />
        <BlogsPageTitle />
        <BlogDesciption />
        <Blog />
        <LetsGetToWork />
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import BlogsPageTitle from '../components/Blogs/BlogsPageTitle'
import BlogDesciption from '../components/Blogs/BlogDesciption'
import Blog from '../components/Blogs/Blog'
import LetsGetToWork from '../components/Common/LetsGetToWork'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        BlogsPageTitle,
        BlogDesciption,
        Blog,
        LetsGetToWork,
        Footer,
        Copyright,
    },
};
</script>