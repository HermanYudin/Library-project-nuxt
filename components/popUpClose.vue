<template>
  <div>
    <img
      class="pop-up-close"
      :src="closeModalImg"
      alt="pop-up-close"
      @click="closeModal()"
    />
  </div>
</template>

<script>
export default {
  name: "popUpClose",
  props: {
    closeModalImg: {
      type: String,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", false);
    },
  },
};
</script>

<style scoped>
.pop-up-close {
  position: absolute;
  top: 15px;
  right: 7px;
  transition: all;
  transition-duration: 0.4s;
  cursor: pointer;
}

.pop-up-close:hover {
  background-color: var(--c-gold);
  border-radius: 5px;
}
</style>
