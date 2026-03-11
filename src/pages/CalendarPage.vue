<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const months = [
  { period: 'Янв–Фев', task: 'Контроль зимовки: вентиляция, шум семьи, отсутствие сырости.' },
  { period: 'Мар–Апр', task: 'Первый весенний осмотр, чистка доньев, оценка кормов.' },
  { period: 'Май–Июн', task: 'Расширение гнезда, профилактика роения, контроль матки.' },
  { period: 'Июл–Авг', task: 'Основной медосбор, контроль перегрева и водопоя.' },
  { period: 'Сен–Окт', task: 'Формирование гнезда на зиму, кормовые корректировки.' },
  { period: 'Ноя–Дек', task: 'Минимум вмешательств, контроль состояния пасеки по внешним признакам.' }
];
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle
      subtitle="Календарь работ"
      title="Помесячный план действий для ритмичной работы пасеки"
    />

    <div class="calendar-grid" v-stagger>
      <article v-for="item in months" :key="item.period" class="calendar-card stagger-item">
        <p class="calendar-period">{{ item.period }}</p>
        <p>{{ item.task }}</p>
      </article>
    </div>
  </section>
</template>
