<template>
  <a class="article-tile" :href="article.url">
    <p class="title">{{ article.title }}</p>
    <p class="author">by {{ article.author }}</p>
    <p class="org">for {{ article.source.name }}</p>
  </a>
    
</template>

<script>
export default {
  props: {
    article: Object
  }
};
</script>

<style>
.article-tile {
  text-decoration: none;
  color: black;
  list-style: none;
  border: 1px solid grey;
  padding: 10px;
  border-radius: 4px;
}
.article-tile:hover{
  box-shadow: 3px 2px 2px darkgray;
}

</style>
