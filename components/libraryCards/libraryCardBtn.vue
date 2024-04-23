<template>
  <button @click="checkCard()" class="library-card-btn">
    {{ libraryBtnTitle }}
  </button>
</template>

<script>
export default {
  name: "libraryCardBtn",
  props: {
    libraryBtnTitle: {
      type: String,
    },
  },
  methods: {
    checkCard() {
      this.$emit("check-card");
    },
  },
};
</script>

<style scoped>
.library-card-btn {
  margin: 0 auto;
  display: block;
  max-width: 243px;
  padding: 8px 40px;
  font-size: 20px;
  font-family: var(--f-inter);
  font-weight: bold;
  background-color: var(--c-white);
  letter-spacing: 1px;
  border: 1px solid var(--c-black);
  transition: all;
  transition-duration: 0.8s;
  position: absolute;
  bottom: 29px;
  left: 15%;
  right: 15%;
  cursor: pointer;
}

.library-card-btn:hover {
  background-color: var(--c-gold);
  border: none;
  cursor: pointer;
  border: 1px solid var(--c-gold);
}

@media (min-width: 1px) and (max-width: 1058px) {
  .library-card-btn {
    bottom: 29px;
  }

  @media (max-width: 460px) {
    .library-card-btn {
      font-size: 15px;
    }
  }
}
</style>
