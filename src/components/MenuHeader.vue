<template>
  <nav class="header__navigation">
    <p class="header__navigation-title">menu</p>
    <ul>
      <li class="header__navigation-item">
        <p class="header__navigation-subtitle">man</p>
        <ul class="header__navigation-sublist">
          <li class="header__navigation-link link">
            <router-link :to="{ name: 'CatalogPage' }">Denim</router-link>
          </li>
          <li class="header__navigation-link link">
            <router-link :to="{ name: 'CatalogPage' }">T-Shirts</router-link>
          </li>
        </ul>
      </li>
      <li class="header__navigation-item">
        <p class="header__navigation-subtitle">woman</p>
        <ul class="header__navigation-sublist">
          <li class="header__navigation-link">
            <router-link :to="{ name: 'CatalogPage' }">Accessories</router-link>
          </li>
          <li class="header__navigation-link">
            <router-link :to="{ name: 'CatalogPage' }">Denim</router-link>
          </li>
          <li class="header__navigation-link">
            <router-link :to="{ name: 'CatalogPage' }">T-Shirts</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuHeader",
  components: {},
});
</script>
