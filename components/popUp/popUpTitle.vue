<template>
  <div>
    <h3 class="pop-up-title">
      {{ modalTitle }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "popUpTitle",
  props: {
    modalTitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-title {
  text-align: center;
  font-size: 20px;
  font-family: var(--f-forum);
  font-weight: normal;
}
</style>
