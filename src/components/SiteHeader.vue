<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import beeLogo from '@/assets/images/bee-logo.svg';

const route = useRoute();
const isOpen = ref(false);

const links = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'О пасеке' },
  { to: '/care', label: 'Уход' },
  { to: '/calendar', label: 'Календарь' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/blog', label: 'Блог' },
  { to: '/contacts', label: 'Контакты' }
];

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  }
);
</script>

<template>
  <header class="site-header">
    <a href="#main-content" class="skip-link">Перейти к контенту</a>

    <div class="container header-row">
      <RouterLink to="/" class="brand" aria-label="На главную">
        <span class="brand-mark" aria-hidden="true">
          <img :src="beeLogo" alt="" />
        </span>
        <div>
          <p class="brand-top">Медовый путь</p>
          <p class="brand-sub">Авторская пасека</p>
        </div>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        aria-label="Открыть меню"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="main-nav" :class="{ open: isOpen }" aria-label="Главное меню">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
