<template>
  <div>
    <span class="pop-up-question">{{ question }}</span>
  </div>
</template>

<script>
export default {
  name: "popUpQuestion",
  props: {
    question: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-question {
  font-weight: normal;
  font-size: 10px;
  font-family: var(--f-inter);
}
</style>
