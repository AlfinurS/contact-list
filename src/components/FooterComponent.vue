<template>
  <footer>
    <section class="footer">
      <div class="footer__box">
        <div class="footer__wrapper">
          <div class="footer__wrap">
            <div class="footer__content">
              <div class="footer__content-wrap">
                <img class="footer__foto" src="/img/svg/ava.svg" alt="foto" />
                <p class="footer__text">
                  «Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                  pulvinar purus condimentum»
                </p>
              </div>
            </div>
            <div class="footer__sub">
              <h2 class="footer__titel">SUBSCRIBE</h2>
              <p class="footer__headline">FOR OUR NEWLETTER AND PROMOTION</p>
              <form class="footer__form" action="#">
                <input
                  class="footer__email"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button class="footer__button" type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__holder">
        <div class="footer__holder-box">
          <div class="footer__holder-wrapper">
            <span class="footer__holder-text"
              >© 2023 Brand All Rights Reserved.</span
            >
            <ul class="footer__list">
              <li class="footer__item">
                <a class="footer__link" href="#">
                  <img
                    class="footer__link-icon"
                    src="/img/svg/2.svg"
                    alt="search"
                    width="32"
                    height="32"
                /></a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">
                  <img
                    class="footer__link-icon"
                    src="/img/svg/4.svg"
                    alt="search"
                    width="32"
                    height="32"
                /></a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">
                  <img
                    class="footer__link-icon"
                    src="/img/svg/5.svg"
                    alt="search"
                    width="32"
                    height="32"
                /></a>
              </li>
              <li class="footer__item">
                <a class="footer__link" href="#">
                  <img
                    class="footer__link-icon"
                    src="/img/svg/6.svg"
                    alt="search"
                    width="32"
                    height="32"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
  components: {},
});
</script>
