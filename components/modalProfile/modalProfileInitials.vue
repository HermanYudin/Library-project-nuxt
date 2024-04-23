<template>
  <div class="modal-profile-initials">
    <p class="modal-profile-initials-text">{{ iconInitials.toUpperCase() }}</p>
  </div>
</template>

<script>
export default {
  name: "modalProfileInitials",
  props: {
    iconInitials: {
      type: String,
    },
  },
};
</script>

<style scoped>
.modal-profile-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: var(--c-white);
  margin: 139px auto 0px auto;
}

.modal-profile-initials-text {
  color: var(--c-gold);
  text-align: center;
  font-family: var(--f-inter);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 100% */
  text-transform: capitalize;
}
</style>
