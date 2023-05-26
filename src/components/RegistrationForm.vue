<template>
  <form class="registration__form" action="#">
    <div class="registration__form-radio">
      <label class="registration__label-name" for="form.profile[name]"
        >Your Name</label
      >
      <input
        v-model="form.profile.name"
        class="form-input registration__form-input"
        type="text"
        id="form.profile[name]"
        name="form.profile[name]"
        placeholder="First Name"
      />
      <input
        v-model="form.profile.lastName"
        class="form-input registration__form-input"
        type="text"
        id="form.profile[lastName]"
        name="form.profile[lastName]"
        placeholder="Last Name"
      />
      <div class="registration__radio">
        <label class="registration__label-male" for="form.profile[male]">
          <input
            v-model="form.profile.male"
            class="registration__radio-btn"
            type="radio"
            id="form.profile[male]"
            name="form.profile[male]"
          />
          <span>Male</span>
        </label>
        <label class="registration__label-female" for="form.profile[female]">
          <input
            v-model="form.profile.female"
            class="registration__radio-btn"
            type="radio"
            id="form.profile[female]"
            name="form.profile[female]"
          />
          <span>Female</span>
        </label>
      </div>
      <div class="registration__form-inputs">
        <label class="registration__label-name" for="form.profile[email]"
          >Login details</label
        >
        <input
          v-model="form.profile.email"
          class="form-input registration__form-input"
          type="text"
          placeholder="Email"
          id="form.profile[email]"
          name="form.profile[email]"
        />
        <input
          v-model="form.profile.password"
          class="form-input registration__form-input"
          type="text"
          id="form.profile[password]"
          name="form.profile[password]"
          placeholder="Password"
        />
        <p class="registration__form-text">
          Please use 8 or more characters, with at least 1 number and a mixture
          of uppercase and lowercase letters
        </p>
        <button
          class="btn-plain registration__btn"
          @click="sendForm"
          :disabled="isDisabled"
          type="button"
        >
          <span class="btn-plain-text registration__btn-text">join now</span>
          <img
            class="btn-plain-icon"
            src="/img/svg/arrow_long.svg"
            alt="bag"
            width="17"
            height="10"
          />
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const initForm = () => ({
  profile: {
    name: "",
    lastName: "",
    male: !null,
    female: !null,
    email: "",
    password: "",
  },
});

export default defineComponent({
  name: "RegistrationForm",
  components: {},

  data() {
    return {
      form: initForm(),
      url: `profile.json`,
    };
  },

  methods: {
    sendForm() {
      console.log(this.form);
    },
    reset() {
      this.form = initForm();
    },
  },

  computed: {
    isDisabled() {
      if (
        this.form.profile.name === "" ||
        this.form.profile.lastName === "" ||
        this.form.profile.male! == null ||
        this.form.profile.female! == null ||
        this.form.profile.email === "" ||
        this.form.profile.password === ""
      ) {
        return true;
      }
      return false;
    },
  },
});
</script>
