<template>
  <div>
    <ul v-if="!isLoggedIn" class="profile-list">
      <li
        class="profile-item"
        v-for="(logInNav, index) in logInNavs"
        :key="index"
        @click="closeLogIn(), openPopUp(logInNav)"
      >
        {{ logInNav }}
      </li>
    </ul>
    <ul v-else class="profile-list">
      <li
        class="profile-item"
        v-for="(loggedInNav, index) in loggedInNavs"
        :key="index"
        @click="closeLogIn(), openPopUpLogged(loggedInNav)"
      >
        {{ loggedInNav }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "headerProfileList",
  data() {
    return {
      getLogInNav: "",
      getLoggedInNav: "",
    };
  },
  props: {
    logInNavs: {
      type: Array,
      required: true,
    },
    loggedInNavs: {
      type: Array,
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeLogIn() {
      this.$emit("close-LogIn");
    },
    openPopUp(logInNav) {
      this.getLogInNav = logInNav;
      this.$emit("open-popup", this.getLogInNav);
    },
    openPopUpLogged(loggedInNav) {
      this.getLoggedInNav = loggedInNav;
      this.$emit("open-popup-logged", this.getLoggedInNav);
    },
  },
};
</script>

<style scoped>
.profile-list {
  padding-left: 0;
}

.profile-item {
  list-style-type: none;
  color: var(--c-black);
  text-decoration: none;
  font-family: var(--f-inter);
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.profile-item:nth-child(2) {
  margin-top: 10px;
}

.profile-item:hover {
  color: var(--c-gold);
  cursor: pointer;
}
</style>
