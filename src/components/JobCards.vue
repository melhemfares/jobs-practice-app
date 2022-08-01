<template>
  <router-link
    class="job-link"
    :to="{ name: 'job-details', params: { id: job._id } }"
  >

    <div class="job-card">
      <h4>{{ job.company }}</h4>
      <span>{{ job.position }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job-card {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.job-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.job-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
