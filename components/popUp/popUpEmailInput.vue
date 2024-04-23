<template>
  <div>
    <input
      class="pop-up-email-input"
      type="email"
      list="defaultEmails"
      title="Заполните это поле"
      @input="$emit('input', $event.target.value)"
      required
    />
  </div>
</template>

<script>
export default {
  name: "popUpEmailInput",
  props: {
    emailInput: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-email-input {
  margin: 10px 0px;
  border: 1px solid var(--c-gold);
  outline: none;
  padding-left: 5px;
}
</style>
