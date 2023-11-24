<template>
   <div class="faq-area pt-115 pb-15">
      <div class="container">
         <div class="row">
            <div class="col-lg-6">
               <div class="tp-faq-wrapper mb-80">
                  <div class="tpsection-wrapper mb-25">
                     <h2 class="tpsection-title-two mb-40">Frequently<br> Asked
                        <span>
                           Questions
                           <svg width="306" height="31" viewBox="0 0 306 31" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.89242 18.9903C2.89242 18.9903 192.778 -5.15589 299.226 12.3064" stroke="#FFCE5A"
                                 stroke-width="5" stroke-linecap="round"></path>
                              <path d="M3.2201 14.9796C3.2201 14.9796 196.633 -0.186388 302.688 21.9968" stroke="#FFCE5A"
                                 stroke-width="5" stroke-linecap="round"></path>
                           </svg>
                        </span>
                     </h2>
                     <p>Can’t find what you are looking for?</p>
                     <b>We would like to chat with you.</b>
                  </div>
                  <div class="tp-faq-img p-relative">
                     <span>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path opacity="0.4"
                              d="M29.6447 26.693L30.3466 32.3807C30.5266 33.8746 28.9247 34.9186 27.6467 34.1446L20.105 29.6628C19.2771 29.6628 18.4671 29.6088 17.6752 29.5008C19.0071 27.9349 19.7991 25.9549 19.7991 23.813C19.7991 18.7012 15.3712 14.5615 9.89945 14.5615C7.81153 14.5615 5.88562 15.1554 4.28368 16.1994C4.22968 15.7494 4.21167 15.2994 4.21167 14.8314C4.21167 6.64172 11.3214 0 20.105 0C28.8887 0 35.9984 6.64172 35.9984 14.8314C35.9984 19.6912 33.4965 23.9931 29.6447 26.693Z"
                              fill="white" />
                           <path
                              d="M19.7992 23.8126C19.7992 25.9545 19.0073 27.9345 17.6753 29.5004C15.8934 31.6603 13.0675 33.0462 9.89961 33.0462L5.20179 35.8361C4.40982 36.3221 3.40186 35.6561 3.50985 34.7382L3.95984 31.1924C1.54793 29.5184 0 26.8365 0 23.8126C0 20.6447 1.69194 17.8549 4.28384 16.1989C5.88577 15.155 7.81169 14.561 9.89961 14.561C15.3714 14.561 19.7992 18.7008 19.7992 23.8126Z"
                              fill="white" />
                        </svg>
                     </span>
                     <!-- <img src="assets/img/shape/faq-shape-1.png" alt=""> -->
                     <div class="tp-faq-shape">
                        <img src="../../assets/img/shape/faq-shape-2.png" alt="">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="tp-accordion tp-green-accordion">
                  <div class="accordion mb-35" id="accordionExample">
                     <div class="accordion-item" v-for="item in faq_data_one" :key="item.id">
                        <h2 class="accordion-header" id="headingOne">
                           <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" :id="item.id"
                              :aria-labelledby="item.aria_labelledby" :aria-expanded="item.aria_expanded"
                              :class="{ collapsed: item.collapsed, active: item.active }"
                              @click="toggleAccordion(item.id)">
                              {{ item.ques }}
                           </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingThree"
                           data-bs-parent="#accordionExample" v-if="!item.collapsed" :class="{ show: item.active }">
                           <div class="accordion-body">
                              {{ item.ans }}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="tp-accordion-btn">
                     <nuxt-link to="/faqs">Load More Questions <i class="fa-light fa-arrow-right"></i></nuxt-link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>

export default {
   name: 'Faq',
   data() {
      return {
         faq_data_one: [
            {
               id: "One",
               aria_labelledby: "Three",
               aria_expanded: "false",
               collapsed: "collapsed",
               active: "",
               ques: "Why Is SEO Important?",
               ans:
                  "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
            },
            {
               id: "Two",
               aria_labelledby: "Two",
               aria_expanded: "false",
               collapsed: "collapsed",
               active: "",
               ques: "Why Is SEO Important For Small Business?",
               ans:
                  "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
            },
            {
               id: "Three",
               aria_labelledby: "Three",
               aria_expanded: "true",
               collapsed: "",
               active: "show",
               ques: "How do I choose the best SEO Agency?",
               ans:
                  "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
            },
            {
               id: "Four",
               aria_labelledby: "Four",
               aria_expanded: "false",
               collapsed: "collapsed",
               active: "",
               ques: "How do SEO Agencies work?",
               ans:
                  "Choosing the best SEO Agency means research, research and more research. Checking through reviews, team credentials, and getting proposals and audits.",
            },
         ],
      };
   },
   methods: {
      toggleAccordion(id) {
         this.faq_data_one.forEach((item) => {
            if (item.id === id) {
               item.collapsed = !item.collapsed;
               item.active = item.collapsed ? "" : "show";
            } else {
               item.collapsed = "collapsed";
               item.active = "";
            }
         });
      },
   },

}
</script>