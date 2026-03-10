import { onMounted, onUnmounted, ref } from 'vue';

export function useReducedMotion() {
  const reducedMotion = ref(false);
  let mediaQuery;

  const update = () => {
    reducedMotion.value = Boolean(mediaQuery?.matches);
  };

  onMounted(() => {
    mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    update();
    mediaQuery.addEventListener('change', update);
  });

  onUnmounted(() => {
    mediaQuery?.removeEventListener('change', update);
  });

  return { reducedMotion };
}
