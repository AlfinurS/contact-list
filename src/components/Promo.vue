<template>
  <img
    class="promo__picture"
    src="/img/new_product/main_2.webp"
    alt="man"
    width="800"
    height="765"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Promo",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
