<script setup>
import { reactive, ref } from 'vue';
import SectionTitle from '@/components/SectionTitle.vue';

const form = reactive({
  name: '',
  email: '',
  topic: '',
  message: ''
});

const errors = reactive({
  name: '',
  email: '',
  topic: '',
  message: ''
});

const submitted = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = () => {
  errors.name = form.name.trim().length >= 2 ? '' : 'Введите имя (минимум 2 символа).';
  errors.email = emailRegex.test(form.email.trim()) ? '' : 'Введите корректный email.';
  errors.topic = form.topic ? '' : 'Выберите тему обращения.';
  errors.message = form.message.trim().length >= 10 ? '' : 'Сообщение должно быть не короче 10 символов.';

  return Object.values(errors).every((error) => !error);
};

const handleSubmit = () => {
  submitted.value = false;
  if (!validate()) return;

  submitted.value = true;
  form.name = '';
  form.email = '';
  form.topic = '';
  form.message = '';
};
</script>

<template>
  <section class="section container page-spaced">
    <SectionTitle subtitle="Контакты" title="Связаться по вопросам пасеки и обмена опытом" />

    <div class="contacts-extra" v-reveal>
      <a
        class="contact-link-card"
        href="https://t.me/thisisthebeeway"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Перейти в Telegram-канал thisisthebeeway"
      >
        <strong>Telegram-канал</strong>
        <span>@thisisthebeeway</span>
      </a>
      <a
        class="contact-link-card"
        href="https://t.me/visliknn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Перейти в Telegram автора visliknn"
      >
        <strong>Автор проекта</strong>
        <span>@visliknn</span>
      </a>
    </div>

    <form class="contact-form" novalidate @submit.prevent="handleSubmit" v-reveal>
      <label>
        Имя
        <input v-model="form.name" type="text" name="name" aria-label="Имя" />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </label>

      <label>
        Email
        <input v-model="form.email" type="email" name="email" aria-label="Email" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </label>

      <label>
        Тема
        <select v-model="form.topic" name="topic" aria-label="Тема сообщения">
          <option value="">Выберите тему</option>
          <option value="consulting">Консультация</option>
          <option value="cooperation">Сотрудничество</option>
          <option value="question">Вопрос по уходу</option>
        </select>
        <span v-if="errors.topic" class="error">{{ errors.topic }}</span>
      </label>

      <label>
        Сообщение
        <textarea
          v-model="form.message"
          name="message"
          rows="5"
          aria-label="Сообщение"
          placeholder="Опишите ваш вопрос"
        ></textarea>
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </label>

      <button class="btn btn-primary" type="submit">Отправить</button>
      <p v-if="submitted" class="success">Сообщение отправлено. Спасибо за обращение.</p>
    </form>
  </section>
</template>
