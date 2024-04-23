<template>
  <div class="modal-profile">
    <div class="modal-profile-name">
      <modalProfileInitials :iconInitials="iconInitials" />
      <modalProfileFullName :fullName="fullName" />
    </div>
    <div class="modal-profile-info">
      <popUpClose @close-modal="closeModal" :closeModalImg="closeModalImg" />
      <modalProfileTitle profileTitle="MY PROFILE" />
      <modalProfileCounters
        :counters="counters"
        :visits="visits"
        :books="books"
      />
      <modalProfileTitle
        profileTitle="Rented Books:"
        :class="{ secondTitle: anotherTitle }"
      />
      <modalProfileTitle
        v-if="boughtBooks.length === 0"
        profileTitle="You haven't bought anything yet"
        :class="{ thirdTitle: anotherTitle }"
      />
      <ol v-else class="bought-books">
        <li class="bought-book" v-for="(boughtBook, index) in boughtBooks">
          {{ boughtBook }}
        </li>
      </ol>
      <hr />
      <div class="card-number">
        <modalProfileTitle
          profileTitle="Card number:"
          :class="{ secondTitle: anotherTitle }"
        />
        <modalProfileTitle
          ref="textToCopy"
          :profileTitle="this.cardNumber"
          :class="{ secondTitle: anotherTitle }"
          :style="{ color: 'var(--c-gold)' }"
        />
        <copyCardNumber :copyImg="copyImg" @copy-text="copyText" />
      </div>
    </div>
  </div>
</template>

<script>
import popUpClose from "../popUpClose";
import modalProfileInitials from "./modalProfileInitials";
import modalProfileFullName from "./modalProfileFullName";
import modalProfileTitle from "./modalProfileTitle";
import modalProfileCounters from "./modalProfileCounters";
import copyCardNumber from "./copyCardNumber";

export default {
  name: "modalProfileMain",
  components: {
    popUpClose,
    modalProfileInitials,
    modalProfileFullName,
    modalProfileTitle,
    modalProfileCounters,
    copyCardNumber,
  },
  data() {
    return {
      anotherTitle: true,
      profileTitle: "",
      copyImg: require("/svg/icon_copy.svg"),
    };
  },
  props: {
    iconInitials: {
      type: String,
    },
    fullName: {
      type: String,
    },
    closeModalImg: {
      type: String,
    },
    cardNumber: {
      type: String,
    },
    visits: {
      type: Number,
    },
    books: {
      type: Number,
    },
    counters: {
      type: Array,
      default: () => [],
    },
    boughtBooks: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", false);
    },
    copyText() {
      const textToCopy = this.$refs.textToCopy.$el.innerText;
      navigator.clipboard.writeText(textToCopy);
    },
  },
};
</script>

<style scoped>
.modal-profile {
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  max-width: 600px;
  background-color: var(--c-white);
  position: fixed;
  z-index: 3;
  margin: 10% auto;
  left: 0;
  right: 0;
  display: none;
  animation-duration: 0.55s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0px, -100%, 0px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

.modal-profile-name {
  width: 28.6%;
  background-color: var(--c-black);
}

.modal-profile-info {
  width: 71.5%;
  background-color: var(--c-white);
}

.secondTitle {
  font-size: 20px;
  text-transform: none;
  margin-bottom: 0px;
}

.thirdTitle {
  font-size: 15px;
}

.card-number {
  display: flex;
  align-items: center;
}

.bought-books {
  list-style-position: inside;
  padding-left: 20px;
}

@media (min-width: 1px) and (max-width: 768px) {
  .modal-profile {
    margin: 22% auto;
  }
}
</style>
