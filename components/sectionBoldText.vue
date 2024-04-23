<template>
  <h3 class="section-bold-text">{{ sectionBoldText }}</h3>
</template>

<script>
export default {
  name: "sectionBoldText",
  props: {
    sectionBoldText: {
      type: String,
    },
  },
};
</script>

<style scoped>
.section-bold-text {
  font-size: 20px;
  font-family: var(--f-inter);
  font-weight: bold;
  letter-spacing: 0.2px;
}
</style>
