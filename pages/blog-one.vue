<template>
    <div>
        <Navbar />
        <PageTitle pageTitle="Blog Grid" />
        <BlogCard />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar'
import PageTitle from '../components/Common/PageTitle'
import BlogCard from '../components/BlogOne/BlogCard'
import Footer from '../layouts/Footer'

export default {
    components: { 
        Navbar,
        PageTitle,
        BlogCard,
        Footer,
    }
}
</script>