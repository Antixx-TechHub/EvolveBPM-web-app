<template>
    <div>
        <NavbarStyleThree class="with-black-color" />
        <MainBanner />
        <div class="background-with-black-color">
            <Card />
            <Features />
            <Partner />
            <About />
            <ChooseUs />
            <Services />
            <FunFacts />
            <LeadingTechnology />
            <Overview />
            <Feedback />
            <Blog />
        </div>
        <Subscribe />
        <FooterStyleThree />
        <Copyright class="with-black-color" />
    </div>
</template>

<script>
import NavbarStyleThree from '../layouts/NavbarStyleThree'
import MainBanner from '../components/HomeEleven/MainBanner'
import Card from '../components/HomeEleven/Card'
import Features from '../components/HomeEleven/Features'
import Partner from '../components/HomeEleven/Partner'
import About from '../components/HomeEleven/About'
import ChooseUs from '../components/HomeEleven/ChooseUs'
import Services from '../components/HomeEleven/Services'
import FunFacts from '../components/HomeEleven/FunFacts'
import LeadingTechnology from '../components/HomeEleven/LeadingTechnology'
import Overview from '../components/HomeEleven/Overview'
import Feedback from '../components/HomeEleven/Feedback'
import Blog from '../components/HomeEleven/Blog'
import Subscribe from '../components/HomeEleven/Subscribe'
import FooterStyleThree from '../layouts/FooterStyleThree'
import Copyright from '../layouts/Copyright'

export default {
    components: { 
        NavbarStyleThree,
        MainBanner,
        Card,
        Features,
        Partner,
        About,
        ChooseUs,
        Services,
        FunFacts,
        LeadingTechnology,
        Overview,
        Feedback,
        Blog,
        Subscribe,
        FooterStyleThree,
        Copyright,
    }
}
</script>