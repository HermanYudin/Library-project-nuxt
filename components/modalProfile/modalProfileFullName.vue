<template>
  <div class="modal-profile-fullname">
    <p class="modal-profile-fullname-text">{{ fullName.toUpperCase() }}</p>
  </div>
</template>

<script>
export default {
  name: "modalProfileFullname",
  props: {
    fullName: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modal-profile-fullname {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  min-height: 30px;
  background-color: var(--c-white);
  margin: 15px auto 0px auto;
  flex-wrap: wrap;
}

.modal-profile-fullname-text {
  color: var(--c-black);
  font-family: var(--f-inter);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
}
</style>
