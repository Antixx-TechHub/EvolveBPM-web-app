<template>
    <div>
        <NavbarTwo />
        <Breadcrumb />
        <Blog />
        <LatestBlog />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../layouts/NavbarTwo'
import Breadcrumb from '../components/blogs/Breadcrumb'
import Blog from '../components/blogs/Blog'
import LatestBlog from '../components/blogs/LatestBlog'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarTwo,
        Breadcrumb,
        Blog,
        LatestBlog,
        Footer,
    },
};
</script>