<template>
  <div class="brand-area pb-30 pt-85">
         <div class="container">
            <div class="row justify-content-center">
               <div class="col-xxl-10 col-xl-8 col-lg-10">
                  <div class="tpbrand tpbrand-active">
                     <carousel
                            :autoplay = "true"
                            :loop = "true"
                            :paginationEnabled = "false"
                            :perPageCustom = "[[0, 2], [576, 3], [768, 3], [1200, 4]]"
                            v-if="partners !== null"
                        >
                            <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                     <div class="tpbrand-item">
                        <img :src="slide.image.data.attributes.url" alt="image">
                     </div>
                     </slide>
                     <!-- <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-2.png" alt="">
                     </div>
                  </slide>
                  <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-3.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-4.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-5.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-6.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-4.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-5.png" alt="">
                     </div>
                     </slide>
                     <slide>
                     <div class="tpbrand-item">
                        <img src="../../assets/img/brand/brand-6.png" alt="">
                     </div>
                     </slide> -->
                     </carousel>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>

import axios from 'axios'

export default {
   name: 'Partner',
   data: () => ({
        settings: {
            itemsToShow: 6,
            snapAlign: 'center',
        },
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/partner?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
}
</script>