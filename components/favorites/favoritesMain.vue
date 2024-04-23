<template>
  <div>
    <sectionTitle sectionTitle="Favorites" class="fav-title" />
    <sectionBoldText
      class="season-text"
      sectionBoldText="Pick favorites of season"
    />
    <radio :radios="radios" @set-active-cards="setActiveCards" />
    <div class="cards">
      <card
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :isLoggedIn="isLoggedIn"
        :isDisabled="isDisabled"
        :seasonTicket="seasonTicket"
        :class="{ 'active-cards': activeCards === card.category }"
        @open-popup-book="openPopUpBook"
        @add-to-bought-books="addToBoughtBooks"
      />
    </div>
  </div>
</template>

<script>
import sectionTitle from "/components/sectionTitle";
import radio from "./radio";
import sectionBoldText from "/components/sectionBoldText";
import card from "/components/favorites/card";

export default {
  name: "favoritesMain",
  components: {
    sectionTitle,
    sectionBoldText,
    radio,
    card,
  },
  props: {
    isDisabled: {
      type: Boolean,
    },
    isLoggedIn: {
      type: Boolean,
    },
    seasonTicket: {
      type: Boolean,
    },
  },
  methods: {
    setActiveCards(data) {
      this.activeCards = data;
    },
    openPopUpBook(data) {
      this.$emit("open-popup-book", data);
    },
    addToBoughtBooks(data) {
      this.$emit("add-to-bought-books", data);
    },
  },
  data() {
    return {
      radios: ["Winter", "Spring", "Summer", "Autumn"],
      activeCards: "Winter",
      cards: [
        {
          category: "Winter",
          topTitle: "Staff Picks",
          title: "THE BOOK EATERS",
          author: "By Sunyi Dean",
          text: "An Unusual Sci-Fi Story About A Book Eater Woman Who Tries Desperately To Save Her Dangerous Mind-Eater Son From Tradition And Certain Death. Complete With Dysfunctional Family Values, Light Sapphic Romance, And A Strong, Complex Protagonist. Not For The Faint Of Heart.",
          img: require("/img/b1.jpg"),
        },
        {
          category: "Winter",
          topTitle: "Staff Picks",
          title: "CACKLE",
          author: "By Rachel Harrison",
          text: "Are Your Halloween Movies Of Choice The Witches Of Eastwick And Practical Magic? Look No Further Than Here - Where A Woman Recovering From A Breakup Moves To A Quaint Town In Upstate New York And Befriends A Beautiful Witch.",
          img: require("/img/b2.jpg"),
        },
        {
          category: "Winter",
          topTitle: "Staff Picks",
          title: "DANTE: POET OF THE SECULAR WORLD",
          author: "By Erich Auerbach",
          text: "Auerbach's Engaging Book Places The 'Comedy' Within The Tradition Of Epic, Tragedy, And Philosophy In General, Arguing For Dante's Uniqueness As One Who Raised The Individual And His Drama Of Soul Into Something Of Divine Significance—An Inspired Introduction To Dante's Main Themes.",
          img: require("/img/b3.jpg"),
        },
        {
          category: "Winter",
          topTitle: "Staff Picks",
          title: "THE LAST QUEEN",
          author: "By Clive Irving",
          text: "A Timely And Revelatory New Biography Of Queen Elizabeth (And Her Family) Exploring How The Windsors Have Evolved And Thrived As The Modern World Has Changed Around Them.",
          img: require("/img/b4.jpg"),
        },
        {
          category: "Spring",
          topTitle: "Staff Picks",
          title: "THE BODY",
          author: "By Stephen King",
          text: "Powerful Novel That Takes You Back To A Nostalgic Time, Exploring Both The Beauty And Danger And Loss Of Innocence That Is Youth.",
          img: require("/img/b5.jpg"),
        },
        {
          category: "Spring",
          topTitle: "Staff Picks",
          title: "CARRY: A MEMOIR OF SURVIVAL ON STOLEN LAND",
          author: "By Toni Jenson",
          text: "This Memoir About The Author's Relationship With Gun Violence Feels Both Expansive And Intimate, Resulting In A Lyrical Indictment Of The Way Things Are.",
          img: require("/img/b6.jpg"),
        },
        {
          category: "Spring",
          topTitle: "Staff Picks",
          title: "DAYS OF DISTRACTION",
          author: "By Alexandra Chang",
          text: "A Sardonic View Of Silicon Valley Culture, A Meditation On Race, And A Journal Of Displacement And Belonging, All In One Form-Defying Package Of Spare Prose.",
          img: require("/img/b7.jpg"),
        },
        {
          category: "Spring",
          topTitle: "Staff Picks",
          title: "DOMINICANA",
          author: "By Angie Cruz",
          text: "A Fascinating Story Of A Teenage Girl Who Marries A Man Twice Her Age With The Promise To Bring Her To America. Her Marriage Is An Opportunity For Her Family To Eventually Immigrate. For Fans Of Isabel Allende And Julia Alvarez.",
          img: require("/img/b8.jpg"),
        },
        {
          category: "Summer",
          topTitle: "Staff Picks",
          title: "CRUDE: A MEMOIR",
          author: "By Pablo Fajardo & ​​Sophie Tardy-Joubert",
          text: "Drawing And Color By Damien Roudeau | This Book Illustrates The Struggles Of A Group Of Indigenous Ecuadoreans As They Try To Sue The ChevronTexaco Company For Damage Their Oil Fields Did To The Amazon And Her People.",
          img: require("/img/b9.jpg"),
        },
        {
          category: "Summer",
          topTitle: "Staff Picks",
          title: "LET MY PEOPLE GO SURFING",
          author: "By Yvon Chouinard",
          text: "Chouinard—Climber, Businessman, Environmentalist—Shares Tales Of Courage And Persistence From His Experience Of Founding And Leading Patagonia, Inc. Full Title: Let My People Go Surfing: The Education Of A Reluctant Businessman, Including 10 More Years Of Business Unusual.",
          img: require("/img/b10.jpg"),
        },
        {
          category: "Summer",
          topTitle: "Staff Picks",
          title: "THE OCTOPUS MUSEUM: POEMS",
          author: "By Brenda Shaughnessy",
          text: "This Collection Of Bold And Scathingly Beautiful Feminist Poems Imagines What Comes After Our Current Age Of Environmental Destruction, Racism, Sexism, And Divisive Politics.",
          img: require("/img/b11.jpg"),
        },
        {
          category: "Summer",
          topTitle: "Staff Picks",
          title: "SHARK DIALOGUES: A NOVEL",
          author: "By Kiana Davenport",
          text: "An Epic Saga Of Seven Generations Of One Family Encompasses The Tumultuous History Of Hawaii As A Hawaiian Woman Gathers Her Four Granddaughters Together In An Erotic Tale Of Villains And Dreamers, Queens And Revolutionaries, Lepers And Healers.",
          img: require("/img/b12.jpg"),
        },
        {
          category: "Autumn",
          topTitle: "Staff Picks",
          title: "CASUAL CONVERSATION",
          author: "By Renia White",
          text: "White's Impressive Debut Collection Takes Readers Through And Beyond The Concepts Of Conversation And The Casual - Both What We Say To Each Other And What We Don't, Examining The Possibilities Around How We Construct And Communicate Identity.",
          img: require("/img/b13.jpg"),
        },
        {
          category: "Autumn",
          topTitle: "Staff Picks",
          title: "THE GREAT FIRE",
          author: "By Lou Ureneck",
          text: "The Harrowing Story Of An Ordinary American And A Principled Naval Officer Who, Horrified By The Burning Of Smyrna, Led An Extraordinary Rescue Effort That Saved A Quarter Of A Million Refugees From The Armenian Genocide.",
          img: require("/img/b14.jpg"),
        },
        {
          category: "Autumn",
          topTitle: "Staff Picks",
          title: "RICKEY: THE LIFE AND LEGEND",
          author: "By Howard Bryant",
          text: "With The Fall Rolling Around, One Can't Help But Think Of Baseball's Postseason Coming Up! And What Better Way To Prepare For It Than Reading The Biography Of One Of The Game's All-Time Greatest Performers, The Man Of Steal, Rickey Henderson?",
          img: require("/img/b15.jpg"),
        },
        {
          category: "Autumn",
          topTitle: "Staff Picks",
          title: "SLUG: AND OTHER STORIES",
          author: "By Megan Milks",
          text: "Exes Tegan And Sara Find Themselves Chained Together By Hairballs Of Codependency. A Father And Child Experience The Shared Trauma Of Giving Birth To Gods From Their Wounds.",
          img: require("/img/b16.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.fav-title {
  margin-top: 16px;
}

.season-text {
  margin-top: 40px;
  margin-left: 23px;
}

.cards {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 37px;
}

.active-cards {
  clip: auto;
  opacity: 1;
  min-width: 38.2%;
  min-height: 556px;
  border: 1px solid var(--c-black);
  position: relative;
  display: flex;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .fav-title:after {
    margin-top: 18px;
  }

  .season-text {
    margin-left: 22px;
  }

  .cards {
    flex-direction: column;
  }

  .active-cards {
    min-height: 1050px;
    margin: 0 auto;
  }
}
</style>
