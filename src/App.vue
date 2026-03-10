<script setup>
import { RouterView } from 'vue-router';
import { gsap } from 'gsap';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import { useReducedMotion } from '@/composables/useReducedMotion';

const { reducedMotion } = useReducedMotion();

const onEnter = (el, done) => {
  if (reducedMotion.value) {
    done();
    return;
  }

  gsap.fromTo(
    el,
    { autoAlpha: 0, y: 18, filter: 'blur(5px)' },
    { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.45, ease: 'power2.out', onComplete: done }
  );
};

const onLeave = (el, done) => {
  if (reducedMotion.value) {
    done();
    return;
  }

  gsap.to(el, {
    autoAlpha: 0,
    y: -16,
    filter: 'blur(3px)',
    duration: 0.35,
    ease: 'power2.in',
    onComplete: done
  });
};
</script>

<template>
  <div class="app-shell">
    <SiteHeader />

    <RouterView v-slot="{ Component, route }">
      <Transition mode="out-in" @enter="onEnter" @leave="onLeave">
        <main id="main-content" :key="route.fullPath" class="route-container" tabindex="-1">
          <component :is="Component" />
        </main>
      </Transition>
    </RouterView>

    <SiteFooter />
  </div>
</template>
