<template>
    <div>
        <NavbarTwo />
        <Breadcrumb />
        <FeaturedBlog />
        <Blog />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../layouts/NavbarTwo'
import Breadcrumb from '../components/Blogs/Breadcrumb'
import FeaturedBlog from '../components/Blogs/FeaturedBlog'
import Blog from '../components/Blogs/Blog'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarTwo,
        Breadcrumb,
        FeaturedBlog,
        Blog,
        Partner,
        Footer,
    },
};
</script>