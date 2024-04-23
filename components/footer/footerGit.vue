<template>
  <div class="footer-git">{{ textGit }}</div>
</template>

<script>
export default {
  name: "footerLine",
  props: {
    textGit: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
