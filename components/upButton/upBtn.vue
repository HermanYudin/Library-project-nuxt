<template>
  <a href="#Header"
    ><button class="up-btn">
      <img :src="upBtnImg" alt="UP" /></button
  ></a>
</template>

<script>
export default {
  name: "upBtn",
  props: {
    upBtnImg: {
      type: String,
    },
  },
};
</script>

<style scoped>
.up-btn {
  position: fixed;
  cursor: pointer;
  z-index: 10;
  right: 50px;
  bottom: 50px;
  background-color: var(--c-gold);
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  border: 1px solid var(--c-black);
  transition: all 0.2s ease-in-out;
}

.up-btn:hover {
  background-color: var(--c-white);
  border: 1px solid var(--c-gray);
}

.up-btn img {
  max-width: 40px;
}

@media (max-width: 500px) {
  .up-btn img {
    max-width: 25px;
  }
}

@media (min-width: 1550px) {
  .up-btn {
    right: 75px;
  }
}
</style>
