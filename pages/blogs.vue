<template>
    <div>
        <NavbarTwo />
        <Breadcrumb />
        <FeaturedBlogMain />
        <Blog />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../layouts/NavbarTwo'
import Breadcrumb from '../components/Blogs/Breadcrumb'
import FeaturedBlogMain from '../components/Blogs/FeaturedBlogMain'
import Blog from '../components/Blogs/Blog'
import Partner from '../components/Index/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarTwo,
        Breadcrumb,
        FeaturedBlogMain,
        Blog,
        Partner,
        Footer,
    },
};
</script>