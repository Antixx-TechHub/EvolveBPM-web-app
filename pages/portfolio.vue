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
import Breadcrumb from '../components/Portfolio/Breadcrumb'
import Blog from '../components/Portfolio/Portfolio'
import Partner from '../components/Common/Partner'
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