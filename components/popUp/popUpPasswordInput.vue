<template>
  <div>
    <input
      class="pop-up-password-input"
      type="password"
      list="defaultEmails"
      title="Пароль должен быть не короче 8 символов"
      @input="$emit('input', $event.target.value)"
      required
    />
  </div>
</template>

<script>
export default {
  name: "popUpPasswordInput",
  props: {
    passwordInput: {
      type: String,
    },
  },
};
</script>

<style scoped>
.pop-up-password-input {
  margin: 10px 0px;
  border: 1px solid var(--c-gold);
  outline: none;
  padding-left: 5px;
}
</style>
