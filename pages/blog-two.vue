<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Right Sidebar" />
        <BlogTwoContent />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogTwoContent from '../components/BlogTwo/BlogTwoContent'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        BlogTwoContent,
        Footer,
    }
}
</script>