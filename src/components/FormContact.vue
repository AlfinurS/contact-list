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
      <iconDelete></iconDelete>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { contactType } from "@/types/common";
import iconDelete from "@/components/icons/iconDelete.vue";

export default defineComponent({
  name: "FormContact",
  components: { iconDelete },
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
        surname: "",
        name: "",
        phone: "",
        email: "",
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

  watch: {
    dataProps(newValue) {
      this.form = newValue;
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
