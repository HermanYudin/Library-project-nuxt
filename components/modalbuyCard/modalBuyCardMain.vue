<template>
  <div
    class="buy-library-card-container"
    :class="{ 'modal-book-active': isModalBook }"
  >
    <popUpClose :closeModalImg="closeModalImgWhite" @close-modal="closeModal" />
    <div class="buy-library-card-header-container">
      <sectionTextForum
        class="buy-library-card-header"
        sectionTextForum="BUY A LIBRARY CARD"
      />
    </div>
    <div class="buy-library-card-wrapper">
      <div class="buy-library-card-bank-card">
        <sectionText
          class="buy-library-card-text bank-text"
          sectionText="Bank card number"
        />
        <popUpTextInput
          class="card-number"
          minlength="16"
          maxlength="16"
          required
          title="Поле должно содержать не менее 16 символов"
          v-model="cardBankNumber"
        />
        <sectionText
          class="buy-library-card-text code-text"
          sectionText="Expiration code"
        />
        <div class="code-inputs">
          <popUpTextInput
            class="code-number"
            minlength="2"
            maxlength="2"
            required
            v-model="cardCodeFirst"
          />
          <popUpTextInput
            class="code-number"
            minlength="2"
            maxlength="2"
            required
            v-model="cardCodeSecond"
          />
        </div>
        <sectionText class="buy-library-card-text cvc-text" sectionText="CVC" />
        <popUpTextInput
          class="cvc-number"
          minlength="3"
          maxlength="3"
          required
          v-model="cardCv"
        />
        <sectionText
          class="buy-library-card-text cardholder-text"
          sectionText="Cardholder name"
        />
        <popUpTextInput class="cardholder-name" required v-model="cardName" />
        <sectionText
          class="buy-library-card-text postal-text"
          sectionText="Postal code"
        />
        <popUpTextInput class="postal-number" required v-model="cardPostal" />
        <sectionText
          class="buy-library-card-text city-text"
          sectionText="City / Town"
        />
        <popUpTextInput class="city-name" v-model="cardCity" />
        <div class="buy-library-card-button-and-price">
          <popUpBtn
            btnTitle="Buy"
            class="buy-library-card-btn"
            :class="{ 'btn-disabled': btnDisabled }"
            @set-season-ticket-to-local-stotage="setSeasonTicketToLocalStotage"
            @close-modal="closeModal"
          />
          <sectionBoldText sectionBoldText="$ 25.00" class="card-price" />
        </div>
      </div>
      <div class="buy-library-card-discription">
        <sectionText
          class="buy-library-card-discription-text"
          sectionText="If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card."
        />
      </div>
    </div>
  </div>
</template>

<script>
import sectionTextForum from "/components/sectionTextForum";
import sectionText from "/components/sectionText";
import popUpTextInput from "/components/popUp/popUpTextInput";
import popUpBtn from "/components/popUp/popUpBtn";
import sectionBoldText from "/components/sectionBoldText";
import popUpClose from "/components/popUpClose";

export default {
  name: "modalBuyCardMain",
  components: {
    sectionTextForum,
    sectionText,
    popUpTextInput,
    popUpBtn,
    sectionBoldText,
    popUpClose,
  },
  data() {
    return {
      closeModalImgWhite: require("/png/close-btn-white.png"),
      cardBankNumber: "",
      cardCodeFirst: "",
      cardCodeSecond: "",
      cardCv: "",
      cardName: "",
      cardPostal: "",
      cardCity: "",
      btnDisabled: true,
    };
  },
  props: {
    isModalBook: {
      type: Boolean,
    },
    isLoggedIn: {
      type: Boolean,
    },
  },
  methods: {
    closeModal(data) {
      this.$emit("close-modal", data);
    },
    setSeasonTicketToLocalStotage() {
      localStorage.setItem("seasonTicket", true);
      localStorage.setItem("boughtBooks", "");
      alert("Congratulations! Now you can buy some books! :)");
    },

    checkInputLength() {
      if (
        this.cardBankNumber.length === 16 &&
        this.cardCodeFirst.length === 2 &&
        this.cardCodeSecond.length === 2 &&
        this.cardCv.length === 3 &&
        this.cardName.length >= 1 &&
        this.cardPostal.length >= 1 &&
        this.cardCity.length >= 1
      ) {
        this.btnDisabled = false;
      } else {
        this.btnDisabled = true;
      }
    },
  },
  watch: {
    cardBankNumber(newValue, oldValue) {
      this.checkInputLength();
    },
    cardCodeFirst(newValue, oldValue) {
      this.checkInputLength();
    },
    cardCodeSecond(newValue, oldValue) {
      this.checkInputLength();
    },
    cardCv(newValue, oldValue) {
      this.checkInputLength();
    },
    cardName(newValue, oldValue) {
      this.checkInputLength();
    },
    cardPostal(newValue, oldValue) {
      this.checkInputLength();
    },
    cardCity(newValue, oldValue) {
      this.checkInputLength();
    },
  },
};
</script>

<style scoped>
.buy-library-card-container {
  max-width: 640px;
  padding-bottom: 40px;
  position: relative;
  background-color: var(--c-white);
  position: fixed;
  z-index: 11;
  display: none;
  margin: 6% auto;
  left: 0;
  right: 0;
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

.modal-book-active {
  display: block;
}

.buy-library-card-header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-height: 60px;
  background-color: var(--c-black);
}

.buy-library-card-header {
  color: var(--c-white);
  font-size: 40px;
  line-height: 20px;
  letter-spacing: 0.8px;
  min-height: 60px;
  padding-top: 20px;
}

.buy-library-card-wrapper {
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
  margin-right: 35px;
}

.buy-library-card-text {
  display: flex;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 0px;
}

.card-number,
.cardholder-name,
.postal-number,
.city-name {
  width: 200px;
  margin-bottom: 10px;
}

.code-text,
.cvc-text {
  margin-top: 0px;
}

.cardholder-text {
  margin-top: 13px;
}

.postal-text,
.city-text {
  margin-top: 0px;
}

.code-inputs {
  display: flex;
  gap: 9px;
}

.code-number,
.cvc-number {
  width: 45px;
}

.city-name {
  margin-bottom: 9px;
}

.buy-library-card-btn {
  width: 75px;
  margin-top: 0px;
}

.buy-library-card-button-and-price {
  display: flex;
  align-items: center;
}

.card-price {
  margin-top: 20px;
  margin-left: 24px;
  letter-spacing: 2px;
}

.buy-library-card-discription {
  margin-left: 40px;
  margin-top: 15px;
}

.buy-library-card-discription-text {
  color: var(--c-gray);
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 2px;
  text-align: start;
  margin-bottom: 0px;
  margin-top: 15px;
}

.btn-disabled {
  pointer-events: none;
  color: var(--c-gray);
  border-color: var(--c-gray);
}
</style>
