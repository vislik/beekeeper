<script setup>
import { gsap } from 'gsap';
import { onMounted, onUnmounted, ref } from 'vue';
import { useReducedMotion } from '@/composables/useReducedMotion';

const heroRef = ref(null);
const layerBack = ref(null);
const layerMid = ref(null);
const layerFront = ref(null);
const floatTl = ref(null);
const { reducedMotion } = useReducedMotion();

const handlePointer = (event) => {
  if (reducedMotion.value || !heroRef.value) return;

  const bounds = heroRef.value.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

  gsap.to(layerBack.value, { x: x * 10, y: y * 8, duration: 0.7, ease: 'power3.out' });
  gsap.to(layerMid.value, { x: x * 22, y: y * 16, duration: 0.8, ease: 'power3.out' });
  gsap.to(layerFront.value, { x: x * 34, y: y * 24, duration: 0.9, ease: 'power3.out' });
};

const handleScroll = () => {
  if (reducedMotion.value || !heroRef.value) return;
  const offset = window.scrollY * 0.08;
  gsap.to(layerBack.value, { y: offset, duration: 0.5, overwrite: true });
  gsap.to(layerMid.value, { y: offset * 1.2, duration: 0.5, overwrite: true });
  gsap.to(layerFront.value, { y: offset * 1.5, duration: 0.5, overwrite: true });
};

onMounted(() => {
  if (reducedMotion.value) return;

  heroRef.value?.addEventListener('pointermove', handlePointer);
  window.addEventListener('scroll', handleScroll, { passive: true });

  floatTl.value = gsap.timeline({ repeat: -1, yoyo: true });
  floatTl.value
    .to(layerBack.value, { y: '-=12', duration: 3.2, ease: 'sine.inOut' }, 0)
    .to(layerMid.value, { y: '-=16', duration: 2.6, ease: 'sine.inOut' }, 0)
    .to(layerFront.value, { y: '-=20', duration: 2.2, ease: 'sine.inOut' }, 0);
});

onUnmounted(() => {
  heroRef.value?.removeEventListener('pointermove', handlePointer);
  window.removeEventListener('scroll', handleScroll);
  floatTl.value?.kill();
});
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero-layers" aria-hidden="true">
      <div ref="layerBack" class="layer layer-back"></div>
      <div ref="layerMid" class="layer layer-mid"></div>
      <div ref="layerFront" class="layer layer-front"></div>
    </div>

    <div class="container hero-content">
      <p class="hero-kicker">Жизнь пасеки в деталях</p>
      <h1>Пчеловодство как спокойная инженерия природы</h1>
      <p>
        Делюсь опытом ухода за семьями, сезонным планированием и практиками, которые помогают
        сохранить здоровье пчёл и стабильный сбор мёда.
      </p>
      <div class="hero-actions">
        <RouterLink to="/care" class="btn btn-primary">Изучить уход</RouterLink>
        <RouterLink to="/calendar" class="btn btn-ghost">Смотреть календарь</RouterLink>
      </div>
    </div>
  </section>
</template>
