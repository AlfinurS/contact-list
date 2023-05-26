<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h2 class="navigation__titel">Denim</h2>
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'HomePage' }"
              >home/
            </router-link>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#">men /</a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link navigation__link--active" href="#"
              >Denim</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <div class="goods__box"><ProductsList></ProductsList></div>

  <section class="advantage">
    <div class="advantage__wrapp">
      <div class="advantage__delivery">
        <img class="advantage__pic" src="/img/svg/icon1.svg" alt="delivery" />
        <h2 class="advantage__titel">Free Delivery</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="advantage__sales">
        <img class="advantage__pic" src="/img/svg/icon2.svg" alt="sales" />
        <h2 class="advantage__titel">Sales & discounts</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="advantage__assurance">
        <img class="advantage__pic" src="/img/svg/icon3.svg" alt="assurance" />
        <h2 class="advantage__titel">Quality assurance</h2>
        <p class="advantage__text">
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsList from "@/components/ProductsList.vue";

export default defineComponent({
  name: "CatalogPage",
  components: {
    ProductsList,
  },
});
</script>
