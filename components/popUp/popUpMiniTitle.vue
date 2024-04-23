<template>
  <div>
    <span class="pop-up-mini-title">
      {{ modalMiniTitle }}
    </span>
  </div>
</template>

<script>
export default {
  name: "popUpMiniTitle",
  props: {
    modalMiniTitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-mini-title {
  letter-spacing: 0.4px;
  font-family: var(--f-inter);
  font-size: 15px;
}
</style>
