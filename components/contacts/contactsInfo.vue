<template>
  <div class="contacts-info">
    <sectionBoldText
      class="bold-text"
      sectionBoldText="For All Library Inquiries:"
    />
    <div class="call-text">
      <sectionText class="contacts-span" sectionText="Please Call" />
      <phoneLink phone="(617) 730-2370" phoneLink="tel:(617) 730-2370" />
    </div>
    <div class="call-text">
      <sectionText
        class="contacts-span"
        sectionText="For TTY Service, Please Call"
      />
      <phoneLink phone="(617) 730-2370" phoneLink="tel:(617) 730-2370" />
    </div>
    <div class="call-text">
      <sectionText class="contacts-span" sectionText="Putterham Library:" />
      <phoneLink phone="(617) 730-2385" phoneLink="tel:(617) 730-2385" />
    </div>
    <sectionBoldText class="bold-text staff" sectionBoldText="Senior Staff" />
    <div class="director-text">
      <sectionText class="contacts-span" sectionText="Library Director:" />
      <a href="mailto:AmandaHirst@gmail.com" class="director-link"
        ><sectionBoldText class="bold-text" sectionBoldText="Amanda Hirst"
      /></a>
    </div>
  </div>
</template>

<script>
import sectionBoldText from "/components/sectionBoldText";
import sectionText from "/components/sectionText";
import phoneLink from "/components/contacts/phoneLink";

export default {
  name: "contsctsInfo",
  components: {
    sectionBoldText,
    sectionText,
    phoneLink,
  },
  props: {
    phone: {
      type: String,
    },
    phoneLink: {
      type: String,
    },
  },
  //   :phone="phone" :phoneLink="phoneLink"
};
</script>

<style scoped>
.contacts-info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 50%;
}

.bold-text {
  letter-spacing: 2.5px;
}

.call-text {
  display: flex;
  align-items: center;
  padding-top: 36px;
}

.director-text {
  display: flex;
  align-items: center;
}

.contacts-span {
  letter-spacing: 2px;
  text-align: start;
  margin-top: 0;
  margin-bottom: 0;
}

.director-link {
  text-decoration: none;
  padding-left: 10px;
  color: var(--c-black);
  transition: all;
  transition-duration: 0.5s;
}

.director-link:hover {
  color: var(--c-gold);
}

.staff {
  padding-top: 34px;
  margin-bottom: 16px;
}

@media (max-width: 550px) {
  .bold-text,
  .contacts-span {
    font-size: 16px;
  }
}
</style>
