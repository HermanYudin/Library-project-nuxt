<template>
  <input
    class="library-cards-input"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    required
  />
</template>

<script>
export default {
  name: "libraryCardsInput",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style scoped>
.library-cards-input {
  margin-top: 27px;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 17px;
  width: 102%;
  border-radius: 10px;
  font-size: 30px;
  font-family: var(--f-forum);
  font-weight: normal;
  letter-spacing: 0.5px;
  border: none;
  outline: none;
  color: var(--c-gold);
}
</style>
