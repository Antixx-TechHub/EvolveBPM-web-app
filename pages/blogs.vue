<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle />
        <Blog />
        <Partner />
        <Footer />
        <Copyright  />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo'
import PageTitle from '../components/blogs/PageTitle'
import Blog from '../components/Blogs/Blog'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'
import Copyright from '../layouts/Copyright'


export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Blog,
        Partner,
        Footer,
        Copyright ,
    },
};
</script>