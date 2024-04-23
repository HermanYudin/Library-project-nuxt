<template>
  <div>
    <a :href="phoneLink" class="contacts-link"
      ><span>{{ phone }}</span></a
    >
  </div>
</template>

<script>
export default {
  name: "phoneLink",
  props: {
    phone: {
      type: String,
    },
    phoneLink: {
      type: String,
    },
  },
};
</script>

<style scoped>
.contacts-link {
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 20px;
  font-family: var(--f-inter);
  margin-top: 34px;
  letter-spacing: 2px;
  text-decoration: none;
  color: var(--c-black);
  padding-left: 10px;
  transition: all;
  transition-duration: 0.5s;
}

.contacts-link:hover {
  color: var(--c-gold);
}

@media (max-width: 550px) {
  .contacts-link {
    font-size: 16px;
  }
}
</style>
