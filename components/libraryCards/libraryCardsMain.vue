<template>
  <div>
    <sectionTitle
      class="library-cards-title"
      sectionTitle="Digital Library Cards"
    />
    <div class="library-cards-container">
      <div class="library-form-container">
        <sectionText
          class="library-form-title"
          sectionText="Find your Library card"
        />
        <libraryCardForm
          :isLoggedIn="isLoggedIn"
          :counters="counters"
          :visits="visits"
          :books="books"
        />
      </div>
      <div v-if="!isLoggedIn" class="get-card">
        <sectionTextForum
          class="get-card-title"
          sectionTextForum="Get a reader card"
        />
        <sectionText
          class="get-card-text"
          sectionText="You will be able to see a reader card after logging into account or you can register a new account"
        />
        <div class="get-card-btns">
          <popUpBtn
            class="get-card-btn sign-up"
            btnTitle="Sign Up"
            @open-popUp="openPopUp"
          />
          <popUpBtn
            class="get-card-btn log-in"
            btnTitle="Log In"
            @open-popUp="openPopUp"
          />
        </div>
      </div>
      <div v-else-if="isLoggedIn" class="get-card">
        <sectionTextForum
          class="get-card-title"
          sectionTextForum="Visit your profile"
        />
        <sectionText
          class="get-card-text"
          sectionText="With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more."
        />
        <div class="get-card-btns">
          <popUpBtn
            class="get-card-btn profile"
            btnTitle="Profile"
            @open-popup-profile="openPopUpProfile"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from "/components/sectionTitle";
import sectionText from "/components/sectionText";
import libraryCardForm from "/components/libraryCards/libraryCardForm";
import sectionTextForum from "/components/sectionTextForum";
import popUpBtn from "/components/popUp/popUpBtn";

export default {
  name: "libraryCardsMain",
  components: {
    sectionTitle,
    libraryCardForm,
    sectionTextForum,
    popUpBtn,
  },
  props: {
    isLoggedIn: {
      type: Boolean,
    },
    counters: {
      type: Array,
      defeault: () => [],
    },
    visits: {
      type: Number,
    },
    books: {
      type: Number,
    },
  },
  methods: {
    openPopUp(data) {
      this.$emit("open-popUp", data);
    },
    openPopUpProfile(data) {
      this.$emit("open-popup-profile", data);
    },
  },
};
</script>

<style scoped>
.library-cards-title {
  margin-top: 51px;
  margin-bottom: 0px;
}

.library-cards-container {
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
  align-items: baseline;
}

.library-form-container {
  max-width: 600px;
  margin-left: 23px;
  width: 50%;
  position: relative;
}

.library-form-title {
  font-size: 30px;
  margin-top: 43px;
  letter-spacing: 0.5px;
}

.get-card-title {
  text-align: end;
  font-size: 30px;
  font-family: var(--f-forum);
  font-weight: normal;
  letter-spacing: 0.5px;
}

.get-card-text {
  font-size: 20px;
  font-weight: normal;
  font-family: var(--f-inter);
  text-align: end;
  max-width: 493px;
  letter-spacing: 0.5px;
  line-height: 40px;
  margin-top: 33px;
  margin-bottom: 21px;
}

.get-card-btns {
  display: flex;
  justify-content: end;
}

.sign-up {
  margin-right: 20px;
  padding: 8px 17px;
}

.log-in,
.profile {
  padding: 8px 22px;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .library-cards-container {
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .library-form-container {
    width: 78%;
    margin: 0 auto;
  }

  .get-card {
    width: 100%;
  }

  .get-card-title {
    margin-top: 24px;
    text-align: center;
  }

  .get-card-text {
    margin: 0 auto;
    text-align: center;
    margin-top: 39px;
    max-width: 620px;
  }

  .get-card-btns {
    justify-content: center;
    margin-top: 30px;
  }
}
</style>
