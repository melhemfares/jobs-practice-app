<template>
  <h1>View Jobs</h1>
  <div v-if="hasJobs" class="jobs">
    <JobCards v-for="job in jobs" :key="job._id" :job="job" />
  </div>
  <div v-else>
    <h3>You have no jobs. Create a job and it will appear here.</h3> 
  </div>
</template>

<script>
import JobCards from '@/components/JobCards.vue'
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      msg: ''
    }
  },
  components: {
    JobCards
  },
  created() {
    this.$store.dispatch('fetchJobs')
      .catch(error => {
        console.log('jobs could not be fetched');
      })
  },
  computed: {
    jobs() {
      return this.$store.state.jobs.jobs
    },
    hasJobs() {
      return this.$store.state.jobs.count > 0
    }
  }
}
</script>

<style scoped>
.jobs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>