<template>
  <div>
    <sectionTitle class="contacts-title" sectionTitle="Our Contacts" />
    <div class="contacts-container">
      <contactsInfo :phone="phone" :phoneLink="phoneLink" />
      <contactsMap />
    </div>
  </div>
</template>

<script>
import sectionTitle from "/components/sectionTitle";
import contactsInfo from "/components/contacts/contactsInfo";
import contactsMap from "/components/contacts/contactsMap";

export default {
  name: "contactsMain",
  components: {
    sectionTitle,
    contactsInfo,
    contactsMap,
  },
  data() {
    return {
      phone: "",
      phoneLink: "",
    };
  },
};
</script>

<style scoped>
.contacts-title {
  margin-top: 50px;
}

.contacts-container {
  display: flex;
}

@media (max-width: 800px) {
  .contacts-container {
    flex-direction: column;
    align-items: center;
  }

  .contacts-info {
    width: 100%;
  }

  .map {
    width: 100%;
  }
}
</style>
