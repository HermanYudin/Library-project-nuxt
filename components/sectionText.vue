<template>
  <h2 class="section-text">{{ sectionText }}</h2>
</template>

<script>
export default {
  name: "sectionText",
  props: {
    sectionText: {
      type: String,
    },
  },
};
</script>

<style scoped>
.section-text {
  text-align: center;
  margin-top: 49px;
  font-size: 20px;
  font-family: var(--f-inter);
  font-weight: 400;
  margin-bottom: 27px;
}
</style>
