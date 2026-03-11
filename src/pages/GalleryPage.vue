<script setup>
import { ref } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';
import GalleryLightbox from '@/components/GalleryLightbox.vue';
import { galleryItems } from '@/data/galleryItems';

const isOpen = ref(false);
const activeIndex = ref(0);

const openLightbox = (index) => {
  activeIndex.value = index;
  isOpen.value = true;
};

const closeLightbox = () => {
  isOpen.value = false;
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % galleryItems.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + galleryItems.length) % galleryItems.length;
};

const jumpTo = (index) => {
  activeIndex.value = index;
};
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle subtitle="Галерея" title="Фотодневник пасеки с полноэкранным просмотром" />

    <p class="gallery-note" v-reveal>
      Откройте любую карточку, чтобы листать фотографии в полноэкранном режиме.
    </p>

    <div class="gallery-grid" v-stagger>
      <button
        v-for="(photo, index) in galleryItems"
        :key="photo.title"
        type="button"
        class="gallery-card stagger-item"
        :aria-label="`Открыть фото: ${photo.title}`"
        @click="openLightbox(index)"
      >
        <img :src="photo.src" :alt="photo.alt" loading="lazy" decoding="async" />
        <span class="gallery-card-overlay">
          <strong>{{ photo.title }}</strong>
          <small>{{ photo.location }}</small>
        </span>
      </button>
    </div>

    <GalleryLightbox
      :is-open="isOpen"
      :items="galleryItems"
      :active-index="activeIndex"
      @close="closeLightbox"
      @next="nextSlide"
      @prev="prevSlide"
      @jump="jumpTo"
    />
  </section>
</template>
