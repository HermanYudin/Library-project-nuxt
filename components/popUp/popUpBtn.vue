<template>
  <button
    class="pop-up-button"
    @click="
      setToLocalStorage(),
        getFromLocalStorage(),
        closeModal(),
        openPopUp(btnTitle),
        openPopUpProfile(btnTitle),
        openPopUpBook(btnTitle),
        closeModalAndLogIn(),
        setSeasonTicketToLocalStotage(),
        addToBoughtBooks()
    "
  >
    {{ btnTitle }}
  </button>
</template>

<script>
export default {
  name: "popUpBtn",
  props: {
    btnTitle: {
      type: String,
    },
    btnDisabled: {
      type: Boolean,
    },
  },
  methods: {
    setToLocalStorage() {
      this.$emit("set-to-local-storage");
    },
    makeCardNumber() {
      this.$emit("make-card-number");
    },
    getFromLocalStorage() {
      this.$emit("get-from-local-storage");
    },
    closeModal() {
      this.$emit("close-modal");
    },
    closeModalAndLogIn() {
      this.$emit("close-modal-and-log-in");
    },
    openPopUp() {
      this.$emit("open-popUp", this.btnTitle);
    },
    openPopUpProfile() {
      this.$emit("open-popup-profile", this.btnTitle);
    },
    openPopUpBook() {
      this.$emit("open-popup-book", this.btnTitle);
    },
    setSeasonTicketToLocalStotage() {
      this.$emit("set-season-ticket-to-local-stotage");
    },
    addToBoughtBooks() {
      this.$emit("add-to-bought-books");
    },
  },
};
</script>

<style scoped>
.pop-up-button {
  max-width: 75px;
  margin-top: 13px;
  padding: 8px;
  background-color: var(--c-white);
  border: 1px solid black;
  border-radius: 3px;
  font-size: 10px;
  font-family: var(--f-inter);
  font-weight: bold;
  transition: all;
  transition-duration: 0.3s;
}

.pop-up-button:hover {
  cursor: pointer;
  background-color: var(--c-gold);
  border: 1px solid var(--c-gold);
}
</style>
