<template>
  <div class="header__logo">
    <img src="/img/svg/logo.svg" alt="logo" width="44" height="38" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Logo",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
