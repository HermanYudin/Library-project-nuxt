<template>
  <div>
    <h3 v-if="!isLoggedIn" class="profile-title">{{ userTitle }}</h3>
    <h3 v-else class="profile-title card">
      {{ cardNumber }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "headerUserTitle",
  props: {
    userTitle: {
      type: String,
    },
    isLoggedIn: {
      type: Boolean,
    },
    cardNumber: {
      type: String,
    },
  },
};
</script>

<style scoped>
.profile-title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5px 16px auto 16px;
  color: #000;
  font-family: var(--f-inter);
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}

.card {
  font-size: 12px;
}

.profile-title:after {
  content: "";
  display: block;
  width: 42px;
  height: 1px;
  background-color: var(--c-gold);
  margin: 0 auto;
  margin-top: 3px;
}
</style>
