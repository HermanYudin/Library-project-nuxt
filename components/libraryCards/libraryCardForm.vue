<template>
  <div class="library-form">
    <div class="library-form-window">
      <sectionTextForum sectionTextForum="Brooklyn Public Library" />
      <div v-if="!isLoggedIn">
        <libraryCardsInput
          placeholder="Reader's name"
          v-model="inputFirstName"
        />
        <libraryCardsInput
          placeholder="Card number"
          v-model="inputCardNumber"
        />
      </div>
      <div v-else>
        <libraryCardsInput
          placeholder="Reader's name"
          v-model="localStorageFirstName"
          :class="{ 'input-Disabled': isLoggedIn }"
        />
        <libraryCardsInput
          placeholder="Card number"
          v-model="localStorageCardNumber"
          :class="{ 'input-Disabled': isLoggedIn }"
        />
      </div>
      <div v-if="!isLoggedIn">
        <libraryCardBtn
          v-if="!checked"
          libraryBtnTitle="Check the card"
          @check-card="checkCard"
        />
        <modalProfileCounters
          v-else
          :counters="counters"
          :visits="visitsVisits"
          :books="booksBooks"
          :imgsCustomStyle="imgsCustomStyle"
          :imgCustomStyle="imgCustomStyle"
          :countersCustomStyle="countersCustomStyle"
          :counterCustomStyle="counterCustomStyle"
          class="card-counters"
        />
      </div>
      <div v-else>
        <modalProfileCounters
          :counters="counters"
          :visits="visits"
          :books="books"
          :imgsCustomStyle="imgsCustomStyle"
          :imgCustomStyle="imgCustomStyle"
          :countersCustomStyle="countersCustomStyle"
          :counterCustomStyle="counterCustomStyle"
          class="card-counters"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sectionTextForum from "/components/sectionTextForum";
import libraryCardsInput from "/components/libraryCards/libraryCardsInput";
import libraryCardBtn from "/components/libraryCards/libraryCardBtn";
import modalProfileCounters from "/components/modalProfile/modalProfileCounters";

export default {
  name: "libraryCardForm",
  components: {
    sectionTextForum,
    libraryCardsInput,
    libraryCardBtn,
    modalProfileCounters,
  },
  data() {
    return {
      placeholder: "",
      libraryBtnTitle: "",
      inputCardNumber: "",
      inputFirstName: "",
      localStorageFirstName:
        typeof localStorage !== "undefined"
          ? localStorage.getItem("firstName")
          : "",
      localStorageCardNumber:
        typeof localStorage !== "undefined"
          ? localStorage.getItem("cardNumber")
          : "",
      checked: false,
      visitsVisits: 0,
      booksBooks: 0,
      countersCustomStyle: {
        gap: "80px",
      },
      counterCustomStyle: {
        paddingLeft: "3px",
      },
      imgsCustomStyle: {
        gap: "70px",
      },
      imgCustomStyle: {
        paddingLeft: "0px",
      },
    };
  },
  props: {
    isLoggedIn: {
      type: Boolean,
    },
    visits: {
      type: Number,
    },
    books: {
      type: Number,
    },
    counters: {
      type: Array,
      defeault: () => [],
    },
  },
  watch: {
    isLoggedIn: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.autoFillData();
        }
      },
    },
  },
  methods: {
    checkCard() {
      if (
        !this.isLoggedIn &&
        this.inputFirstName === localStorage.getItem("firstName") &&
        this.inputCardNumber === localStorage.getItem("cardNumber")
      ) {
        this.checked = true;
        this.visitsVisits = Number(localStorage.getItem("visits"));
        this.booksBooks = Number(localStorage.getItem("books"));
        this.inputFirstName === localStorage.getItem("firstName");
        this.inputCardNumber === localStorage.getItem("cardNumber");

        setTimeout(() => {
          this.checked = false;
          this.inputFirstName = "";
          this.inputCardNumber = "";
        }, 10000);
      } else if (this.isLoggedIn) {
        this.checked = true;
      } else {
        alert("Please, check first name field and card number field");
      }
    },
    autoFillData() {
      this.checked = true;
      this.visits = Number(localStorage.getItem("visits"));
      this.books = Number(localStorage.getItem("books"));
      this.inputFirstName = localStorage.getItem("firstName");
      this.inputCardNumber = localStorage.getItem("cardNumber");
    },
  },
  created() {
    this.visitsVisits = this.visits;
    this.booksBooks = this.books;
  },
};
</script>

<style scoped>
.library-form {
  border: 3px solid var(--c-gold);
  padding-bottom: 69px;
  box-shadow: 0px 3px 4px var(--c-gray);
  margin-top: 30px;
}

.library-form-window {
  background-color: var(--c-gold);
  margin: 20px;
  padding: 26px;
  padding-left: 15px;
}

.card-counters {
  background-color: var(--c-white);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin-top: 25px;
}

.input-Disabled {
  pointer-events: none;
}

@media (max-width: 800px) {
  .card-counters {
    display: none;
  }
}
</style>
