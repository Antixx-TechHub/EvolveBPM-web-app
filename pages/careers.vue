<template>
    <div>
        <NavbarTwo />
        <Breadcrumb />
        <CarrerMain />
        <Partner />
        <Footer />
    </div>
</template>

<script>
import NavbarTwo from '../layouts/NavbarTwo'
import Breadcrumb from '../components/Carrer/Breadcrumb'
import CarrerMain from '../components/Carrer/CarrerMain'
import Partner from '../components/Common/Partner'
import Footer from '../layouts/Footer'

export default {
    components: {
        NavbarTwo,
        Breadcrumb,
        CarrerMain,
        Partner,
        Footer,
    },
};
</script>