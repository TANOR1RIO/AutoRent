<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container header__content">

      <!-- Логотип -->
      <RouterLink
        to="/"
        class="logo"
        @click="closeMenu"
      >
        <span class="logo__icon">
          <svg
            width="24"
            height="24"
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
        </span>

        AutoRent
      </RouterLink>

      <!-- Навигация -->
      <nav
        class="nav"
        :class="{ 'nav--open': isMenuOpen }"
      >
        <RouterLink
          to="/"
          @click="closeMenu"
        >
          Главная
        </RouterLink>

        <RouterLink
          to="/catalog"
          @click="closeMenu"
        >
          Каталог
        </RouterLink>

        <RouterLink
          to="/profile"
          @click="closeMenu"
        >
          Профиль
        </RouterLink>

        <!-- Войти в мобильном меню -->
        <RouterLink
          to="/auth"
          class="nav__login"
          @click="closeMenu"
        >
          Войти
        </RouterLink>
      </nav>

      <!-- Войти на компьютере -->
      <RouterLink
        to="/auth"
        class="login-btn"
      >
        Войти
      </RouterLink>

      <!-- Бургер -->
      <button
        class="burger"
        type="button"
        :class="{ 'burger--active': isMenuOpen }"
        :aria-expanded="isMenuOpen"
        aria-label="Открыть меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  border-bottom: 1px solid var(--border-color);
}

.header__content {
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
}

/* =========================
   LOGO
========================= */

.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--color-secondary);

  font-size: 22px;
  font-weight: 800;

  text-decoration: none;

  position: relative;
  z-index: 101;
}

.logo__icon {
  display: flex;
  align-items: center;

  color: var(--color-primary);
}

/* =========================
   NAVIGATION
========================= */

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  position: relative;

  color: var(--text-secondary);

  font-weight: 600;
  text-decoration: none;

  transition: color 0.25s;
}

.nav a:hover {
  color: var(--color-primary);
}

.nav a.router-link-active {
  color: var(--color-primary);
}

.nav a.router-link-active::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: -7px;

  width: 100%;
  height: 2px;

  background: var(--color-primary);

  border-radius: 999px;
}

/* =========================
   LOGIN BUTTON
========================= */

.login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 18px;

  background: var(--color-primary);
  color: white;

  border-radius: var(--radius-sm);

  font: inherit;
  font-weight: 600;

  text-decoration: none;

  transition:
    background 0.25s,
    transform 0.25s;
}

.login-btn:hover {
  background: var(--color-primary-hover);
}

.login-btn:active {
  transform: translateY(1px);
}

/* =========================
   MOBILE LOGIN
========================= */

.nav__login {
  display: none;
}

/* =========================
   BURGER
========================= */

.burger {
  display: none;

  width: 44px;
  height: 44px;

  padding: 9px;

  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);

  background: white;

  cursor: pointer;

  flex-direction: column;
  justify-content: center;
  gap: 5px;

  position: relative;
  z-index: 101;
}

.burger span {
  display: block;

  width: 100%;
  height: 2px;

  background: var(--color-secondary);

  border-radius: 999px;

  transition:
    transform 0.25s,
    opacity 0.25s;
}

.burger--active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.burger--active span:nth-child(2) {
  opacity: 0;
}

.burger--active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* =========================
   TABLET / MOBILE
========================= */

@media (max-width: 768px) {
  .header__content {
    min-height: 64px;
  }

  .logo {
    font-size: 20px;
  }

  /* Обычная кнопка Войти скрывается */
  .login-btn {
    display: none;
  }

  /* Показываем бургер */
  .burger {
    display: flex;
  }

  /* Мобильное меню */
  .nav {
    position: absolute;

    top: calc(100% + 1px);
    left: 0;
    right: 0;

    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;

    background: rgba(255, 255, 255, 0.97);

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    border-bottom: 1px solid var(--border-color);

    box-shadow:
      0 12px 30px rgba(15, 23, 42, 0.08);

    opacity: 0;
    visibility: hidden;

    transform: translateY(-10px);

    pointer-events: none;

    transition:
      opacity 0.25s,
      visibility 0.25s,
      transform 0.25s;
  }

  .nav--open {
    opacity: 1;
    visibility: visible;

    transform: translateY(0);

    pointer-events: auto;
  }

  .nav a {
    padding: 13px 12px;

    border-radius: var(--radius-sm);
  }

  .nav a:hover {
    background: var(--bg-light);
  }

  .nav a.router-link-active {
    background: rgba(37, 99, 235, 0.08);
  }

  .nav a.router-link-active::after {
    display: none;
  }

  /* Кнопка Войти внутри мобильного меню */
  .nav__login {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100%;

    margin-top: 8px;

    padding: 12px;

    background: var(--color-primary);
    color: white !important;

    border-radius: var(--radius-sm);
  }

  .nav__login:hover {
    background: var(--color-primary-hover) !important;
  }
}

/* =========================
   SMALL PHONES
========================= */

@media (max-width: 480px) {
  .header__content {
    min-height: 60px;
  }

  .logo {
    font-size: 19px;
  }

  .logo__icon svg {
    width: 22px;
    height: 22px;
  }

  .burger {
    width: 40px;
    height: 40px;
  }
}
</style>