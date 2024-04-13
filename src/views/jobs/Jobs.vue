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
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
        .then((response) => {
            return response.json();
        })
        .then((datas) => {
            this.jobs = datas;
        })
        .catch((err) => {
            console.log(err.message());
        });
    }
}
</script>

<style>
.jobs {
    color: crimson;
}
</style>