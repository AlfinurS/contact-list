<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h2 class="navigation__titel">shopping cart</h2>
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'HomePage' }"
              >home/
            </router-link>
          </li>
          <li class="navigation__item">
            <a class="navigation__link" href="#"></a>
          </li>
          <li class="navigation__item">
            <a class="navigation__link navigation__link--active" href="#"
              >shopping cart</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="cart box">
    <div class="cart__wrapper">
      <div class="cart__product">
        <div v-if="cartProducts.length === 0">
          <p class="cart__content-item">Cart is empty</p>
          <span class="cart__content-item"
            >Select products to continue shopping</span
          >
        </div>
        <ul class="cart__list">
          <li
            class="cart__item"
            v-for="product in cartProducts"
            :key="product.id"
          >
            <router-link
              :to="{ name: 'ProductPage', params: { id: product.id } }"
              class="cart__image-wrapper link"
            >
              <img
                class="cart__image"
                :src="`img/new_product/${product.image}`"
                :alt="product.title"
              />
            </router-link>

            <div class="cart__content-wrapp">
              <div class="cart__name-wrapp">
                {{ product.title }}
              </div>
              <ul class="cart__content-list">
                <li class="cart__content-item">
                  Price:
                  <span class="cart__content-pink">$ {{ product.price }}</span>
                </li>
                <li class="cart__content-item">
                  Total price:
                  <span class="cart__content-pink"
                    >$ {{ product.price * product.quantity }}</span
                  >
                </li>
                <li class="cart__content-item cart__content-item--count">
                  Quantity:
                  <div class="cart__item-btns">
                    <button
                      @click="deleteProduct(product)"
                      class="cart__btn"
                      type="button"
                    >
                      <img
                        src="/img/svg/ic_round-minus.svg"
                        alt="minus"
                        width="22"
                        height="22"
                      />
                    </button>
                    <span class="cart__content-text">{{
                      product.quantity
                    }}</span>
                    <button
                      @click="addProduct(product)"
                      class="cart__btn"
                      type="button"
                    >
                      <img
                        src="/img/svg/ic_round-plus.svg"
                        alt="plus"
                        width="22"
                        height="22"
                      />
                    </button>
                  </div>
                </li>
              </ul>
              <button
                class="cart__close-img link"
                type="button"
                @click="removeProduct(product)"
              >
                <img
                  src="/img/svg/close.svg"
                  alt="close"
                  width="16"
                  height="16"
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart__form-box" v-if="cartProducts.length !== 0">
        <form action="#" class="form">
          <fieldset class="form-fieldest">
            <legend class="form-headline">shipping adress</legend>
            <input
              class="form-input cart__form-input"
              type="text"
              placeholder="Bangladesh"
            />
            <input
              class="form-input cart__form-input"
              type="text"
              placeholder="State"
            />
            <input
              class="form-input cart__form-input"
              type="text"
              placeholder="Postcode / Zip"
            />
            <button class="form-btn cart__btn-small link" type="button">
              get a quote
            </button>
          </fieldset>
        </form>
        <div class="cart__order-wrapp">
          <div class="cart__order-box">
            <div class="cart__order">
              <div class="cart__text-wrapp cart__text-wrapp--end">
                <span class="cart__order-text">grand total</span>
                <p
                  class="cart__order-text cart__order-pink"
                  v-if="renderCart !== 0"
                >
                  $ {{ renderCart }}
                </p>
              </div>
            </div>
          </div>
          <button class="btn-primary cart__submit" type="button">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";
import { productType } from "@/types/common";
import { productConst } from "@/constants/common";

export default defineComponent({
  name: "CartPage",
  components: {},

  props: {
    dataProps: {
      type: Object as PropType<productType>,
      default: () => productConst,
    },
  },

  data() {
    return {
      products: [] as productType[],
      cart: [],
    };
  },

  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
    }),

    renderCart() {
      let sumCart = 0;
      this.cartProducts.forEach((product) => {
        sumCart = sumCart + product.price * product.quantity;
      });
      return sumCart;
    },
  },

  methods: {
    ...mapActions({
      addCartProduct: "cart/addCartProduct",
      deleteCartProduct: "cart/deleteCartProduct",
      removeCartProduct: "cart/removeCartProduct",
    }),

    addProduct(product) {
      this.addCartProduct(product);
    },

    deleteProduct(product) {
      this.deleteCartProduct(product);
    },

    removeProduct(product) {
      this.removeCartProduct(product);
    },
  },
});
</script>
