<template>
  <div class="popup-container" @click="closeModal()"></div>
</template>

<script>
export default {
  name: "popUpContainer",
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style scoped>
.popup-container {
  width: 100%;
  height: 100%;
  background-color: var(--c-gray);
  z-index: -1;
  position: absolute;
  display: none;
  opacity: 0.3;
}
</style>
