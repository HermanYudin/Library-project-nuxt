<template>
  <h2 class="section-title">{{ sectionTitle }}</h2>
</template>

<script>
export default {
  name: "sectionTitle",
  props: {
    sectionTitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
.section-title {
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-family: var(--f-forum);
  font-weight: normal;
  letter-spacing: 2px;
}

.section-title:after {
  content: "";
  display: block;
  width: 50px;
  height: 1px;
  background-color: var(--c-black);
  margin: 0 auto;
  margin-top: 15px;
}
</style>
