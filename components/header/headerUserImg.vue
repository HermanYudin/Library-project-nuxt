<template>
  <div>
    <img
      v-if="!isLoggedIn"
      class="profile-icon"
      :src="profileIcon"
      alt="icon"
      @click="openLogIn()"
    />
    <span v-else class="profile-logged-icon" @click="openLogIn()">{{
      iconInitials.toUpperCase()
    }}</span>
  </div>
</template>

<script>
export default {
  name: "headerUserImg",
  props: {
    profileIcon: {
      type: String,
    },
    isLoggedIn: {
      type: Boolean,
    },
    iconInitials: {
      type: String,
    },
  },
  methods: {
    openLogIn() {
      this.$emit("open-log-in", true);
    },
  },
};
</script>

<style scoped>
.profile-icon {
  margin-right: 20px;
  cursor: pointer;
}

.profile-logged-icon {
  color: var(--c-gold);
  background-color: var(--c-white);
  font-family: var(--f-inter);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border-radius: 50%;
  min-width: 28px;
  min-height: 28px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 5px;
  margin-right: 20px;
  cursor: pointer;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .profile-icon,
  .profile-logged-icon {
    margin-right: 35px;
    margin-top: 4px;
    z-index: 1;
    position: relative;
  }
}
</style>
