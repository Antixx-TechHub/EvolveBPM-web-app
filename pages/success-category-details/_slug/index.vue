<template>
  <div>
    <Navbar />
    <PageTitle pageTitle="Success Stories Categories" pageDesc="News and Insights" />
    <div v-if="category !== null">
      <SuccessCategoriesDetails v-bind:detailsContent="category" />
      <LetsGetToWork />
      <Footer />
    </div>

  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import SuccessCategoriesDetails from '../../../components/SuccessStories/SuccessCategoriesDetails'
import LetsGetToWork from '../../../components/Common/LetsGetToWork'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
    SuccessCategoriesDetails,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/successcategories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>