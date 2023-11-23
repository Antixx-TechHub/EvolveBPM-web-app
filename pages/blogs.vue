<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Grid" />
        <Blog />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import Blog from '../components/Blogs/Blog'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        Navbar,
        PageTitle,
        Blog,
        Partner,
        Footer,
    },
};
</script>