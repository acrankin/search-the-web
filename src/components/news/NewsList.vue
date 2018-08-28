<template>
    <section class="articles">
      <p> Hello Newslist </p>

      <NewsSearch :onSearch="handleSearch"/>

      <div class="search-container">
        <ul v-if="articles">
          <!-- <Article v-for="article in articles"
            :key="article." -->
        </ul>
      </div>
    </section>
</template>

<script>
import api from '../../services/api.js';
import Article from './Article';
import NewsSearch from './NewsSearch';

export default {
  data() {
    

  },
  components: {
    Article,
    NewsSearch
  },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchNews();
    },
    searchNews() {
      //loading, error, etc.
      api.getNews(this.search)
        .then(response => {
          console.log(this.articles);
          this.articles = response.articles;
          this.count = response.totalResults;

        });
    }
  }
    

};
</script>

<style>

</style>
