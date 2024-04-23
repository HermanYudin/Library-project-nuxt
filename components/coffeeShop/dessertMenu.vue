<template>
  <div class="dessert-item">
    <div class="name-item">
      <ul class="dessert-list">
        <li
          class="dessert-name"
          v-for="(dessert, index) in desserts"
          :key="index"
        >
          {{ dessert.name }}
        </li>
      </ul>
    </div>
    <div class="line-item">
      <ul class="dessert-lines">
        <li
          class="dessert-lines-li"
          v-for="(dessert, index) in desserts"
          :key="index"
        >
          <div class="dessert-line"></div>
        </li>
      </ul>
    </div>
    <div class="price-item">
      <ul class="dessert-list">
        <li
          class="dessert-name"
          v-for="(dessert, index) in desserts"
          :key="index"
        >
          {{ dessert.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dessertMenu",
  props: {
    desserts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.dessert-list {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
}

.dessert-item {
  display: flex;
  margin-right: 16px;
}

.dessert-name {
  font-family: var(--f-inter);
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 2px;
  list-style-type: none;
  margin-top: 20px;
}

.dessert-name:nth-child(n + 2) {
  margin-top: 56px;
}

.dessert-lines-li {
  list-style-type: none;
}

.dessert-lines {
  padding-right: 23px;
}

.dessert-line {
  background-color: var(--c-gold);
  height: 1px;
  width: 100px;
  display: block;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 47px;
}

.dessert-lines-li:nth-child(n + 2) {
  margin-top: 79px;
}

@media (max-width: 800px) {
  .dessert-item {
    width: 90%;
    margin-left: 20px;
  }

  .dessert-name {
    font-size: 15px;
  }
}

@media (max-width: 390px) {
  .dessert-line {
    width: 50px;
  }
}
</style>
