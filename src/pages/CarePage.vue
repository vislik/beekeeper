<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const practices = [
  'Регулярный осмотр силы семьи и поведения пчёл.',
  'Контроль вентиляции, влажности и чистоты доньев.',
  'Проверка кормовых запасов перед резкими похолоданиями.',
  'Профилактика роения через расширение пространства улья.'
];

const seasonal = [
  {
    season: 'Весна',
    tip: 'После облёта оценивайте матку и силу расплода, не расширяйте гнездо слишком рано.'
  },
  {
    season: 'Лето',
    tip: 'Следите за перегревом ульев, обеспечивайте тень и стабильный доступ к воде.'
  },
  {
    season: 'Осень',
    tip: 'Проводите ревизию кормов и сокращайте гнездо под реальную силу семьи.'
  },
  {
    season: 'Зима',
    tip: 'Минимизируйте беспокойство, контролируйте вентиляцию и акустическое состояние клуба.'
  }
];

const tools = ['Дымарь', 'Стамеска', 'Щётка', 'Защитный костюм', 'Весы для контроля кормов'];
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
  </section>
</template>
