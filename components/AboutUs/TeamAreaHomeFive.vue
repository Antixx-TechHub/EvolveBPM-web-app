<template>
    <div class="team-area pb-50">
        <div class="container " >
            <div class="row ">
                <div class="col-lg-12 pb-50">
                    <div class="section-3 text-center mb-35 ">
                        <div class="section-3-title mb-10 ">Meet our team of <br> expert</div>
                        <p>We're a 100% remote team spread all across the world!</p>
                    </div>
                    <div class="team-inner-all  text-center mb-70">
                        <a href="team.html" class="tp-btn">Join Our Team</a>
                    </div>
                </div>
            </div>
            <div class="row gx-9 pb-30" v-if="teams !== null">
                <div class="col-lg-3 col-md-6" v-for="team in teams.singleTeam" :key="team.id" >
                    <div class="team-5-item text-center mb-40" >
                        <div class="team-5-thumb mb-25" >
                            <img :src="team.image.data.attributes.url" alt="teams">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a :href="team.linkedin"
                                    class="d-block"
                                    target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">{{ team.title }}</a></h4>
                            <p>{{ team.designation }}</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-2 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img src="../../assets/img/team/team-5-2.png" alt="">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Byron Conner</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-3 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img src="../../assets/img/team/team-5-3.png" alt="">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Annette Black</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="team-5-item team-5-item-4 text-center mb-40">
                        <div class="team-5-thumb mb-25">
                            <img src="../../assets/img/team/team-5-4.png" alt="">
                            <div class="team-5-social">
                                <span class="icon"></span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="team-5-content">
                            <h4 class="team-5-title"><a href="team-details.html">Kathryn Murphy</a></h4>
                            <p>Founder & CEO</p>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios'

export default {
    name: 'TeamAreaHomeFive',
    data() {
        return {
            teams: null,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/team?populate=deep,5')
        const { data: { attributes } } = response.data
        this.teams = attributes
    },
}
</script>