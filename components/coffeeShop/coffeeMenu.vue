<template>
  <div class="coffee-item">
    <div class="name-item">
      <ul class="coffee-list">
        <li class="coffee-name" v-for="(coffee, index) in coffees" :key="index">
          {{ coffee.name }}
        </li>
      </ul>
    </div>
    <div class="line-item">
      <ul class="coffee-lines">
        <li
          class="coffee-lines-li"
          v-for="(coffee, index) in coffees"
          :key="index"
        >
          <div class="coffee-line"></div>
        </li>
      </ul>
    </div>
    <div class="price-item">
      <ul class="coffee-list">
        <li class="coffee-name" v-for="(coffee, index) in coffees" :key="index">
          {{ coffee.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "coffeeMenu",
  props: {
    coffees: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.coffee-list {
  padding-left: 21px;
}

.coffee-item {
  display: flex;
}

.coffee-name {
  font-family: var(--f-inter);
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 2px;
  list-style-type: none;
  margin-top: 46px;
}

.coffee-name:nth-child(n + 2) {
  margin-top: 56px;
}

.coffee-lines-li {
  list-style-type: none;
}

.coffee-line {
  background-color: var(--c-gold);
  height: 1px;
  width: 100px;
  display: block;
  margin-left: 18px;
  margin-right: 33px;
  margin-top: 57px;
}

.coffee-lines-li:nth-child(n + 2) {
  margin-top: 79px;
}

@media (max-width: 800px) {
  .coffee-item {
    width: 95%;
  }

  .coffee-name {
    font-size: 15px;
  }
}

@media (max-width: 390px) {
  .coffee-line {
    width: 50px;
  }
}
</style>
