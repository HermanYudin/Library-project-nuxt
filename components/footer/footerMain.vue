<template>
  <div class="footer-main-container">
    <div class="footer-top">
      <div class="footer-left">
        <a class="adress-link" :href="adressLink"
          ><sectionText
            class="adress"
            sectionText="286 Cadman Plaza, New York, NY 11238, United States"
        /></a>
        <footerSocial :socials="socials" />
      </div>
      <div class="footer-right">
        <sectionText class="work-days" sectionText="Mon - Fri" />
        <sectionText class="work-days" sectionText="08:00 am - 07:00 pm" />
        <sectionText class="work-days" sectionText="Sat - Sun" />
        <sectionText class="work-days" sectionText="10:00 am - 06:00 pm" />
      </div>
    </div>
    <footerLine class="line" />
    <div class="footer-bottom">
      <footerGit class="git-link" textGit="2024" />
      <a class="git-link" href="https://rs.school/"
        ><footerGit textGit="The Rolling Scopes School"
      /></a>
      <a class="git-link" href="https://github.com/HermanYudin"
        ><footerGit textGit="German Iudin"
      /></a>
    </div>
  </div>
</template>

<script>
import sectionText from "/components/sectionText";
import footerSocial from "/components/footer/footerSocial";
import footerLine from "/components/footer/footerLine";
import footerGit from "/components/footer/footerGit";

export default {
  name: "footerMain",
  components: {
    sectionText,
    footerSocial,
    footerLine,
    footerGit,
  },
  data() {
    return {
      adressLink:
        "https://yandex.ru/maps/202/new-york/geo/cadman_plaza_east/4486152550/?from=tabbar&ll=-73.989900%2C40.697892&source=serp_navig&z=16",
      textGit: "",
      socials: [
        {
          link: "http://twitter.com/",
          img: require("/svg/twit.svg"),
        },
        {
          link: "http://instagram.com/",
          img: require("/svg/inst.svg"),
        },
        {
          link: "http://facebook.com/",
          img: require("/svg/face.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer-main-container {
  background-color: var(--c-black);
  margin-top: 41px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
}

.footer-left {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-left: 20px;
}

.adress {
  font-size: 15px;
  font-weight: normal;
  font-family: var(--f-inter);
  margin-top: 0px;
  max-width: 215px;
  text-align: start;
  margin-bottom: 0px;
}

.adress-link {
  color: var(--c-white);
  text-decoration: none;
  transition: all;
  transition-duration: 0.8s;
}

.adress-link:hover {
  text-decoration: underline;
  color: var(--c-gold);
}

.footer-right {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-right: 20px;
}

.work-days {
  color: var(--c-white);
  text-align: end;
  font-size: 15px;
  font-weight: normal;
  font-family: var(--f-inter);
  margin-top: 0px;
  margin-bottom: 0px;
}

.work-days:nth-child(3) {
  margin-top: 10px;
}

.line {
  background-color: var(--c-white);
  width: 97%;
  height: 1px;
  margin: 0 auto;
  margin-top: 19px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  color: var(--c-white);
  font-size: 20px;
  font-family: var(--f-inter);
  font-weight: normal;
  margin-right: 20px;
  margin-left: 20px;
  padding-top: 44px;
  padding-bottom: 40px;
  letter-spacing: 2px;
}

.git-link {
  color: var(--c-white);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.git-link:nth-child(1) {
  pointer-events: none;
}

.git-link:hover {
  color: var(--c-gold);
}

@media (max-width: 560px) {
  .footer-bottom {
    flex-wrap: wrap;
  }
}
</style>
