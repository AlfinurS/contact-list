<template>
  <el-button>button</el-button>
  <ElButton type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact",
  components: {},

  data() {
    return {};
  },
});
</script>
