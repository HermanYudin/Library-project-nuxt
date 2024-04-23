<template>
  <div class="pop-up" v-if="isLogLogPopUp">
    <popUpClose @close-modal="closeModal" :closeModalImg="closeModalImg" />
    <popUpTitle :modalTitle="modalTitle" modalTitle="LOGIN" />
    <div class="pop-up-form">
      <popUpMiniTitle modalMiniTitle="E-mail or readers card" />
      <popUpEmailInput v-model="emailLogInput" />
      <popUpMiniTitle modalMiniTitle="Password" />
      <popUpPasswordInput v-model="passwordLogInput" />
      <popUpBtn
        btnTitle="Log In"
        @get-from-local-storage="getFromLocalStorage"
      />
      <div class="questionAndAnswer">
        <popUpQuestion question="Don’t have an account?" />
        <popUpAnswer @change-modal="changeModalToReg" answer="Register" />
      </div>
    </div>
  </div>
  <div class="pop-up" v-else-if="!isLogLogPopUp">
    <popUpClose @close-modal="closeModal" :closeModalImg="closeModalImg" />
    <popUpTitle :modalTitle="modalTitle" modalTitle="REGISTER" />
    <div class="pop-up-form">
      <popUpMiniTitle modalMiniTitle="First name" />
      <popUpTextInput
        v-model="firstNameInput"
        :firstNameInput="firstNameInput"
      />
      <popUpMiniTitle modalMiniTitle="Second name" />
      <popUpTextInput
        v-model="secondNameInput"
        :secondNameInput="secondNameInput"
      />

      <popUpMiniTitle modalMiniTitle="E-mail" />
      <popUpEmailInput v-model="emailInput" />

      <popUpMiniTitle modalMiniTitle="Password" />
      <popUpPasswordInput
        v-model="passwordInput"
        :passwordInput="passwordInput"
      />

      <popUpBtn btnTitle="Sign Up" @set-to-local-storage="setToLocalStorage" />
      <div class="questionAndAnswer">
        <popUpQuestion question="Already have an account?" />
        <popUpAnswer @change-modal="changeModalToLog" answer="Login" />
      </div>
    </div>
  </div>
</template>

<script>
import popUpClose from "../popUpClose";
import popUpTitle from "./popUpTitle";
import popUpMiniTitle from "./popUpMiniTitle";
import popUpEmailInput from "./popUpEmailInput.vue";
import popUpPasswordInput from "./popUpPasswordInput.vue";
import popUpTextInput from "./popUpTextInput.vue";
import popUpQuestion from "./popUpQuestion.vue";
import popUpAnswer from "./popUpAnswer.vue";
import popUpBtn from "/components/popUp/popUpBtn";

export default {
  name: "popUpLogReg",
  components: {
    popUpClose,
    popUpTitle,
    popUpMiniTitle,
    popUpEmailInput,
    popUpPasswordInput,
    popUpTextInput,
    popUpQuestion,
    popUpAnswer,
    popUpBtn,
  },
  data() {
    return {
      firstNameInput: "",
      secondNameInput: "",
      emailInput: "",
      passwordInput: "",
      emailLogInput: "",
      passwordLogInput: "",
      visits: 0,
      books: 0,
      isLogLogPopUp: this.isLogPopUp,
    };
  },
  props: {
    closeModalImg: {
      type: String,
    },
    modalTitle: {
      type: String,
    },
    modalMiniTitle: {
      type: String,
    },
    btnTitle: {
      type: String,
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    isPopUp: {
      type: Boolean,
    },
    isLogPopUp: {
      type: Boolean,
    },
  },

  watch: {
    isLogPopUp(newVal) {
      this.isLogLogPopUp = newVal;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal", false);
    },
    closeModalAndLogIn() {
      this.$emit("close-modal-and-log-in", {
        iconInitials: this.iconInitials,
        cardNumber: this.cardNumber,
        fullName: this.fullName,
        visits: this.visits,
        books: this.books,
      });
    },
    changeModalToReg() {
      this.isLogLogPopUp = false;
    },
    changeModalToLog() {
      this.isLogLogPopUp = true;
    },
    makeCardNumber() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const charactersLength = characters.length;
      let cardNumber = "";
      let cardLength = 8;

      for (let i = 0; i < cardLength; i++) {
        cardNumber += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      localStorage.setItem("cardNumber", cardNumber);
    },
    setToLocalStorage() {
      if (this.passwordInput.length < 4) {
        alert("Please enter password more than 4 characters");
        return false;
      } else if (this.firstNameInput < 1 || this.secondNameInput < 1) {
        alert("Please enter more characters in your name");
      } else {
        this.makeCardNumber();
        localStorage.setItem("firstName", this.firstNameInput);
        localStorage.setItem("secondName", this.secondNameInput);
        localStorage.setItem("email", this.emailInput);
        localStorage.setItem("password", this.passwordInput);
        this.emailLogInput = localStorage.getItem("email");
        this.passwordLogInput = localStorage.getItem("password");
        this.isLogLogPopUp = true;
      }
    },
    getFromLocalStorage() {
      if (
        (this.emailLogInput === localStorage.getItem("email") &&
          this.passwordLogInput === localStorage.getItem("password")) ||
        (this.emailLogInput === localStorage.getItem("cardNumber") &&
          this.passwordLogInput === localStorage.getItem("password"))
      ) {
        this.iconInitials =
          localStorage.getItem("firstName").slice(0, 1) +
          localStorage.getItem("secondName").slice(0, 1);
        this.cardNumber = localStorage.getItem("cardNumber");
        this.fullName =
          localStorage.getItem("firstName") +
          " " +
          localStorage.getItem("secondName");
        if (localStorage.getItem("visits")) {
          this.visits = parseInt(localStorage.getItem("visits"));
        } else {
          localStorage.setItem("visits", this.visits);
        }
        this.visits++;
        localStorage.setItem("visits", this.visits);
        if (localStorage.getItem("books")) {
          this.books = parseInt(localStorage.getItem("books"));
        } else {
          localStorage.setItem("books", this.books);
        }
        this.closeModalAndLogIn();
      } else {
        alert("Incorrect data! Please, check your email and password");
      }
    },
  },
};
</script>

<style scoped>
.pop-up {
  background-color: var(--c-white);
  padding-bottom: 18px;
  width: 240px;
  position: relative;
  position: fixed;
  z-index: 3;
  display: none;
  margin: 15% auto;
  left: 0;
  right: 0;
}

.pop-up {
  animation-duration: 0.55s;
  animation-fill-mode: both;
  animation-name: fadeInDown;
}

.pop-up-form {
  display: flex;
  flex-direction: column;
  margin: 20px 20px auto 20px;
}

.questionAndAnswer {
  display: flex;
  margin-top: 5px;
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

@media (min-width: 1px) and (max-width: 768px) {
  .pop-up {
    margin: 45% auto;
  }
}
</style>
