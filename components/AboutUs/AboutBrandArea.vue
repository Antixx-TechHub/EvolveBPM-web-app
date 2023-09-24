<template>
   <div class="brand-area pb-120">
      <div class="container-fluid">
         <div class="row align-items-center">
            <div class="col-lg-2 offset-lg-5 col-md-4">
               <div class="brand-wrapper ">
                  <div class="brand-inner-content">
                     <h4 class="brand-inner-title">Scroll down <br> to explore more</h4>
                     <a href="#our-misson">
                        <i>
                           <svg width="20" height="30" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="0.75" y="0.75" width="18.5" height="28.5" rx="9.25" stroke="white"
                                 stroke-width="1.5" />
                              <rect x="7.75" y="6.75" width="4.5" height="4.5" rx="2.25" stroke="white"
                                 stroke-width="1.5" />
                           </svg>
                        </i>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-5 col-md-8">
               <div class="brand-inner-wrapper tpbrand-inner-active">
                  <div class="tpbrand-inner-item">
                     <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                        :perPageCustom="[[0, 2], [576, 3], [768, 3], [1200, 4]]" v-if="partners !== null">
                        <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                           <div class="tpbrand-item">
                              <img :src="slide.image.data.attributes.url" alt="image">
                           </div>
                        </slide>
                     </carousel>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
  
<script>

import axios from 'axios'

export default {
   name: 'AboutBrandArea',
   data: () => ({
      settings: {
         itemsToShow: 1,
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