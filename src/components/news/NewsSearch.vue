<template>
    <form @submit.prevent="handleSubmit">
      <input v-model="search">
      <button>Engage!</button>
    </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      search: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch(this.search);
    }
  }

};
</script>

<style>
form{
  margin: 20px;
}
button{
  border-radius: 4px;
}

</style>
