<template>
  <div>
    <Navbar class="navbar-style-two" />
    <PageTitle pageTitle="Success Story Category" pageDesc="" />
    <div v-if="successcategory !== null">
      <CategoryDetails v-bind:detailsContent="successcategory" />
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar';
import PageTitle from '../../../components/Common/PageTitle';
import CategoryDetails from '../../../components/categories/success-story-categories-details'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    CategoryDetails,
    Footer,
  },
  data() {
    return {
      successcategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
    console.log("I am don")
  },
  methods: {
    async fetchCategories() {
      try {
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://cms.dealdox.io/api/successcategories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.successcategory = reaponse.data.data
        console.log("this.successcategories....", this.successcategory);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>