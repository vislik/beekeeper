import { gsap } from 'gsap';

const shouldReduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function createObserver(element, callback) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(element);
  return observer;
}

export const revealDirective = {
  mounted(el, binding) {
    if (shouldReduceMotion()) {
      el.classList.add('is-visible');
      return;
    }

    gsap.set(el, { autoAlpha: 0, y: 24 });

    const observer = createObserver(el, (target) => {
      gsap.to(target, {
        autoAlpha: 1,
        y: 0,
        duration: binding.value?.duration ?? 0.75,
        ease: 'power3.out'
      });
    });

    el._revealObserver = observer;
  },
  unmounted(el) {
    el._revealObserver?.disconnect();
  }
};

export const staggerDirective = {
  mounted(el, binding) {
    const selector = binding.value?.selector ?? '.stagger-item';
    const children = Array.from(el.querySelectorAll(selector));

    if (!children.length) return;

    if (shouldReduceMotion()) {
      children.forEach((child) => child.classList.add('is-visible'));
      return;
    }

    gsap.set(children, { autoAlpha: 0, y: 24 });

    const observer = createObserver(el, () => {
      gsap.to(children, {
        autoAlpha: 1,
        y: 0,
        stagger: binding.value?.stagger ?? 0.12,
        duration: binding.value?.duration ?? 0.7,
        ease: 'power2.out'
      });
    });

    el._staggerObserver = observer;
  },
  unmounted(el) {
    el._staggerObserver?.disconnect();
  }
};
