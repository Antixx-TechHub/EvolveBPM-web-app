<template>
    <div>
        <Navbar class="navbar-style-two" />
        <ComingSoon />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import ComingSoon from '../components/Common/ComingSoon'
import Footer from '../layouts/Footer';

export default {
    name: 'ComingSoonPage',
    components: {
        Navbar,
        ComingSoon,
        Footer,
    }
}
</script>