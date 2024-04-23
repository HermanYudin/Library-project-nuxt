<template>
  <div class="card none">
    <div class="card-grow">
      <h3 class="card-top-title">{{ card.topTitle }}</h3>
      <h3 class="card-title">
        {{ card.title }}
      </h3>
      <h3 class="card-author">
        {{ card.author }}
      </h3>
      <p class="card-text">
        {{ card.text }}
      </p>
    </div>
    <popUpBtn
      class="card-btn"
      btnTitle="Buy"
      :class="{ 'btn-disabled': isDisabledDisabled }"
      @open-popup-book="openPopUpBook"
      @add-to-bought-books="addToBoughtBooks"
    />
    <img class="card-img" :src="card.img" alt="card-img" />
  </div>
</template>

<script>
import popUpBtn from "/components/popUp/popUpBtn";

export default {
  name: "card",
  components: {
    popUpBtn,
  },
  data() {
    return {
      cardBtn: true,
      isDisabledDisabled: this.isDisabled,
      boughtBooks: "",
    };
  },
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
    isDisabled: {
      type: Boolean,
    },
    isLoggedIn: {
      type: Boolean,
    },
    seasonTicket: {
      type: Boolean,
    },
  },
  methods: {
    addToBoughtBooks() {
      if (localStorage.getItem("seasonTicket") && this.isLoggedIn === true) {
        this.boughtBooks = this.card.title;
      } else {
        return false;
      }
      this.$emit("add-to-bought-books", this.boughtBooks);
    },

    openPopUpBook(data) {
      this.$emit("open-popup-book", data);
      if (
        !this.isDisabledDisabled &&
        this.isLoggedIn &&
        localStorage.getItem("seasonTicket")
      ) {
        this.isDisabledDisabled = true;
      }
    },
  },
  watch: {
    isDisabled(newVal) {
      this.isDisabledDisabled = newVal;
    },
  },
};
</script>

<style scoped>
.card {
  min-width: 38.2%;
  min-height: 556px;
  border: 1px solid var(--c-black);
  position: relative;
  flex-direction: column;
  transition: all 1s ease-in-out;
}

.none {
  position: absolute;
  width: 0px;
  height: 0px;
  margin: 0px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  opacity: 0;
}

.card-grow {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.card:nth-child(odd) {
  margin-left: 20px;
}

.card:nth-child(even) {
  margin-right: 60px;
}

.card:nth-child(3),
.card:nth-child(4),
.card:nth-child(7),
.card:nth-child(8),
.card:nth-child(11),
.card:nth-child(12),
.card:nth-child(15),
.card:nth-child(16) {
  margin-top: 40px;
}

.card-top-title {
  font-size: 20px;
  font-family: var(--f-forum);
  font-weight: normal;
  margin-left: 20px;
  letter-spacing: 2px;
  margin-top: 22px;
}

.card-top-title::after {
  content: "";
  display: block;
  max-width: 60px;
  height: 1px;
  background-color: var(--c-gold);
  margin-top: 8px;
}

.card-title {
  margin-bottom: 0px;
}

.card-title,
.card-author {
  margin-top: 0;
  margin-left: 20px;
  font-size: 15px;
  font-family: var(--f-inter);
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 40px;
}

.card-text {
  margin-left: 20px;
  margin-top: 5px;
  font-size: 15px;
  font-family: var(--f-inter);
  font-weight: normal;
  letter-spacing: 1.95px;
  line-height: 40px;
  max-width: 355px;
  text-transform: capitalize;
}

.card-btn {
  margin-top: 0px;
  min-width: 75px;
  margin-left: 20px;
  margin-bottom: 16px;
}

.card-img {
  max-width: 200px;
  width: 100%;
  position: absolute;
  bottom: -1px;
  right: -41px;
}

.btn-disabled {
  color: var(--c-gold);
  border-color: var(--c-gold);
  pointer-events: none;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .card {
    width: 71.7%;
  }

  .card:nth-child(odd) {
    margin: 0 auto;
    margin-right: 128px;
    margin-left: 20px;
  }

  .card:nth-child(even) {
    margin: 0 auto;
    margin-right: 128px;
    margin-top: 41px;
    margin-left: 20px;
  }

  .card:nth-child(3),
  .card:nth-child(7),
  .card:nth-child(11),
  .card:nth-child(15) {
    margin-top: 41px;
  }

  .card-text:nth-child(2) {
    padding-bottom: 21px;
  }
}
</style>
