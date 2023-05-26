<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h2 class="navigation__titel">men's collection</h2>
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'HomePage' }"
              >home/
            </router-link>
          </li>
          <li class="navigation__item">
            <a class="navigation__link--active" href="#">men </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <div>
    <div v-if="currentProduct">
      <div class="carousel-wrap">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button
              v-for="(button, index) in currentProduct.collection"
              type="button"
              :key="button"
              data-bs-target="#myCarousel"
              :data-bs-slide-to="index"
              :aria-current="index === 0 ? true : false"
              :aria-label="`Slide ${index + 1}`"
              :class="{ active: index === 0 }"
            ></button>
          </div>

          <div class="carousel-inner">
            <div
              v-for="(image, index) in currentProduct.collection"
              :key="image"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <img
                class="bd-placeholder-img carousel__img"
                :src="getImage(image)"
                alt="image"
                width="597"
                height="724"
              />
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Нет данных</p>
    </div>
  </div>

  <section>
    <div class="description">
      <div class="description__wrapper">
        <div class="description__border-wrap">
          <div class="description__title-content">
            <h2 class="description__title-pink">men collection</h2>
          </div>
          <h2 class="description__title">moschino cheap and chic</h2>
          <p class="description__text">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <p class="description__price" v-if="currentProduct">
            $ {{ currentProduct.price }}
          </p>
        </div>
        <button
          class="description__button-add btn-primary"
          @click="addProduct"
          type="button"
        >
          <span class="btn-plain-text">Add to Cart</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { productType } from "@/types/common";
import { axios } from "@/main";

export default defineComponent({
  name: "ProductPage",
  components: {},

  data() {
    return {
      productId: this.$route.params.id,
      products: [] as productType[],
    };
  },

  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
    }),

    currentProduct(): productType | null {
      const productFind = this.products.find(
        (product) => product.id === +this.productId
      );
      if (productFind) {
        return productFind;
      }
      return null;
    },
  },

  methods: {
    ...mapActions({
      addCartProduct: "cart/addCartProduct",
    }),

    addProduct() {
      this.addCartProduct(this.currentProduct);
    },

    loadProducts() {
      const url = "products.json";
      axios
        .get(url)
        .then(({ data }) => {
          this.products = data.products;
        })
        .catch(() => {
          //console.log(error);
        });
    },

    getImage(image) {
      return `${import.meta.env.BASE_URL}/img/new_product/${image}`;
    },
  },

  mounted() {
    this.loadProducts();
  },
});
</script>
