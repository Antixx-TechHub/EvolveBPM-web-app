<template>
    <div class="postbox__area pt-120 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-xl-12 col-lg-12">
                    <!-- <div class="tpsection__wrapper text-center mb-70">
                        <h2 class="tpsection__title">Latest Blog</h2>
                    </div> -->
                    <div class="blog-grid-wrapper">
                        <div class="row">
                            <div class="col-lg-4 col-md-4" v-for="portfolio in portfolios.slice(
                                (currentPage - 1) * perPage,
                                currentPage * perPage,
                            )" :key="portfolio.id">
                                <div class="tpblog-item-2 mb-30">
                                    <div class="tpblog-thumb-2">
                                        <router-link :to="'/portfolio-details/' + portfolio.attributes.slug" class="d-block">
                                            <img :src="portfolio.attributes.image.data.attributes.url" alt="blog">
                                        </router-link>
                                    </div>
                                    <div class="tpblog-wrap">
                                        <div class="tpblog-content-2">
                                            <span>{{ portfolio.attributes.tag }}</span>
                                            <h4 class="tpblog-title-2"><router-link
                                                    :to="'/portfolio-details/' + portfolio.attributes.slug">
                                                    {{ portfolio.attributes.title }}
                                                </router-link></h4>
                                            <p>{{ portfolio.attributes.shortDesc }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <b-pagination class="basic-pagination mt-30" v-model="currentPage" :total-rows="rows"
                            :per-page="perPage" aria-controls="itemList" align="center">
                        </b-pagination>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'PortfolioMain',
    data() {
        return {
            portfolios: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/portfolios?populate=*')
        this.portfolios = response.data.data;
        this.rows = this.portfolios?.length;
    },
}
</script>