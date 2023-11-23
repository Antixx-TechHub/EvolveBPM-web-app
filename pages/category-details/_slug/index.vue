<template>
  <div>
    <Navbar />
        <PageTitle v-if="details !== null" :pageTitle="details[0].attributes.title" pageDesc="News and Insights" />
        <div v-if="details !== null">
      <CategoryDetails v-bind:detailsContent="category" />
      <Partner />
      <Footer />
    </div>

  </div>
</template>
  
<script>
import Navbar from '../../../layouts/Navbar'
import PageTitle from '../../../components/Common/PageTitle'
import CategoryDetails from '../../../components/Blogs/CategoriesDetails'
import Partner from '../../../components/Common/Partner'
import Footer from '../../../layouts/Footer'
import axios from 'axios';

export default {
  components: {
    Navbar,
    PageTitle,
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
        const reaponse = await axios.get(`https://evolvestrapi.pbwebvision.in/api/blog-categories?filters[slug][$eq]=${slug}&populate=deep,5`, { params: { slug } })
        this.category = reaponse.data.data.sort((b, a) => a.id - b.id);
        this.rows = this.category?.length;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>