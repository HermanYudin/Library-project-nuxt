<template>
  <div class="header-title-container">
    <h1 class="header-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Brooklyn Public Library",
    };
  },
};
</script>

<style scoped>
.header-title {
  font-family: var(--f-forum);
  color: var(--c-white);
  margin-left: 20px;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 1.5px;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .header-title {
    margin-top: 23px;
  }
}
</style>
