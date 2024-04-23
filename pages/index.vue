<template>
  <div>
    <upBtn :upBtnImg="upBtnImg" />
    <popUpBlur :class="{ 'blur-active': isBlur }" @close-modal="closeModal" />
    <popUpLogRegMain
      @close-modal="closeModal"
      @close-modal-and-log-in="closeModalAndLogIn"
      :closeModalImg="closeModalImg"
      :modalTitle="modalTitle"
      :modalMiniTitle="modalMiniTitle"
      :btnTitle="btnTitle"
      :question="question"
      :answer="answer"
      :isPopUp="isPopUp"
      :isLogPopUp="isLogPopUp"
      :class="{ 'popup-active': isPopUp }"
    />
    <modalProfileMain
      :class="{ 'modal-profile-active': isModalProfile }"
      :iconInitials="iconInitials"
      :fullName="fullName"
      :closeModalImg="closeModalImg"
      :cardNumber="cardNumber"
      :counters="counters"
      :visits="visits"
      :books="books"
      :boughtBooks="boughtBooks"
      @close-modal="closeModal"
    />
    <modalBuyCardMain
      :isModalBook="isModalBook"
      :isDisabled="isDisabled"
      @close-modal="closeModal"
    />
    <header class="header" id="Header">
      <headerMain
        @open-popup="openPopUp"
        @open-popup-logged="openPopUpLogged"
        :isOpen="isOpen"
        :isLoggedIn="isLoggedIn"
        :iconInitials="iconInitials"
        :cardNumber="cardNumber"
        :activeMenu="activeMenu"
      />
    </header>
    <main class="main">
      <section class="welcome">
        <welcomeTitle />
      </section>
      <section class="about" id="About">
        <aboutMain />
      </section>
      <section class="favorites" id="Favorites">
        <favoritesMain
          @open-popup-book="openPopUpBook"
          @add-to-bought-books="addToBoughtBooks"
          :isDisabled="isDisabled"
          :isLoggedIn="isLoggedIn"
        />
      </section>
      <section class="coffeeShop" id="CoffeeShop">
        <coffeeShopMain />
      </section>
      <section class="contacts" id="Contacts">
        <contactsMain />
      </section>
      <section class="libraryCards" id="LibraryCard">
        <libraryCardsMain
          :isLoggedIn="isLoggedIn"
          :counters="counters"
          :visits="visits"
          :books="books"
          @open-popUp="openPopUp"
          @open-popup-profile="openPopUpLogged"
        />
      </section>
    </main>
    <footer class="footer">
      <footerMain />
    </footer>
  </div>
</template>

<script>
import "../assets/css/style.css";
import popUpBlur from "/components/popUp/popUpBlur";
import popUpLogRegMain from "/components/popUp/popUpLogRegMain";
import modalProfileMain from "/components/modalProfile/modalProfileMain";
import headerMain from "/components/header/headerMain";
import welcomeTitle from "/components/welcome/welcomeTitle";
import aboutMain from "/components/about/aboutMain";
import favoritesMain from "/components/favorites/favoritesMain";
import coffeeShopMain from "/components/coffeeShop/coffeeShopMain";
import contactsMain from "/components/contacts/contactsMain";
import libraryCardsMain from "/components/libraryCards/libraryCardsMain";
import modalBuyCardMain from "/components/modalbuyCard/modalBuyCardMain";
import footerMain from "/components/footer/footerMain";
import upBtn from "/components/upButton/upBtn";

