<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-title">Медовый путь</p>
        <p>Личный проект о пчёлах, тишине пасеки и устойчивом пчеловодстве.</p>
      </div>
      <div>
        <p class="footer-title">Разделы</p>
        <ul class="footer-links">
          <li><RouterLink to="/care">Уход за пчёлами</RouterLink></li>
          <li><RouterLink to="/calendar">Календарь работ</RouterLink></li>
          <li><RouterLink to="/blog">Заметки пасечника</RouterLink></li>
        </ul>
      </div>
      <div>
        <p class="footer-title">Контакты</p>
        <p>Московская область</p>
        <ul class="footer-links">
          <li>
            <a
              href="https://t.me/thisisthebeeway"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Telegram-канал thisisthebeeway"
            >
              Telegram-канал: @thisisthebeeway
            </a>
          </li>
          <li>
            <a
              href="https://t.me/visliknn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Открыть Telegram автора visliknn"
            >
              Автор: @visliknn
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
