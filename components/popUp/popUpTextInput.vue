<template>
  <input
    class="pop-up-text-input"
    type="text"
    required
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "popUpTextInput",
  props: {
    firstNameInput: {
      type: String,
    },
    secondNameInput: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-text-input {
  margin: 10px 0px;
  border: 1px solid var(--c-gold);
  outline: none;
  padding-left: 5px;
}
</style>
