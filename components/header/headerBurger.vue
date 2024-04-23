<template>
  <div class="burger" @click="toggleBurger(), openNavMenu()">
    <span class="burger-item"></span>
  </div>
</template>

<script>
export default {
  name: "headerBurger",
  props: {
    activeBurger: {
      type: Boolean,
    },
  },
  methods: {
    toggleBurger() {
      this.$emit("toggle-burger", true);
    },
    openNavMenu() {
      this.$emit("open-nav-menu", true);
    },
  },
};
</script>

<style scoped>
@media (min-width: 1px) and (max-width: 1058px) {
  .burger {
    display: flex;
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    width: 56px;
    height: 22px;
    margin-right: 4px;
    margin-top: 2px;
    cursor: pointer;
  }

  .burger-item {
    height: 2px;
    width: 80%;
    transform: scale(1);
    background-color: var(--c-white);
  }

  .burger:before,
  .burger:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 80%;
    background-color: var(--c-white);
    transition: all 0.3s ease 0s;
  }

  .burger:before {
    top: 0;
  }

  .burger:after {
    bottom: 0;
  }

  .burger.activeBurger .burger-item {
    transform: scale(0);
  }
}
</style>
