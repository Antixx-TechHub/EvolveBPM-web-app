<template>
   <div class="award-area tp-large-box award-bg pt-110 p-relative fix" :style="bannerStyle">
      <div class="award-shape d-none d-xl-block">
         <div class="award-shape-one">
            <img src="../../assets/img/shape/services-2shape-3.png" alt="">
         </div>
         <div class="award-shape-two">
            <img src="../../assets/img/shape/services-2shape-4.png" alt="">
         </div>
      </div>
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-8">
               <div class="tpsection-wrapper text-center pb-60">
                  <h2 class="tpsection-title-two">
                     <span>Awards &
                        <svg width="256" height="26" viewBox="0 0 256 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3.3235 15.8532C3.3235 15.8532 161.626 -4.27683 250.369 10.281" stroke="#FFCE5A"
                              stroke-width="5" stroke-linecap="round" />
                           <path d="M3.59665 12.5096C3.59665 12.5096 164.84 -0.133887 253.255 18.3596" stroke="#FFCE5A"
                              stroke-width="5" stroke-linecap="round" />
                        </svg>
                     </span>
                     Certifications
                  </h2>
               </div>
            </div>
         </div>
         <div class="award-brand">
            <div class="row gx-7 gx-md-2 row-cols-4 tp-row-cols-md-7  tp-row-cols-xl-7">
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                     <div class="award-item award-item1">
                        <img src="../../assets/img/icon/award-1.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".5s" data-wow-delay=".5s">
                     <div class="award-item award-item2">
                        <img src="../../assets/img/icon/award-2.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".4s" data-wow-delay=".4s">
                     <div class="award-item award-item3">
                        <img src="../../assets/img/icon/award-3.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".4s" data-wow-delay=".4s">
                     <div class="award-item award-item4">
                        <img src="../../assets/img/icon/award-4.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".5s" data-wow-delay=".5s">
                     <div class="award-item award-item5">
                        <img src="../../assets/img/icon/award-5.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                     <div class="award-item award-item6">
                        <img src="../../assets/img/icon/award-6.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="award-anim wow bounceIn" data-wow-duration=".6s" data-wow-delay=".6s">
                     <div class="award-item award-item7">
                        <img src="../../assets/img/icon/award-7.png" alt="">
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
   name: 'Award',
   data() {
      return {
         bannerStyle: {
            backgroundImage: `url(${require('../../assets/img/banner/award-bg-2.png')})`
         }
      };
   }
}
</script>