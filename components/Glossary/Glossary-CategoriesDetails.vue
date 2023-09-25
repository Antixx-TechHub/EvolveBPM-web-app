<template>
    <div class="postbox__area pt-120 pb-95">
        <div class="container">
            <div class="row">
                <div class="col-xxl-7 col-xl-7 col-lg-7">
                    <div class="blog-grid-wrapper">
                        <div class="row">
                            <div class="col-lg-6 col-md-6" v-for="glossary in details[0].attributes?.glossaries?.data"
                                :key="glossary.id">
                                <div class="tpblog-item-2 mb-30">
                                    <div class="tpblog-thumb-2">
                                        <router-link :to="'/glossary-details/' + glossary.attributes.slug" class="d-block">
                                            <img :src="glossary?.attributes?.image?.data?.attributes?.url" alt="blog">
                                        </router-link>
                                    </div>
                                    <div class="tpblog-wrap">
                                        <div class="tpblog-content-2">
                                            <span>{{ glossary.attributes.tag }}</span>
                                            <h4 class="tpblog-title-2">
                                                <NuxtLink :to="'/glossary-details/' + glossary.attributes.slug">
                                                    {{ glossary.attributes.title }}
                                                </NuxtLink>
                                            </h4>
                                            <p>{{ glossary.attributes.shortDesc }}</p>
                                        </div>
                                        <div class="tpblog-meta-2">
                                            <span>
                                                <i>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15 8C15 11.864 11.864 15 8 15C4.136 15 1 11.864 1 8C1 4.136 4.136 1 8 1C11.864 1 15 4.136 15 8Z"
                                                            stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                        <path
                                                            d="M10.5967 10.226L8.42672 8.93099C8.04872 8.70699 7.74072 8.16799 7.74072 7.72699V4.85699"
                                                            stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" />
                                                    </svg>
                                                </i>
                                                {{ glossary.attributes.date }}
                                            </span>
                                            <span>
                                                <a href="#">
                                                    <i>
                                                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M6.99976 7.98487C8.92858 7.98487 10.4922 6.42125 10.4922 4.49243C10.4922 2.56362 8.92858 1 6.99976 1C5.07094 1 3.50732 2.56362 3.50732 4.49243C3.50732 6.42125 5.07094 7.98487 6.99976 7.98487Z"
                                                                stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                            <path
                                                                d="M13 14.9697C13 12.2665 10.3108 10.0803 7 10.0803C3.68917 10.0803 1 12.2665 1 14.9697"
                                                                stroke="#565764" stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" />
                                                        </svg>
                                                    </i>
                                                    {{ glossary.attributes.author }}
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CategoryDetails',
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent,
            categories: [],
            rows: 0,
            currentPage: 1,
            perPage: 6,
        }
    },
}
</script>