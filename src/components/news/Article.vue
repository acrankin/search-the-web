<template>
  <li>
    {{ article.title }}
    <!-- <p>{{ article.title }}</p> -->
  </li>
    
</template>

<script>
export default {
  props: {
    article: Object
  }
};
</script>

<style>

</style>
