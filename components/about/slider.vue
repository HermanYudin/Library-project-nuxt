<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in imgs" :key="img">
        <img class="swiper-slide-img" :src="img" alt="slider-img" />
      </div>
    </div>
    <!-- If we need pagination -->

    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";

import "swiper/swiper-bundle.min.css";

export default {
  name: "swiper",
  data() {
    return {
      imgs: [
        require("/img/a1.jpg"),
        require("/img/a2.jpg"),
        require("/img/a3.jpg"),
        require("/img/a4.jpg"),
        require("/img/a5.jpg"),
      ],
    };
  },

  mounted() {
    new Swiper(".swiper-container", {
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: false,
      keyboard: {
        enabled: true,
      },
      breakpoints: {
        1: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        381: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
        880: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
        905: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
        1340: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 30,
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  position: relative;
  display: flex;
  max-width: 1380px;
  margin: 0 auto;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  padding-bottom: 101px;
  margin: 0 auto;
}

.swiper-slide-img {
  display: flex;
  margin: 0 auto;
  max-width: 450px;
}

.swiper-pagination-bullets {
  position: absolute;
  bottom: 39px;
  width: 100%;
  text-align: center;
}

.swiper-button-prev,
.swiper-button-next {
  top: 42%;
}

.swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "";
  width: 24px;
  height: 24px;
  background-image: url("~@/png/Arrow-right.png");
  background-repeat: no-repeat;
  background-position: center;
}

.swiper-button-prev:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: "";
  width: 24px;
  height: 24px;
  background-image: url("~@/png/Arrow-left.png");
  background-repeat: no-repeat;
  background-position: center;
}

@media (max-width: 905px) {
  .swiper-slide-img {
    max-width: 350px;
  }
}

@media (min-width: 590px) and (max-width: 879px) {
  .swiper-slide-img {
    max-width: 400px;
  }
}

@media (max-width: 790px) {
  .swiper-slide-img {
    max-width: 350px;
  }
}

@media (max-width: 450px) {
  .swiper-slide-img {
    max-width: 200px;
  }
}

@media (min-width: 905px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
