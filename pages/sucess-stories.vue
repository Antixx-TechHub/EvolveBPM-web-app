<template>
    <div>
        <NavbarTwo />
        <Breadcrumb />
        <Blog />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../layouts/NavbarTwo'
import Breadcrumb from '../components/SuccessStories/Breadcrumb'
import Blog from '../components/SuccessStories/SuccessStoryMain'
import Partner from '../components/Index/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarTwo,
        Breadcrumb,
        Blog,
        Partner,
        Footer,
    },
};
</script>