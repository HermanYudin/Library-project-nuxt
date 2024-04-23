<template>
  <div>
    <span class="pop-up-answer" @click="changeModal()">{{ answer }}</span>
  </div>
</template>

<script>
export default {
  name: "popUpAnswer",
  props: {
    answer: {
      type: String,
    },
  },
  methods: {
    changeModal() {
      this.$emit("change-modal");
    },
  },
};
</script>

<style scoped>
.pop-up-answer {
  font-weight: bold;
  font-size: 10px;
  font-family: var(--f-inter);
  margin-left: 7px;
  letter-spacing: 1.4px;
  color: black;
  text-decoration: underline;
  transition: all;
  transition-duration: 0.5s;
}

.pop-up-answer:hover {
  color: var(--c-gold);
  cursor: pointer;
}
</style>
