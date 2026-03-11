<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const practices = [
  'Регулярный осмотр силы семьи и поведения пчёл без лишнего стресса.',
  'Контроль вентиляции, влажности и чистоты доньев в течение сезона.',
  'Проверка кормовых запасов перед похолоданиями и зимовкой.',
  'Аккуратная профилактика роения через расширение пространства улья.'
];

const seasonal = [
  {
    season: 'Весна',
    tip: 'После облёта оценивайте матку и расплод, не расширяйте гнездо раньше времени.'
  },
  {
    season: 'Лето',
    tip: 'Следите за перегревом: вода, тень и мягкий режим осмотров в жаркие дни.'
  },
  {
    season: 'Осень',
    tip: 'Проводите ревизию кормов и формируйте гнездо под реальную силу семьи.'
  },
  {
    season: 'Зима',
    tip: 'Минимум вмешательств: контроль вентиляции и спокойного состояния клуба.'
  }
];

const tools = ['Дымарь', 'Стамеска', 'Щётка', 'Защитный костюм', 'Весы для контроля кормов'];

const quickFacts = [
  { value: '33–36°C', text: 'обычная температура в семье летом.' },
  { value: '20–22°C', text: 'температура пчелиного клуба зимой.' },
  { value: '0,75–3,5 кг', text: 'может приносить семья за день хорошего медосбора.' },
  { value: '10 000–15 000', text: 'рабочих пчёл в сильной семье ежедневно вылетают за нектаром.' }
];
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle subtitle="Пчёлы и уход" title="Базовые практики для стабильной и здоровой пасеки" />

    <article class="content-card" v-reveal>
      <h3>Базовые практики</h3>
      <ul>
        <li v-for="item in practices" :key="item">{{ item }}</li>
      </ul>
    </article>

    <div class="season-grid" v-stagger>
      <article v-for="item in seasonal" :key="item.season" class="season-card stagger-item">
        <h3>{{ item.season }}</h3>
        <p>{{ item.tip }}</p>
      </article>
    </div>

    <article class="content-card" v-reveal>
      <h3>Набор инструментов</h3>
      <div class="chip-row">
        <span v-for="tool in tools" :key="tool" class="chip">{{ tool }}</span>
      </div>
    </article>

    <div class="reason-grid" v-stagger>
      <article v-for="fact in quickFacts" :key="fact.text" class="reason-card stagger-item">
        <p class="fact-value">{{ fact.value }}</p>
        <p>{{ fact.text }}</p>
      </article>
    </div>
  </section>
</template>
