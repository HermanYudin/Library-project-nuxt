<template>
  <div class="footerSocial-container">
    <ul class="social-list">
      <li class="social-item" v-for="(social, index) in socials" :key="index">
        <a class="social-link" :href="social.link">
          <img class="social-img" :src="social.img" alt="social-img" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerMain",
  props: {
    socials: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.footerSocial-container {
  display: flex;
}

.social-list {
  display: flex;
  list-style-type: none;
  gap: 15px;
  margin-top: 18px;
  padding-left: 1px;
}

.social-img {
  transition: all 0.2s ease-in-out;
}

.social-img:hover {
  background: var(--c-gold);
  border-radius: 20px;
}
</style>
