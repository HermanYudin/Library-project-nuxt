<template>
  <div class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.699719619452!2d-78.936437123784!3d43.08980797113446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d368b21f2b07b7%3A0x97ceb53c2bcd9c87!2zUGxhemEgRHIsIFdoZWF0ZmllbGQsIE5ZIDE0MzA0LCDQodCo0JA!5e0!3m2!1sru!2sru!4v1713320756000!5m2!1sru!2sru"
      width="700"
      height="417"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      alt="plaza-map"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "contactsMap",
};
</script>

<style scoped>
.map {
  width: 50%;
  margin-top: 11px;
  margin-right: 23px;
}

@media (max-width: 800px) {
  .map {
    width: 95%;
    margin-right: 10px;
    margin-left: 10px;
  }
}
</style>
