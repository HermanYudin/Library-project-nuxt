<template>
  <div class="radio">
    <ul class="radio-btns">
      <li
        class="radio-btn"
        v-for="(radio, index) in radios"
        :key="index"
        @click="setRadio(radio), setActiveCard()"
        :class="{ 'active-radio': activeRadio === radio }"
      >
        {{ radio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "radio",
  data() {
    return {
      activeRadio: "Winter",
    };
  },
  props: {
    radios: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setRadio(radio) {
      this.activeRadio = radio;
    },
    setActiveCard() {
      this.$emit("set-active-cards", this.activeRadio);
    },
  },
};
</script>

<style scoped>
.radio-btns {
  display: flex;
  flex-wrap: wrap;
  margin-top: 41px;
  margin-left: 20px;
  list-style-type: none;
  gap: 86px;
  padding: 0;
}

.radio-btn {
  font-size: 20px;
  font-family: var(--f-inter);
  cursor: pointer;
}

.radio-btn::before {
  content: "";
  background: url("~@/png/radio2.png");
  display: inline-block;
  width: 17px;
  height: 17px;
  background-repeat: no-repeat;
  margin-right: 20px;
  vertical-align: middle;
  margin-bottom: 3px;
}

.radio-btn.active-radio::before {
  background: url("~@/png/radio.png");
}

.radio-btn:hover {
  color: var(--c-gold);
}

.radio-btns .active-radio {
  font-weight: bold;
}

@media (min-width: 1px) and (max-width: 740px) {
  .radio-btns {
    display: block;
  }
}
</style>
