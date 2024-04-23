<template>
  <div>
    <headerUserImg
      @open-log-in="openLogIn"
      :profileIcon="profileIcon"
      :isLoggedIn="isLoggedIn"
      :iconInitials="iconInitials"
    />
    <div class="profile" :class="{ profileActive: isOpen }">
      <headerUserTitle
        userTitle="Profile"
        :isLoggedIn="isLoggedIn"
        :cardNumber="cardNumber"
      />
      <headerProfileList
        :logInNavs="logInNavs"
        :loggedInNavs="loggedInNavs"
        :isLoggedIn="isLoggedIn"
        @close-LogIn="closeLogIn"
        @open-popup="openPopUp"
        @open-popup-logged="openPopUpLogged"
      />
    </div>
  </div>
</template>

<script>
import headerUserTitle from "./headerUserTitle";
import headerUserImg from "./headerUserImg";
import headerProfileList from "./headerProfileList";

export default {
  name: "headerUser",
  components: {
    headerUserTitle,
    headerUserImg,
    headerProfileList,
  },
  data() {
    return {
      userTitle: "",
      isOpenOpen: this.isOpen,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
    },
    activeMenu: {
      type: Boolean,
    },
    profileIcon: {
      type: String,
    },
    logInNavs: {
      type: Array,
    },
    loggedInNavs: {
      type: Array,
    },
    isLoggedIn: {
      type: Boolean,
    },
    iconInitials: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
  },
  methods: {
    openLogIn(data) {
      this.$emit("open-log-in", data);
    },
    closeLogIn() {
      this.isOpenOpen = false;
    },
    openPopUp(data) {
      this.$emit("open-popup", data);
    },
    openPopUpLogged(data) {
      this.$emit("open-popup-logged", data);
    },
  },
  watch: {
    isOpen(newVal) {
      this.isOpenOpen = newVal;
    },
  },
};
</script>

<style scoped>
.profile {
  position: absolute;
  max-width: 80px;
  background-color: var(--c-white);
  right: 19px;
  top: 58px;
  opacity: 0;
  z-index: -1;
  transition: all 0.4s ease-in-out;
  pointer-events: none;
}

.profileActive {
  opacity: 1;
  z-index: 0;
  pointer-events: all;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .profile {
    right: 104px;
    top: 55px;
    position: absolute;
  }
}

@media (min-width: 1px) and (max-width: 477px) {
  .profile {
    right: 104px;
    top: 71px;
    position: absolute;
  }
}
</style>
