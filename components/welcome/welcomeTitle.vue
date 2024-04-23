<template>
  <div class="welcome-block">
    <h2 class="welcome-title" v-html="welcomeTitle"></h2>
  </div>
</template>

<script>
export default {
  name: "welcomeTitle",
  data() {
    return {
      welcomeTitle: "Welcome<br />to the Brooklyn<br />Library",
    };
  },
};
</script>

<style scoped>
.welcome-block {
  padding-top: 197px;
  padding-bottom: 129px;
}

.welcome-title {
  color: var(--c-white);
  font-size: 40px;
  font-family: "forum";
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  max-width: 600px;
  background-color: var(--c-black);
  line-height: 50px;
  padding: 29px 40px;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .welcome-block {
    padding-top: 193px;
    padding-bottom: 120px;
  }

  .welcome-title {
    padding: 34px 40px;
    padding-top: 30px;
  }
}
</style>
