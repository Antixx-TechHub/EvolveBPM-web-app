<template>
    <div class="postbox__area pt-100 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6"  v-for="casestudy in details[0].attributes?.case_studies?.data"
                                :key="casestudy.id">
                    <div class="single-blog-post">
                        <div class="post-image">
                            <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug" class="d-block">
                                <img :src="casestudy.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>
                        </div>

                        <div class="post-content">
                            <div class="post-meta">
                                <ul>
                                    <li>By: {{ casestudy.attributes.author }}</li>
                                    <li>{{ casestudy.attributes.date }}</li>
                                </ul>
                            </div>

                            <h3>
                                <NuxtLink :to="'/case-studies-details//' + casestudy.attributes.slug">
                                    {{ casestudy.attributes.title }}
                                </NuxtLink>
                            </h3>
                            
                            <p>{{ casestudy.attributes.shortDesc }}</p>

                            <NuxtLink :to="'/case-studies-details/' + casestudy.attributes.slug" class="read-more-btn">
                                Read More
                                <i class="flaticon-right-arrow"></i>
                            </NuxtLink>
                            
                        </div>
                    </div>
                </div>

                <b-pagination class="basic-pagination mt-30" v-model="currentPage" :total-rows="rows" :per-page="perPage"
                    aria-controls="itemList" align="center">
                </b-pagination>

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
        }
    },
}
</script>