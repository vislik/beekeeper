<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const milestones = [
  {
    year: '2019',
    text: 'Появились первые два улья и первые ошибки: перегрев и поздняя подкормка.'
  },
  {
    year: '2021',
    text: 'Переход на плановый осмотр семей и учёт состояния маток по сезону.'
  },
  {
    year: '2023',
    text: 'Расширение пасеки до устойчивого объёма, фокус на здоровье семей и профилактике.'
  },
  {
    year: '2025',
    text: 'Запуск этого сайта как публичного дневника практики и наблюдений.'
  }
];
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle subtitle="Обо мне и пасеке" title="Практика, основанная на системном подходе" />

    <div class="two-column">
      <article class="about-card" v-reveal>
        <h3>Подход</h3>
        <p>
          Я веду пасеку как инженерный проект: фиксирую данные осмотров, сравниваю силу семей,
          слежу за кормовыми запасами и заранее планирую сезонные работы.
        </p>
        <p>
          Главный принцип: меньше резких вмешательств, больше наблюдения и своевременной
          профилактики.
        </p>
      </article>

      <article class="about-card" v-reveal>
        <h3>Ценности</h3>
        <ul>
          <li>бережное отношение к пчёлам и среде;</li>
          <li>прозрачные практики ухода без лишнего стресса для семьи;</li>
          <li>постоянное обучение и обмен опытом с пчеловодами.</li>
        </ul>
      </article>
    </div>

    <div class="timeline" v-stagger>
      <article v-for="item in milestones" :key="item.year" class="timeline-item stagger-item">
        <p class="timeline-year">{{ item.year }}</p>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>
