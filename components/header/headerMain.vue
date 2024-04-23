<template>
  <div class="header-main-container">
    <headerTitle />
    <div class="navAndIcon">
      <headerNav
        class="headerNav"
        :navLinks="navLinks"
        :activeActiveMenu="activeActiveMenu"
        @close-nav-menu="closeNavMenu"
      />
      <headerUser
        :isOpen="isOpenOpen"
        :profileIcon="profileIcon"
        :logInNavs="logInNavs"
        :loggedInNavs="loggedInNavs"
        :isLoggedIn="isLoggedIn"
        :iconInitials="iconInitials"
        :cardNumber="cardNumber"
        @open-log-in="openLogIn"
        @open-popup="openPopUp"
        @open-popup-logged="openPopUpLogged"
      />
      <headerBurger
        class="burger"
        @open-nav-menu="openNavMenu"
        @toggle-burger="toggleBurger"
        :class="{ activeBurger: activeBurger }"
      />
    </div>
  </div>
</template>

<script>
import headerTitle from "../header/headerTitle.vue";
import headerNav from "../header/headerNav.vue";
import headerUser from "../header/headerUser.vue";
import headerBurger from "../header/headerBurger.vue";

export default {
  name: "headerMain",
  components: {
    headerTitle,
    headerNav,
    headerUser,
    headerBurger,
  },
  props: {
    isOpen: {
      type: Boolean,
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
    activeMenu: {
      type: Boolean,
    },
  },
  data() {
    return {
      logInNavs: ["Log In", "Register"],
      loggedInNavs: ["My Profile", "Log Out"],
      activeBurger: false,
      activeActiveMenu: this.activeMenu,
      isOpenOpen: this.isOpen,
      navLinks: [
        {
          link: "About",
          anchor: "About",
        },
        {
          link: "Favorites",
          anchor: "Favorites",
        },
        {
          link: "Coffee Shop",
          anchor: "CoffeeShop",
        },
        {
          link: "Contacts",
          anchor: "Contacts",
        },
        {
          link: "Library Card",
          anchor: "LibraryCard",
        },
      ],
      profileIcon: require("/svg/icon.svg"),
    };
  },
  mounted() {
    document.addEventListener("click", this.closeMenuIfClickedOutside);
  },
  methods: {
    openLogIn(data) {
      if (this.isOpenOpen === false) {
        this.isOpenOpen = data;
        this.activeBurger = false;
        this.activeActiveMenu = false;
      } else {
        this.isOpenOpen = false;
      }
    },
    openNavMenu(data) {
      if (this.activeActiveMenu === false) {
        this.activeActiveMenu = data;
      } else {
        this.activeActiveMenu = false;
      }
    },
    toggleBurger(data) {
      if (this.activeBurger === false) {
        this.activeBurger = data;
        this.isOpenOpen = false;
      } else {
        this.activeBurger = false;
      }
    },
    openPopUp(data) {
      this.$emit("open-popup", data);
    },
    openPopUpLogged(data) {
      this.$emit("open-popup-logged", data);
    },
    closeNavMenu() {
      this.activeBurger = false;
      this.activeActiveMenu = false;
    },
    closeMenuIfClickedOutside(event) {
      if (this.isOpenOpen && event.target.closest(".navAndIcon") === null) {
        this.isOpenOpen = false;
      } else if (
        this.activeBurger &&
        event.target.closest(".navAndIcon") === null
      ) {
        this.activeBurger = false;
        this.activeActiveMenu = false;
      }
    },
  },
  watch: {
    isOpen(newVal) {
      this.isOpenOpen = newVal;
    },
    activeMenu(newVal) {
      this.activeActiveMenu = newVal;
    },
  },
};
</script>

<style scoped>
.header-main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--c-black);
  padding-top: 10px;
  position: relative;
  padding-bottom: 10px;
  z-index: 0;
}

.navAndIcon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger.activeBurger::before {
  top: 11px;
  transform: rotate(-45.1deg) translate(0, -50%);
  margin-right: 5px;
  width: 81%;
}

.burger.activeBurger::after {
  bottom: 9px;
  transform: rotate(45deg) translate(0, 5%);
  margin-right: 6px;
  width: 80%;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .header-main-container {
    position: relative;
    padding-top: 7px;
  }

  .navAndIcon {
    margin-right: 9px;
    margin-top: -5px;
  }

  .activeMenu {
    background-color: aquamarine;
  }
}
</style>
