<template>
  <div class="copy-img-container" @click="copyText()">
    <img :src="copyImg" alt="copy" />
  </div>
</template>

<script>
export default {
  name: "copyCardNumber",
  props: {
    copyImg: {
      type: String,
    },
  },
  methods: {
    copyText() {
      this.$emit("copy-text");
    },
  },
};
</script>

<style scoped>
.copy-img-container {
  margin-left: 10px;
  cursor: pointer;
  max-width: 16px;
  max-height: 16px;
  transition: all 0.8s;
}

.copy-img-container:hover {
  background-color: var(--c-gold);
  border-radius: 5px;
}
</style>
