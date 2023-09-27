<template>
   <div class="services-area tp-large-box services-bg-two p-relative fix" :style="bannerStyle">
      <div class="services-shape d-none d-xl-block">
         <div class="services-shape-one">
            <img src="../../assets/img/shape/services-2shape-1.png" alt="">
         </div>
         <div class="services-shape-two">
            <img src="../../assets/img/shape/services-2shape-2.png" alt="">
         </div>
      </div>
      <div class="container">
         <div class="row">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="tpsection-wrapper text-center mb-60">
                     <h2 class="tpsection-title-two">Check why you Should <br>
                        <span class="big-shape2">
                           Choose Us
                           <svg width="246" height="24" viewBox="0 0 246 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.74431 14.6419C2.74431 14.6419 154.652 -4.65014 239.811 9.30024" stroke="#FFCE5A"
                                 stroke-width="5" stroke-linecap="round" />
                              <path d="M3.00783 11.4374C3.00783 11.4374 157.737 -0.672988 242.581 17.053" stroke="#FFCE5A"
                                 stroke-width="5" stroke-linecap="round" />
                           </svg>
                        </span>
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-6">
               <div class="services-two mb-30">
                  <div class="services-two-bg"></div>
                  <div class="services-two-icon">
                     <img src="../../assets/img/icon/services-icon-1.png" alt="">
                  </div>
                  <div class="services-two-content">
                     <span>SEO Strategy</span>
                     <h4 class="services-two-title">The Easiest Way to <br> Improve Your Site Speed</h4>
                     <p>Intent-driven Demand Generation engine ensures a customised and comprehensive framework that has the ability to drive outcome based conversations. We facilitate our partners to take tactical decisions that lead to strategic outcomes. </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="services-two mb-30">
                  <div class="services-two-bg"></div>
                  <div class="services-two-icon">
                     <img src="../../assets/img/icon/services-icon-2.png" alt="">
                  </div>
                  <div class="services-two-content">
                     <span>SEO Optimization</span>
                     <h4 class="services-two-title">Complete Site <br> Speed Optimization Service</h4>
                     <p>Cutting-edge Data Research and Management Solutions to the global clientele including data research, cleansing, consolidation, and maintenance. We use a 5 stage approach, filtering out the data at every stage, to finally hand over lead </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="services-two mb-30">
                  <div class="services-two-bg"></div>
                  <div class="services-two-icon">
                     <img src="../../assets/img/icon/services-icon-3.png" alt="">
                  </div>
                  <div class="services-two-content">
                     <span>SEO Analysis</span>
                     <h4 class="services-two-title">Instantly Analyze Your <br> SEO Issues</h4>
                     <p>Expert, research-driven Media and Content solutions through a growing team of content and creative specialists. Starting with an in-depth understanding of tertiary audiences and their needs, the ability to pair audience demand with client solutions </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="services-two mb-30">
                  <div class="services-two-bg"></div>
                  <div class="services-two-icon">
                     <img src="../../assets/img/icon/services-icon-4.png" alt="">
                  </div>
                  <div class="services-two-content">
                     <span>Web & Mobile</span>
                     <h4 class="services-two-title">Enhanced Mobile & <br> Desktop UX</h4>
                     <p>Innovator provides you with a dynamic demand landscape, so you can understand the bigger picture of your marketing activities. With Innovator and its data leverage as your audiences engage with your content, you'll realize the value </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: 'OurServices',
   data() {
    return {
      bannerStyle: {
        backgroundImage: `url(${require('../../assets/img/banner/services-bg.png')})`
      }
    };
  }
}
</script>