<template>
   <div class="testimonial-area pt-85">
      <div class="container">
         <div class="tptestimonial-two-bg">
            <div class="row justify-content-center">
               <div class="col-xxl-8 col-lg-10 col-md-9">
                  <div class="tptestimonial-area-two p-relative">
                     <div class="tptestimonial-active-two">
                        <carousel :autoplay="true"
                        :loop="true"
                        :autoplayTimeout="5000"
                        :speed="1000"
                        :paginationEnabled="true"
                        :perPageCustom="[[0, 1], [576, 1], [768, 1], [1024, 1], [1200, 1]]"
                        v-if="customerreviews !== null"
                        >
                           <slide v-for="customerreview in customerreviews.singleFeedbacks" :key="customerreview.id">
                              <div class="tptestimonial-two-item">
                                 <div class="tptestimonial-two">
                                    <div class="tptestimonial-two-avatar">
                                       <img :src="customerreview.media.data.attributes.url" alt="Testimonials">
                                       <div class="title">
                                          <h3>{{ customerreview.name }}</h3>
                                          <span>{{ customerreview.designation }}</span>
                                       </div>
                                    </div>
                                    <div class="tptestimonial-two-content">
                                       <i>
                                          <svg width="32" height="20" viewBox="0 0 32 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path
                                                d="M10.3376 2.213C9.04053 2.94247 8.04356 3.73741 7.34664 4.59782C6.63037 5.45823 6.13672 6.47762 5.8657 7.656C6.13672 7.58119 6.4271 7.51572 6.73684 7.45961C7.04658 7.40349 7.42408 7.37544 7.86933 7.37544C8.87598 7.37544 9.79552 7.51572 10.628 7.79629C11.441 8.07686 12.1476 8.479 12.7477 9.00273C13.3285 9.54516 13.7834 10.2092 14.1125 10.9948C14.4223 11.7803 14.5771 12.6782 14.5771 13.6882C14.5771 14.5673 14.4223 15.3903 14.1125 16.1572C13.7834 16.9241 13.3188 17.5881 12.7187 18.1492C12.0992 18.7291 11.3442 19.178 10.4537 19.496C9.54386 19.8326 8.51785 20.001 7.37568 20.001C6.38839 20.001 5.44949 19.8139 4.55898 19.4398C3.64912 19.0845 2.8651 18.5701 2.2069 17.8967C1.52934 17.2234 0.996977 16.4097 0.6098 15.4558C0.203268 14.5206 0 13.4731 0 12.3134C0 10.7984 0.212948 9.42358 0.63884 8.18908C1.06473 6.97329 1.65517 5.86973 2.41016 4.87839C3.1458 3.90575 4.02662 3.0547 5.05263 2.32522C6.07865 1.59575 7.19177 0.969145 8.39202 0.445419L10.3376 2.213ZM27.7604 2.213C26.4634 2.94247 25.4664 3.73741 24.7695 4.59782C24.0532 5.45823 23.5596 6.47762 23.2886 7.656C23.5596 7.58119 23.85 7.51572 24.1597 7.45961C24.4694 7.40349 24.8469 7.37544 25.2922 7.37544C26.2989 7.37544 27.2184 7.51572 28.0508 7.79629C28.8639 8.07686 29.5705 8.479 30.1706 9.00273C30.7514 9.54516 31.2063 10.2092 31.5354 10.9948C31.8451 11.7803 32 12.6782 32 13.6882C32 14.5673 31.8451 15.3903 31.5354 16.1572C31.2063 16.9241 30.7417 17.5881 30.1416 18.1492C29.5221 18.7291 28.7671 19.178 27.8766 19.496C26.9667 19.8326 25.9407 20.001 24.7985 20.001C23.8113 20.001 22.8724 19.8139 21.9819 19.4398C21.072 19.0845 20.288 18.5701 19.6298 17.8967C18.9522 17.2234 18.4198 16.4097 18.0327 15.4558C17.6261 14.5206 17.4229 13.4731 17.4229 12.3134C17.4229 10.7984 17.6358 9.42358 18.0617 8.18908C18.4876 6.97329 19.078 5.86973 19.833 4.87839C20.5687 3.90575 21.4495 3.0547 22.4755 2.32522C23.5015 1.59575 24.6146 0.969145 25.8149 0.445419L27.7604 2.213Z"
                                                fill="#C0BBB5" />
                                          </svg>
                                       </i>
                                       <p>{{ customerreview.shortDec }}</p>
                                       <div class="tptestimonial-two-avatar-info">
                                          <h5 class="title">{{ customerreview.name }}</h5>
                                          <span>{{ customerreview.designation }}</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </slide>
                        </carousel>
                     </div>
                     <!-- <div class="tptestimonial-two-nav">
                        <button type="button" className="slick-prev" onClick={handlePrev}><span><i className="fa-regular fa-angle-up"></i></span></button>
                                <button type="button" className="slick-next" onClick={handleNext}><span><i className="fa-regular fa-angle-down"></i></span></button>
                     </div> -->
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
   name: 'Testimonials',
   data() {
      return {
         customerreviews: null,
      }
   },
   created: async function () {
      const response = await axios.get('https://evolvestrapi.pbwebvision.in/api/customerreview?populate=singleFeedbacks.media')
      const { data: { attributes } } = response.data;
      this.customerreviews = attributes
   },
}
</script>