<script setup>
import HeroParallax from '@/components/HeroParallax.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const facts = [
  { value: '30 000–60 000', label: 'рабочих пчёл в сильной семье в мае–июне' },
  { value: '35°C', label: 'оптимальная температура для здорового расплода' },
  { value: '20–30', label: 'вылетов в день делает активная рабочая пчела' },
  { value: '3 кг', label: 'нектара требуется, чтобы получить 1 кг мёда' }
];

const reasons = [
  {
    title: 'Натуральный подход',
    text: 'На пасеке не используются антибиотики, бипин, амитраз и сахарные подкормки.'
  },
  {
    title: 'Забота о семье',
    text: 'Работа строится на бережном осмотре, природных циклах и минимальном стрессе для пчёл.'
  },
  {
    title: 'Чистый продукт',
    text: 'Такой подход помогает получать натуральный мёд с чистым ароматом и естественным вкусом.'
  }
];

const interestingFacts = [
  { value: '16 / 21 / 24', text: 'суток длится развитие матки, рабочей пчелы и трутня.' },
  { value: '75–150', text: 'взмахов крыльями в секунду делает пчела в полёте.' },
  { value: '200–300', text: 'цветков рабочая пчела может облететь за один вылет.' },
  { value: '40 мг', text: 'нектара приносит пчела за один продуктивный вылет.' },
  { value: '7–10°C', text: 'порог, при котором пчела застывает и не может летать.' },
  { value: '20–25°C', text: 'диапазон, в котором пчёлы работают особенно эффективно.' },
  { value: '10 кг', text: 'мёда и около 1 кг пыльцы нужно для производства 1 кг воска.' },
  { value: '≈60 кг', text: 'мёда в год пчелиная семья расходует на собственные нужды.' }
];
</script>

<template>
  <div>
    <HeroParallax />

    <section class="section container">
      <SectionTitle
        subtitle="О пасеке"
        title="Небольшая пасека «Медовый путь» работает по принципам натурального пчеловодства"
      />

      <div class="fact-grid" v-stagger>
        <article v-for="fact in facts" :key="fact.label" class="fact-card stagger-item">
          <p class="fact-value">{{ fact.value }}</p>
          <p>{{ fact.label }}</p>
        </article>
      </div>
    </section>

    <section class="section container">
      <SectionTitle subtitle="Подход" title="Что лежит в основе нашей работы с пчёлами" />

      <div class="reason-grid" v-stagger>
        <article v-for="item in reasons" :key="item.title" class="reason-card stagger-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section container">
      <SectionTitle subtitle="Интересные факты" title="Цифры, которые удивляют даже тех, кто далёк от пчеловодства" />

      <div class="insight-grid" v-stagger>
        <article v-for="fact in interestingFacts" :key="fact.text" class="insight-card stagger-item">
          <p class="insight-value">{{ fact.value }}</p>
          <p>{{ fact.text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
