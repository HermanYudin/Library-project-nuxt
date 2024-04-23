<template>
  <nav class="menu">
    <ul class="menu-list" :class="{ activeMenu: activeActiveMenu }">
      <li
        v-for="(navLink, index) in navLinks"
        :key="index"
        class="menu-list-item"
      >
        <a
          class="menu-link"
          :href="`#${navLink.anchor}`"
          @click="closeNavMenu()"
          >{{ navLink.link }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "headerNav",
  props: {
    navLinks: {
      type: Array,
      default: () => [],
    },
    activeActiveMenu: {
      type: Boolean,
    },
  },
  methods: {
    closeNavMenu() {
      this.$emit("close-nav-menu");
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.menu-list {
  display: flex;
  list-style-type: none;
  font-size: 20px;
  font-family: var(--f-inter);
}

.menu-list-item {
  margin-right: 30px;
}

.menu-link {
  text-decoration: none;
  color: var(--c-white);
  transition: all;
  transition-duration: 0.8s;
}

.menu-link:hover {
  text-decoration: underline;
  color: var(--c-gold);
}

@media (min-width: 1px) and (max-width: 1058px) {
  .menu-list {
    flex-direction: column;
    position: absolute;
    z-index: 1;
    text-align: center;
    padding-left: 0;
    width: 331px;
    height: 580px;
    background-color: var(--c-black);
    top: -9px;
    right: 0px;
    margin-bottom: 0;
    margin-top: 0;
    transform: translateX(110%);
    transition: all 0.4s ease-in-out;
  }

  .menu-list.activeMenu {
    transform: translateX(0);
  }

  .menu-list-item {
    margin-right: 0;
    padding-bottom: 56px;
  }

  .menu-list-item:nth-child(1) {
    margin-top: 122px;
  }
}
</style>
