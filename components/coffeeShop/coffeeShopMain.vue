<template>
  <div>
    <sectionTitle sectionTitle="Coffee Shop" />
    <sectionText
      class="coffee-text"
      sectionText="In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation.You can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery."
    />
    <div class="shop">
      <div class="coffeeTea">
        <sectionTitle class="coffeeTea-title" sectionTitle="Coffee & Tea" />
        <coffeeMenu :coffees="coffees" />
      </div>
      <div class="dessertsCakes">
        <sectionTitle
          class="dessertsCakes-title"
          sectionTitle="Desserts & Cakes"
        />
        <dessertMenu :desserts="desserts" />
      </div>
    </div>
  </div>
</template>

<script>
import sectionTitle from "/components/sectionTitle";
import sectionText from "/components/sectionText";
import coffeeMenu from "/components/coffeeShop/coffeeMenu";
import dessertMenu from "/components/coffeeShop/dessertMenu";

export default {
  name: "coffeeShopMain",
  components: {
    sectionTitle,
    sectionText,
    coffeeMenu,
    dessertMenu,
  },
  data() {
    return {
      coffees: [
        {
          name: "Cold Brew Coffee",
          price: "$3",
        },
        {
          name: "French Press Pot",
          price: "$5",
        },
        {
          name: "Espresso",
          price: "$2",
        },
        {
          name: "Cappuccino",
          price: "$4",
        },
        {
          name: "Hot Tea",
          price: "$2",
        },
        {
          name: "Cold Tea",
          price: "$2",
        },
      ],
      desserts: [
        {
          name: "Forest Gateau",
          price: "$16",
        },
        {
          name: "Blue Moon",
          price: "$16",
        },
        {
          name: "Truffle Cake",
          price: "$15",
        },
        {
          name: "Chocolate Cake",
          price: "$18",
        },
        {
          name: "Poet’s Dream Cake",
          price: "$16",
        },
        {
          name: "Pineapple Cake",
          price: "$14",
        },
      ],
    };
  },
};
</script>

<style scoped>
.coffee-text {
  font-family: var(--f-inter);
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  line-height: 41px;
  letter-spacing: 2px;
  margin-top: 40px;
}

.shop {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.coffeeTea-title,
.dessertsCakes-title {
  color: var(--c-gold);
  font-family: var(--f-forum);
  font-size: 40px;
  font-weight: normal;
  margin-top: 9px;
  letter-spacing: 2px;
}

.coffeeTea-title {
  text-align: start;
  margin-left: 20px;
  margin-bottom: 0px;
}

.dessertsCakes-title {
  margin-right: 21px;
  text-align: end;
  margin-bottom: 10px;
}

.coffeeTea-title:after,
.dessertsCakes-title:after {
  display: none;
}

@media (min-width: 1px) and (max-width: 1058px) {
  .shop {
    justify-content: center;
  }

  .coffee-text {
    margin-left: 20px;
    margin-right: 20px;
  }

  .dessertsCakes {
    margin-top: 25px;
  }
}
</style>
