<script setup>
import { computed, onUnmounted, watch } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  items: {
    type: Array,
    default: () => []
  },
  activeIndex: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['close', 'prev', 'next', 'jump']);

const currentItem = computed(() => props.items[props.activeIndex] ?? null);

const onKeydown = (event) => {
  if (!props.isOpen) return;

  if (event.key === 'Escape') emit('close');
  if (event.key === 'ArrowLeft') emit('prev');
  if (event.key === 'ArrowRight') emit('next');
};

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeydown);
      return;
    }

    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKeydown);
  }
);

onUnmounted(() => {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр фото">
      <button class="lightbox-close" type="button" aria-label="Закрыть просмотр" @click="emit('close')">
        ✕
      </button>

      <button class="lightbox-nav prev" type="button" aria-label="Предыдущее фото" @click="emit('prev')">
        ‹
      </button>
      <button class="lightbox-nav next" type="button" aria-label="Следующее фото" @click="emit('next')">
        ›
      </button>

      <figure v-if="currentItem" class="lightbox-figure">
        <img :src="currentItem.full ?? currentItem.src" :alt="currentItem.alt" />
        <figcaption>
          <p class="lightbox-title">{{ currentItem.title }}</p>
          <p class="lightbox-caption">{{ currentItem.caption }}</p>
          <p class="lightbox-location">{{ currentItem.location }}</p>
          <p class="lightbox-counter">{{ activeIndex + 1 }} / {{ items.length }}</p>
        </figcaption>
      </figure>

      <div class="lightbox-thumbs" aria-label="Миниатюры">
        <button
          v-for="(item, index) in items"
          :key="item.title"
          class="thumb"
          type="button"
          :class="{ active: index === activeIndex }"
          :aria-label="`Открыть фото ${index + 1}`"
          @click="emit('jump', index)"
        >
          <img :src="item.src" :alt="item.alt" loading="lazy" decoding="async" />
        </button>
      </div>
    </div>
  </Teleport>
</template>
