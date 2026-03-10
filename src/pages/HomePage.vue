<script setup>
import HeroParallax from '@/components/HeroParallax.vue';
import SectionTitle from '@/components/SectionTitle.vue';

const facts = [
  { value: '50 000+', label: 'пчёл в сильной семье в пик сезона' },
  { value: '3-5 км', label: 'радиус продуктивного облёта' },
  { value: '12', label: 'месяцев внимания к пасеке' }
];

const reasons = [
  {
    title: 'Экологический эффект',
    text: 'Пчёлы поддерживают биоразнообразие и опыление садов, леса и полей.'
  },
  {
    title: 'Ритм и дисциплина',
    text: 'Пасека учит долгому горизонту решений: от подготовки зимовки до весеннего старта.'
  },
  {
    title: 'Осознанное хобби',
    text: 'Это практическая работа руками и наблюдение за сложной живой системой.'
  }
];
</script>

<template>
  <div>
    <HeroParallax />

    <section class="section container">
      <SectionTitle
        subtitle="Почему пчеловодство"
        title="Хобби, которое развивает наблюдательность и системное мышление"
      />

      <div class="fact-grid" v-stagger>
        <article v-for="fact in facts" :key="fact.label" class="fact-card stagger-item">
          <p class="fact-value">{{ fact.value }}</p>
          <p>{{ fact.label }}</p>
        </article>
      </div>
    </section>

    <section class="section container">
      <SectionTitle subtitle="Ключевые акценты" title="Что даёт личная пасека" />

      <div class="reason-grid" v-stagger>
        <article v-for="item in reasons" :key="item.title" class="reason-card stagger-item">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>
