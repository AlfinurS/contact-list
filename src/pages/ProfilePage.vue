<template>
  <section class="navigation">
    <div class="navigation__wrapper">
      <h2 class="navigation__titel">registration</h2>
      <nav>
        <ul class="navigation__list">
          <li class="navigation__item">
            <router-link class="navigation__link" :to="{ name: 'HomePage' }"
              >home/
            </router-link>
          </li>
          <li class="navigation__item">
            <a class="navigation__link navigation__link--active" href="#"
              >registration</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="registration box">
    <div class="registration__wrapper">
      <RegistrationForm></RegistrationForm>
      <div class="registration__content">
        <h2 class="registration__titel">loyalty has its perks</h2>
        <p class="registration__text">
          Get in on the loyalty program where you can earn points and unlock
          serious perks. Starting with these as soon as you join:
        </p>
        <ul class="registration__list">
          <li class="registration__item">
            <img
              class="btn-plain-icon"
              src="/img/svg/check-mark.svg"
              alt="check"
              width="20"
              height="16"
            />
            <span>15% off welcome offer</span>
          </li>
          <li class="registration__item">
            <img
              class="btn-plain-icon"
              src="/img/svg/check-mark.svg"
              alt="check"
              width="20"
              height="16"
            />
            <span>Free shipping, returns and exchanges on all orders</span>
          </li>
          <li class="registration__item">
            <img
              class="btn-plain-icon"
              src="/img/svg/check-mark.svg"
              alt="check"
              width="20"
              height="16"
            />
            <span>$10 off a purchase on your birthday</span>
          </li>
          <li class="registration__item">
            <img
              class="btn-plain-icon"
              src="/img/svg/check-mark.svg"
              alt="check"
              width="20"
              height="16"
            />
            <span>Early access to products</span>
          </li>
          <li class="registration__item">
            <img
              class="btn-plain-icon"
              src="/img/svg/check-mark.svg"
              alt="check"
              width="20"
              height="16"
            />
            <span>Exclusive offers & rewards</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationForm from "@/components/RegistrationForm.vue";

export default defineComponent({
  name: "ProfilePage",
  components: {
    RegistrationForm,
  },
});
</script>
