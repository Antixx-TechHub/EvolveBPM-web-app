<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Details" />
        <BlogDetailsContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogDetailsContent from '../components/BlogDetails/BlogDetailsContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        BlogDetailsContent,
        Footer,
    },
}
</script>