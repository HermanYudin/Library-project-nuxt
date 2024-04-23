<template>
  <div>
    <sectionTitle sectionTitle="About" />
    <sectionText
      sectionText="The Brooklyn Library is a free workspace, a
        large number of books and a cozy coffee shop inside"
    />
    <slider />
  </div>
</template>

<script>
import sectionTitle from "/components/sectionTitle";
import sectionText from "/components/sectionText";
import slider from "/components/about/slider";

export default {
  name: "aboutMain",
  components: {
    sectionTitle,
    sectionText,
    slider,
  },
};
</script>

<style scoped></style>
