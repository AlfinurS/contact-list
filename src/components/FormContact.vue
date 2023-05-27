<template>
  <div class="contact">
    <div class="contact__wrapper">
      <input
        @change="sendData"
        v-model="form.surname"
        class="contact__input"
        type="text"
        placeholder="Фамилия"
      />
    </div>
    <div class="contact__wrapper">
      <input
        @change="sendData"
        v-model="form.name"
        class="contact__input"
        type="text"
        placeholder="Имя"
      />
    </div>
    <div class="contact__wrapper">
      <input
        @change="sendData"
        v-model="form.phone"
        class="contact__input"
        type="text"
        placeholder="Телефон"
      />
    </div>
    <div class="contact__wrapper">
      <input
        @change="sendData"
        v-model="form.email"
        class="contact__input"
        type="text"
        placeholder="E-mail"
      />
    </div>
    <div @click="deleteContact" class="button__wrapper-close link">
      <img src="/close.png" alt="close" width="18" height="18" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { contactType } from "@/types/common";

export default defineComponent({
  name: "FormContact",
  components: {},
  props: {
    dataProps: {
      type: Object as PropType<contactType>,
      default: () => ({}),
    },
  },

  emits: ["sendData", "deleteContact"],

  data() {
    return {
      form: {
        id: null,
        surname: null,
        name: null,
        phone: null,
        email: null,
      } as contactType,
    };
  },

  methods: {
    deleteContact() {
      this.$emit("deleteContact", this.form);
    },

    sendData() {
      this.$emit("sendData", this.form);
    },
  },

  created() {
    this.form = JSON.parse(JSON.stringify(this.dataProps));
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
</style>
