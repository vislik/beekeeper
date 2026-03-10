<script setup>
import { computed, ref } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

const activeTopic = ref('all');

const posts = [
  {
    title: 'Как понять, что семье тесно',
    topic: 'Практика',
    date: '12 мая 2025',
    excerpt: 'Признаки роевого настроения и какие действия помогают снять напряжение.'
  },
  {
    title: '3 ошибки весеннего старта',
    topic: 'Сезон',
    date: '3 апреля 2025',
    excerpt: 'Почему раннее расширение и редкие осмотры приводят к просадке силы семьи.'
  },
  {
    title: 'Какие записи вести после осмотра',
    topic: 'Организация',
    date: '25 февраля 2025',
    excerpt: 'Минимальный набор метрик, который делает пасеку предсказуемой.'
  },
  {
    title: 'Вода и микроклимат летом',
    topic: 'Сезон',
    date: '18 июня 2024',
    excerpt: 'Как избежать перегрева ульев без радикальных вмешательств.'
  }
];

const topics = ['all', ...new Set(posts.map((post) => post.topic))];

const filteredPosts = computed(() => {
  if (activeTopic.value === 'all') return posts;
  return posts.filter((post) => post.topic === activeTopic.value);
});
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle subtitle="Блог" title="Заметки и практические наблюдения" />

    <label for="topic-filter" class="filter-label" v-reveal>Фильтр по темам</label>
    <select id="topic-filter" v-model="activeTopic" class="topic-filter" aria-label="Фильтр тем блога">
      <option v-for="topic in topics" :key="topic" :value="topic">
        {{ topic === 'all' ? 'Все темы' : topic }}
      </option>
    </select>

    <div class="blog-list" v-stagger>
      <article v-for="post in filteredPosts" :key="post.title" class="blog-card stagger-item">
        <div class="blog-meta">
          <span class="badge">{{ post.topic }}</span>
          <time>{{ post.date }}</time>
        </div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <button type="button" class="btn btn-inline" aria-label="Читать заметку">Читать заметку</button>
      </article>
    </div>
  </section>
</template>
