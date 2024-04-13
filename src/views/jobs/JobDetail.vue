<template>
  <h1>Job detail {{ id }}</h1>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$route.params.id
    }
  },
  props: ['id']
}
</script>

<style>

</style>