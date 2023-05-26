<template>
  <button class="header__button" type="button">
    <img src="/img/svg/log_in.svg" alt="log" width="27" height="28" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "iconProfile",
  components: {},
  props: {
    src: {
      type: String,
      default: "",
    },
  },
});
</script>
