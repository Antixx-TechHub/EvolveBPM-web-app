<!-- <template>
  <div>
    <NavbarTwo />
    <div class="breadcrumb-area breadcrumb-overlay p-relative pb-115 pt-195 jarallax" :style="bannerStyle">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="breadcrumb__content breadcrumb__content-2 text-center p-relative z-index-1">
              <h3 class="breadcrumb__title">Case Studies Categories</h3>
              <div class="breadcrumb__list">
                <span><a href="index.html">Home</a></span>
                <span class="dvdr"></span>
                <span>Case Studies Categories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inner-shape-dots">
        <img src="../../../assets/img/shape/inner-dots-shape.png" alt="">
      </div>
    </div>
    <div v-if="category !== null">
      <CategoryDetails v-bind:detailsContent="category" />
      <Partner />
      <Footer />
    </div>

  </div>
</template>
  
<script>
import NavbarTwo from '../../../layouts/NavbarTwo';
import CategoryDetails from '../../../components/CaseStudies/Case-Study-Categories-Details'
import Partner from '../../../components/Common/Partner'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    NavbarTwo,
    CategoryDetails,
    Partner,
    Footer
  },
  data() {
    return {
      category: null,
      bannerStyle: {
        backgroundImage: `url(${require('../../../assets/img/breadcrumb/breadcrumb-bg-1.jpg')})`
      }
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/case-study-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script> -->



<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Case Study Categories" pageDesc="News and Insights" />
    <div v-if="category !== null">
      <CaseStudyCategoriesDetails v-bind:detailsContent="category" />
      <LetsGetToWork />
      <Footer />
    </div>

  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import CaseStudyCategoriesDetails from '../../../components/CaseStudies/CaseStudyCategoriesDetails'
import LetsGetToWork from '../../../components/Common/LetsGetToWork'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    CaseStudyCategoriesDetails,
    LetsGetToWork,
    Footer
  },
  data() {
    return {
      category: null,
      bannerStyle: {
        backgroundImage: `url(${require('../../../assets/img/breadcrumb/breadcrumb-bg-1.jpg')})`
      }
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/case-study-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>