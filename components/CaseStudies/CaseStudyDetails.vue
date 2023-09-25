<template>
   <section class="postbox-area mt-90 pb-120">
      <div class="container">
         <div class="row">
            <div class="col-xxl-7 col-xl-7 col-lg-7">
               <div class="postbox-area-wrap">
                  <div class="postbox-main">
                     <div class="postbox-img">
                        <img :src="details[0].attributes.image.data.attributes.url" alt="image">
                     </div>
                     <div class="postbox-single-text">
                        <h4 class="blog-details-title">{{ details[0].attributes.title }}</h4>
                        <span v-html="details[0].attributes.longDesc"></span>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-xxl-5 col-xl-5 col-lg-5">
               <CaseStudiesSidebar />
            </div>
         </div>
      </div>
   </section>
</template>

<script>

import CaseStudiesSidebar from '../../components/Sidebar/CaseStudiesSidebar'

export default {
   name: 'BlogDetails',
   props: ['detailsContent'],
   components: {
      CaseStudiesSidebar,
   },
   data: function () {
      return {
         details: this.detailsContent,
      }
   },
}
</script>