export default {
  name: "index",
  data() {
    return {
      isOpen: false,
      isBlur: false,
      isPopUp: false,
      isLogPopUp: false,
      activeMenu: false,
      isModalProfile: false,
      closeModalImg: require("/png/close-btn.png"),
      upBtnImg: require("/png/up.png"),
      modalTitle: "",
      modalMiniTitle: "",
      btnTitle: "",
      question: "",
      answer: "",
      iconInitials: "",
      cardNumber: "",
      fullName: "",
      isLoggedIn: false,
      pageVisits: null,
      sectionTitle: "",
      sectionText: "",
      visits: 0,
      books: 0,
      isModalBook: false,
      isDisabled: false,
      boughtBooks: [],
      counters: [
        {
          title: "Visits",
          image: require("/svg/Union.svg"),
          counter: 0,
        },
        {
          title: "Bonuses",
          image: require("/svg/Star.svg"),
          counter: 0,
        },
        {
          title: "Books",
          image: require("/svg/Book.svg"),
          counter: 0,
        },
      ],
    };
  },
  components: {
    popUpBlur,
    popUpLogRegMain,
    modalProfileMain,
    headerMain,
    welcomeTitle,
    aboutMain,
    favoritesMain,
    coffeeShopMain,
    contactsMain,
    libraryCardsMain,
    modalBuyCardMain,
    footerMain,
    upBtn,
  },
  props: {
    firstNameInput: {
      type: String,
    },
    secondNameInput: {
      type: String,
    },
    activeBurger: {
      type: Boolean,
    },
  },
  methods: {
    openPopUp(data) {
      if (data === "Log In") {
        this.isBlur = true;
        this.isPopUp = true;
        this.isLogPopUp = true;
        this.activeMenu = false;
        if (
          localStorage.getItem("boughtBooks") &&
          localStorage.getItem("seasonTicket")
        ) {
          this.boughtBooks = JSON.parse(localStorage.getItem("boughtBooks"));
        }
      } else {
        this.isBlur = true;
        this.isPopUp = true;
        this.isLogPopUp = false;
      }
    },
    openPopUpLogged(data) {
      if (data === "My Profile" || data === "Profile") {
        this.isModalProfile = true;
        this.isBlur = true;
      } else {
        window.location.reload();
        this.isLoggedIn = false;
      }
    },
    openPopUpBook(data) {
      if (
        data === "Buy" &&
        this.isLoggedIn === true &&
        !localStorage.getItem("seasonTicket")
      ) {
        this.isModalBook = true;
        this.isBlur = true;
      } else if (
        localStorage.getItem("seasonTicket") &&
        this.isLoggedIn === true
      ) {
        let currentBooks = parseInt(localStorage.getItem("books"));
        localStorage.setItem("books", currentBooks + 1);
        this.books = Number(localStorage.getItem("books"));
      } else {
        this.isPopUp = true;
        this.isLogPopUp = true;
        this.isBlur = true;
      }
    },

    addToBoughtBooks(data) {
      if (this.isLoggedIn) {
        if (localStorage.getItem("boughtBooks")) {
          this.boughtBooks = JSON.parse(localStorage.getItem("boughtBooks"));

          if (this.boughtBooks.includes(data)) {
            let currentBooks = parseInt(localStorage.getItem("books"));
            localStorage.setItem("books", currentBooks - 1);
            this.books = localStorage.getItem("books");
            alert("You already have this book, please, buy another one :)");
            return false;
          }
        }
        this.boughtBooks.push(data);
        localStorage.setItem("boughtBooks", JSON.stringify(this.boughtBooks));
      }
    },

    closeModal(data) {
      this.isPopUp = data;
      this.isBlur = data;
      this.isModalProfile = data;
      this.isModalBook = data;
      this.activeMenu = data;
    },
    closeModalAndLogIn(data) {
      this.isBlur = false;
      this.isPopUp = false;
      this.isLoggedIn = true;
      this.iconInitials = data.iconInitials;
      this.cardNumber = data.cardNumber;
      this.fullName = data.fullName;
      this.visits = data.visits;
      this.books = data.books;
    },
  },
};
</script>

<style scoped>
.popup-active {
  display: block;
  z-index: 1;
}

.blur-active {
  display: block;
  z-index: 1;
}

.modal-profile-active {
  display: flex;
}

.welcome {
  background-image: url("~@/svg/Welcome-h.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: var(--c-black);
  position: relative;
  z-index: -1;
}
</style>
