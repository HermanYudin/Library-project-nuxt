<template>
  <h2 class="section-text-forum">{{ sectionTextForum }}</h2>
</template>

<script>
export default {
  name: "sectionTextForum",
  props: {
    sectionTextForum: {
      type: String,
    },
  },
};
</script>

<style scoped>
.section-text-forum {
  font-size: 30px;
  font-family: var(--f-forum);
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 0;
  letter-spacing: 0.5px;
}
</style>
