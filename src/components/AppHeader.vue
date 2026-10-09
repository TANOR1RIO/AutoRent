<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="container header__content">

      <RouterLink to="/" class="logo">
        <span class="logo__icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2M19 17v2"/>
            <circle cx="7.5" cy="17.5" r="1.5"/>
            <circle cx="16.5" cy="17.5" r="1.5"/>
          </svg>
        </span>
        AutoRent
      </RouterLink>

      <nav class="nav">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/catalog">Каталог</RouterLink>
        <RouterLink to="/profile">Профиль</RouterLink>
      </nav>

      <RouterLink to="/auth" class="login-btn">
        Войти
      </RouterLink>

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
  border-bottom: 1px solid var(--border-color, #e2e8f0);
}

.header__content {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-secondary, #0f172a);
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
}

.logo__icon {
  color: var(--color-primary, #2563eb);
}

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav a {
  position: relative;
  color: var(--text-secondary, #475569);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s;
}

.nav a:hover {
  color: var(--color-primary, #2563eb);
}

/* Подчёркивание активного роута */
.nav a.router-link-active {
  color: var(--color-primary, #2563eb);
}

.nav a.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background: var(--color-primary, #2563eb);
  border-radius: 999px;
}

.login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: var(--color-primary, #2563eb);
  color: white;
  border-radius: var(--radius-sm, 8px);
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s, transform 0.25s;
}

.login-btn:hover {
  background: var(--color-primary-hover, #1d4ed8);
  transform: translateY(-1px);
}

.login-btn:active {
  transform: translateY(1px);
}
</style>