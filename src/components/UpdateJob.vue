<template>
<div class="form-container">

  <form @submit.prevent="onSubmit">
    <h3>Enter your new job description</h3>

    <label>Company</label><br>
    <input
      v-model="job.company"
      type="text"
      placeholder="Company"
    ><br>

    <label>Position</label><br>
    <input
      v-model="job.position"
      type="text"
      placeholder="Position"
    /><br>
    <button type="submit">Submit</button><br>
    <h4>{{ msg }}</h4>
  </form>
</div>
</template>

<script>

export default {
  data () {
    return {
      job: {
        company: '',
        position: '',
      },
      msg: ''
    }
  },
  methods: {
    onSubmit() {  
      const job = this.job
      const id = this.$store.state.job.job._id

      this.$store.dispatch('patchJob', {
        id: id,
        job: job
      })
        .then(() => {
          this.msg = this.$store.state.msg
          this.$router.push({
            name: 'view-jobs'
          })
        })
        .catch(error => {
          console.log(error);
          this.msg = this.$store.state.msg
        })
    }
  }
}
</script>

<style>
  input {
    margin: 10px;
  }
</style>