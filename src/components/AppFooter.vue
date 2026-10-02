<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__main">
        <!-- Бренд -->
        <div class="footer__brand">
          <h3 class="footer__logo">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2M19 17v2"/>
              <circle cx="7.5" cy="17.5" r="1.5"/>
              <circle cx="16.5" cy="17.5" r="1.5"/>
            </svg>

            AutoRent
          </h3>

          <p class="footer__description">
            Современный сервис аренды автомобилей.
            Выбирай машину, бронируй и отправляйся в путь.
          </p>

          <div class="footer__socials">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              Telegram
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>

        <!-- Навигация -->
        <div class="footer__column">
          <h4>Навигация</h4>

          <nav>
            <RouterLink to="/">
              Главная
            </RouterLink>

            <RouterLink to="/catalog">
              Каталог автомобилей
            </RouterLink>

            <RouterLink to="/profile">
              Профиль
            </RouterLink>
          </nav>
        </div>

        <!-- Сервис -->
        <div class="footer__column">
          <h4>AutoRent</h4>

          <nav>
            <a href="#how-it-works">
              Как это работает
            </a>

            <a href="#advantages">
              Преимущества
            </a>

            <a href="#faq">
              Частые вопросы
            </a>

            <a href="#support">
              Поддержка
            </a>
          </nav>
        </div>

        <!-- Контакты -->
        <div class="footer__column">
          <h4>Контакты</h4>

          <div class="footer__contacts">
            <a href="tel:+78000000000">
              +7 (800) 000-00-00
            </a>

            <a href="mailto:support@autorent.ru">
              support@autorent.ru
            </a>

            <span>
              Поддержка 24/7
            </span>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ currentYear }} AutoRent. Все права защищены.
        </p>

        <div class="footer__legal">
          <a href="#">
            Пользовательское соглашение
          </a>

          <a href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 80px;
  padding: 56px 0 24px;

  background: var(--bg-dark);
  color: white;
}

.footer__main {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 48px;

  padding-bottom: 48px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Бренд */

.footer__logo {
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 0 0 12px;

  font-size: 21px;
  font-weight: 800;
}

.footer__logo svg {
  color: var(--color-accent);
}

.footer__description {
  max-width: 330px;

  margin: 0;

  color: #94a3b8;

  line-height: 1.6;
}

.footer__socials {
  display: flex;
  gap: 20px;

  margin-top: 24px;
}

.footer__socials a {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 600;

  transition: color 0.2s;
}

.footer__socials a:hover {
  color: white;
}

/* Колонки */

.footer__column h4 {
  margin: 0 0 18px;

  font-size: 15px;
  font-weight: 700;

  color: white;
}

.footer__column nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__column a,
.footer__contacts a,
.footer__contacts span {
  color: #94a3b8;

  font-size: 14px;
  line-height: 1.5;

  text-decoration: none;

  transition: color 0.2s;
}

.footer__column a:hover,
.footer__contacts a:hover {
  color: white;
}

.footer__contacts {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Нижняя часть */

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 24px;

  padding-top: 24px;
}

.footer__bottom p {
  margin: 0;

  color: #64748b;
  font-size: 13px;
}

.footer__legal {
  display: flex;
  gap: 24px;
}

.footer__legal a {
  color: #64748b;

  font-size: 13px;
  text-decoration: none;

  transition: color 0.2s;
}

.footer__legal a:hover {
  color: #cbd5e1;
}

/* Планшет */

@media (max-width: 900px) {
  .footer {
    margin-top: 60px;
  }

  .footer__main {
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 36px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

/* Телефон */

@media (max-width: 600px) {
  .footer {
    margin-top: 48px;
    padding: 40px 0 20px;
  }

  .footer__main {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 32px 24px;

    padding-bottom: 32px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }

  .footer__description {
    max-width: 100%;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;

    gap: 16px;
  }

  .footer__legal {
    flex-direction: column;
    gap: 10px;
  }
}

/* Маленькие телефоны */

@media (max-width: 400px) {
  .footer__main {
    grid-template-columns: 1fr;
  }

  .footer__brand {
    grid-column: auto;
  }
}
</style>