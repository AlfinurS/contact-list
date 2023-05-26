<template>
  <div class="catalog goods__card">
    <ul class="catalog__list">
      <li
        class="catalog__item"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <ItemProduct :dataProps="product"></ItemProduct>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemProduct from "@/components/ItemProduct.vue";
import { axios } from "@/main";
import { productType } from "@/types/common";

export default defineComponent({
  name: "ProductsList",
  components: {
    ItemProduct,
  },

  data() {
    return {
      search: "",
      products: [] as productType[],
    };
  },

  computed: {
    filteredProducts(): productType[] {
      if (this.search !== "") {
        const regexp = new RegExp(this.search, "i");
        const filtered = this.products.filter((product) =>
          regexp.test(product.title)
        );
        return filtered;
      }
      return this.products;
    },
  },

  methods: {
    loadProducts() {
      const url = "products.json";
      axios
        .get(url)
        .then(({ data }) => {
          this.products = data.products;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    //console.log("ok");
    this.loadProducts();
  },
});
</script>
