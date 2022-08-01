<template>
  <div v-if="job">
    <h1>{{ job.position }}</h1>
    <h3>From: {{ job.company }}</h3>
    <p>Created at: {{ job.createdAt.slice(0,10) }}</p>
  </div>
  <button @click="removeJob">Delete</button>
  <button @click="toggleUpdate">Edit</button><br>
  <h4>{{ msg }}</h4>
  <div v-if="updateMenu">
    <UpdateJob />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import UpdateJob from '@/components/UpdateJob.vue'

export default {
  props: ['id'],
  data() {
    return {
      msg: '',
      updateMenu: false
    }
  },
  components: {
    UpdateJob
  },
  created() {
    this.$store.dispatch('fetchJob', this.id)
    .catch(error => {
        console.log(error);
    })
  },
  computed: {
    job() {
      return this.$store.state.job.job
    }
  },
  methods: {
    toggleUpdate() {
      this.updateMenu = !this.updateMenu
    },
    removeJob() {
      return EventService.deleteJob(this.job._id)
        .then(() => {
          console.log(this.job);
          this.msg = 'Successfully deleted job'
          this.$router.push({
            name: 'view-jobs'
          })
        })
        .catch(error => {
          console.log(error)
          this.msg = 'Something went wrong somehow'
        })
    }
  }
}
</script>

<style>
  button {
    margin: 10px;
  }
</style>