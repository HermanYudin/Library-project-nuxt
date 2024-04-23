<template>
  <div class="modal-profile-tittle">
    <p>{{ profileTitle }}</p>
  </div>
</template>

<script>
export default {
  name: "modalProfileTitle",
  props: {
    profileTitle: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modal-profile-tittle {
  display: flex;
  justify-content: start;
  align-items: start;
  margin-left: 20px;
  color: var(--c-black);
  text-align: center;
  font-family: var(--f-forum);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-bottom: 0px;
}
</style>
