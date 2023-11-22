<template>
    <div>
        <TopbarWrap />
        <NavbarStyleThree />
        <MainBanner />
        <FunFacts />
        <Featured />
        <About />
        <Partner />
        <Services />
        <ChooseUs />
        <Overview />
        <Feedback />
        <Blog />
        <Subscribe />
        <FooterStyleTwo />
        <Copyright />
    </div>
</template>

<script>
import TopbarWrap from '../layouts/TopbarWrap'
import NavbarStyleThree from '../layouts/NavbarStyleThree'
import MainBanner from '../components/HomeTwelve/MainBanner'
import FunFacts from '../components/HomeTwelve/FunFacts'
import Featured from '../components/HomeTwelve/Featured'
import About from '../components/HomeTwelve/About'
import Partner from '../components/HomeTwelve/Partner'
import Services from '../components/HomeTwelve/Services'
import ChooseUs from '../components/HomeTwelve/ChooseUs'
import Overview from '../components/HomeTwelve/Overview'
import Feedback from '../components/HomeTwelve/Feedback'
import Blog from '../components/HomeTwelve/Blog'
import Subscribe from '../components/HomeTwelve/Subscribe'
import FooterStyleTwo from '../layouts/FooterStyleTwo'
import Copyright from '../layouts/Copyright'

export default {
    components: { 
        TopbarWrap,
        NavbarStyleThree,
        MainBanner,
        FunFacts,
        Featured,
        About,
        Partner,
        Services,
        ChooseUs,
        Overview,
        Feedback,
        Blog,
        Subscribe,
        FooterStyleTwo,
        Copyright,
    }
}
</script>