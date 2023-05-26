<template>
  <div class="catalog__item-wrapper">
    <router-link
      :to="{ name: 'ProductPage', params: { id: dataProps.id } }"
      class="catalog__image-wrapper"
    >
      <img
        class="catalog__image"
        :src="`img/new_product/${dataProps.image}`"
        :alt="dataProps.title"
      />
      <div class="catalog__hover">
        <div class="catalog__add-wrapper"></div>
      </div>
    </router-link>
  </div>
  <div class="catalog__content">
    <p class="catalog__content-name">{{ dataProps.title }}</p>
    <p class="catalog__content-text">
      Known for her sculptural takes on traditional tailoring, Australian
      arbiter of cool Kym Ellery teams up with Moda Operandi.
    </p>
    <div class="catalog__content-price">
      $ {{ dataProps.price }}
      <BtnAddComponent @click="addProduct(dataProps)"></BtnAddComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapActions, mapGetters } from "vuex";
import { productType } from "@/types/common";
import { productConst } from "@/constants/common";
import BtnAddComponent from "@/components/BtnAddComponent.vue";

export default defineComponent({
  name: "ItemProduct",
  components: {
    BtnAddComponent,
  },
  props: {
    dataProps: {
      type: Object as PropType<productType>,
      default: () => productConst,
    },
  },

  data() {
    return {
      products: [] as productType[],
    };
  },

  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
    }),
  },

  methods: {
    ...mapActions({
      addCartProduct: "cart/addCartProduct",
    }),

    addProduct(dataProps) {
      this.addCartProduct(dataProps);
    },
  },
});
</script>
