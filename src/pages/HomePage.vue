<template>
  <section>
    <div class="promo">
      <router-link :to="{ name: 'CatalogPage' }" class="promo__wrapp">
        <Promo></Promo>
      </router-link>

      <div class="promo__content">
        <div class="promo__content-all">
          <div class="promo__content-headline">
            <h2 class="promo__content-titel text-focus-in">the brand</h2>
            <span class="promo__text text-focus-in">of luxerious</span>
            <span class="promo__text promo__text--pink text-focus-in"
              >fashion</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="stock box">
    <div class="stock__box">
      <ul class="stock__list">
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">30% OFF</p>
            <p class="stock__pink">for women</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini1.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">hot deal</p>
            <p class="stock__pink">for men</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini2.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card">
          <div class="stock__content">
            <p class="stock__text">new arrivals</p>
            <p class="stock__pink">for kids</p>
          </div>
          <a href="#" class="stock__item-link">
            <img
              class="stock__image"
              src="/img/banner_mini3.png"
              alt="man"
              width="360"
              height="260"
            />
          </a>
        </li>
        <li class="stock__card stock__card--wide">
          <div class="stock__content">
            <p class="stock__text">luxirous & trendy</p>
            <p class="stock__pink">accesories</p>
          </div>
          <a href="#" class="stock__link-wide">
            <picture class="">
              <source
                srcset="/img/banner_small.jpg"
                media="(max-width: 1199px)"
              />
              <source srcset="/img/banner.png" media="(min-width: 1200px)" />
              <img class="stock__image" src="/img/banner.png" alt="man" />
            </picture>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <section class="catalog box">
    <h2 class="catalog__headline">Fetured Items</h2>
    <p class="catalog__text">
      Shop for items based on what we featured in this week
    </p>
    <ProductsList></ProductsList>

    <router-link
      :to="{ name: 'CatalogPage' }"
      class="btn-primary catalog__btn-more"
    >
      Browse All Product
    </router-link>
  </section>
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
import Promo from "@/components/Promo.vue";
import ProductsList from "@/components/ProductsList.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    Promo,
    ProductsList,
  },
});
</script>
