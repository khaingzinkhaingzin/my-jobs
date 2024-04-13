<template>
  <h1>Jobs</h1>
  <div class="jobs" v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'jobDetail', params: {id: job.id}}">
        <h1>{{ job.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {
                   id: "1", 
                   title: "project manager",
                   detail: "project manger detail" 
                },
                {
                   id: "2", 
                   title: "developer",
                   detail: "developer detail" 
                },
                {
                   id: "3", 
                   title: "designer",
                   detail: "designer detail" 
                }
            ]
        }
    }
}
</script>

<style>
.jobs {
    color: crimson;
}
</style>