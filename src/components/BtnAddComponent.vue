<template>
  <div class="btn-plain">
    <img src="/img/svg/cart.svg" alt="log" width="20" height="20" />
    <span>Add to Cart</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BtnAddComponent",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
