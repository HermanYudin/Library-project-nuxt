<template>
  <div class="modal-profile-counters-container">
    <div class="modal-profile-titles">
      <ul class="modal-profile-card-titles">
        <li
          v-for="(counter, index) in counters"
          :key="index"
          class="modal-profile-card-title"
        >
          {{ counter.title }}
        </li>
      </ul>
    </div>
    <div class="modal-profile-images">
      <ul class="modal-profile-card-images" :style="imgsCustomStyle">
        <li
          v-for="(counter, index) in counters"
          :key="index"
          class="modal-profile-card-image"
          :style="imgCustomStyle"
        >
          <img :src="counter.image" alt="image" />
        </li>
      </ul>
    </div>
    <div class="modal-profile-counters">
      <ul class="modal-profile-card-counters" :style="countersCustomStyle">
        <li
          v-for="(counter, index) in counters"
          :key="index"
          class="modal-profile-card-counter"
          :style="counterCustomStyle"
        >
          {{ index === 0 ? visits : index === 2 ? books : counter.counter }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalProfileCounters",
  props: {
    counters: {
      type: Array,
      default: () => [],
    },
    visits: {
      type: Number,
    },
    books: {
      type: Number,
    },
    countersCustomStyle: {
      type: Object,
    },
    counterCustomStyle: {
      type: Object,
    },
    imgsCustomStyle: {
      type: Object,
    },
    imgCustomStyle: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.modal-profile-card-titles,
.modal-profile-card-images,
.modal-profile-card-counters {
  display: flex;
  align-items: center;
  max-height: 20px;
  padding-top: 20px;
  padding-left: 20px;
  gap: 20px;
  margin-top: 0;
}

.modal-profile-card-title,
.modal-profile-card-image,
.modal-profile-card-counter {
  color: var(--c-black);
  text-align: center;
  font-family: var(--f-inter);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  text-transform: capitalize;
  list-style-type: none;
}

.modal-profile-card-images {
  gap: 55px;
}

.modal-profile-card-counters {
  gap: 60px;
}

.modal-profile-card-image {
  padding-left: 15px;
}

.modal-profile-card-counter {
  padding-left: 22px;
  font-size: 12px;
}
</style>
