<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

type AuthMode = 'login' | 'register'

const router = useRouter()

const mode = ref<AuthMode>('login')

const email = ref('')
const password = ref('')
const name = ref('')
const confirmPassword = ref('')

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const errorMessage = ref('')
const successMessage = ref('')

const isLogin = computed(() => mode.value === 'login')

function switchMode(newMode: AuthMode) {
  mode.value = newMode

  errorMessage.value = ''
  successMessage.value = ''

  password.value = ''
  confirmPassword.value = ''

  showPassword.value = false
  showConfirmPassword.value = false
}

function validateForm() {
  errorMessage.value = ''

  if (!email.value) {
    errorMessage.value = 'Введите email'
    return false
  }

  if (!email.value.includes('@')) {
    errorMessage.value = 'Введите корректный email'
    return false
  }

  if (!password.value) {
    errorMessage.value = 'Введите пароль'
    return false
  }

  if (password.value.length < 6) {
    errorMessage.value = 'Пароль должен содержать минимум 6 символов'
    return false
  }

  if (!isLogin.value) {
    if (!name.value) {
      errorMessage.value = 'Введите ваше имя'
      return false
    }

    if (!confirmPassword.value) {
      errorMessage.value = 'Повторите пароль'
      return false
    }

    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Пароли не совпадают'
      return false
    }
  }

  return true
}

function handleSubmit() {
  if (!validateForm()) {
    return
  }

  errorMessage.value = ''

  if (isLogin.value) {
    successMessage.value = 'Авторизация выполнена'

    setTimeout(() => {
      router.push('/profile')
    }, 700)

    return
  }

  successMessage.value = 'Регистрация успешно завершена'

  setTimeout(() => {
    switchMode('login')
  }, 1000)
}

function handleForgotPassword() {
  errorMessage.value = ''
  successMessage.value = ''

  if (!email.value) {
    errorMessage.value = 'Сначала введите email'
    return
  }

  successMessage.value =
    'Ссылка для восстановления отправлена на email'
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-background"></div>

    <div class="auth-container">
      <RouterLink
        to="/"
        class="auth-logo"
      >
        <span class="auth-logo__icon">
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
            <path
              d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17v2M19 17v2"
            />
            <circle
              cx="7.5"
              cy="17.5"
              r="1.5"
            />
            <circle
              cx="16.5"
              cy="17.5"
              r="1.5"
            />
          </svg>
        </span>

        AutoRent
      </RouterLink>

      <div class="auth-card">
        <div class="auth-header">
          <h1>
            {{ isLogin ? 'С возвращением' : 'Создать аккаунт' }}
          </h1>

          <p>
            {{
              isLogin
                ? 'Войдите, чтобы продолжить пользоваться AutoRent'
                : 'Зарегистрируйтесь, чтобы начать пользоваться AutoRent'
            }}
          </p>
        </div>

        <div class="auth-tabs">
          <button
            type="button"
            class="auth-tab"
            :class="{ 'auth-tab--active': isLogin }"
            @click="switchMode('login')"
          >
            Войти
          </button>

          <button
            type="button"
            class="auth-tab"
            :class="{ 'auth-tab--active': !isLogin }"
            @click="switchMode('register')"
          >
            Регистрация
          </button>
        </div>

        <Transition
          name="form"
          mode="out-in"
        >
          <form
            :key="mode"
            class="auth-form"
            @submit.prevent="handleSubmit"
          >
            <div
              v-if="!isLogin"
              class="form-field"
            >
              <label for="name">
                Имя
              </label>

              <input
                id="name"
                v-model="name"
                type="text"
                autocomplete="name"
                placeholder="Введите ваше имя"
              />
            </div>

            <div class="form-field">
              <label for="email">
                Email
              </label>

              <input
                id="email"
                v-model="email"
                type="email"
                autocomplete="email"
                placeholder="example@mail.ru"
              />
            </div>

            <div class="form-field">
              <div class="field-label">
                <label for="password">
                  Пароль
                </label>

                <button
                  v-if="isLogin"
                  type="button"
                  class="forgot-button"
                  @click="handleForgotPassword"
                >
                  Забыли пароль?
                </button>
              </div>

              <div class="password-input">
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="current-password"
                  placeholder="Введите пароль"
                />

                <button
                  type="button"
                  class="password-toggle"
                  :aria-label="
                    showPassword
                      ? 'Скрыть пароль'
                      : 'Показать пароль'
                  "
                  @click="showPassword = !showPassword"
                >
                  <svg
                    v-if="!showPassword"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>

                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m3 3 18 18" />
                    <path
                      d="M10.6 10.6a2 2 0 0 0 2.8 2.8"
                    />
                    <path
                      d="M9.9 4.2A10.8 10.8 0 0 1 12 4c6.5 0 10 8 10 8a17.4 17.4 0 0 1-3.2 4.4"
                    />
                    <path
                      d="M6.2 6.2C3.6 8.2 2 12 2 12s3.5 8 10 8c1.4 0 2.7-.3 3.8-.8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              v-if="!isLogin"
              class="form-field"
            >
              <label for="confirm-password">
                Повторите пароль
              </label>

              <div class="password-input">
                <input
                  id="confirm-password"
                  v-model="confirmPassword"
                  :type="
                    showConfirmPassword
                      ? 'text'
                      : 'password'
                  "
                  autocomplete="new-password"
                  placeholder="Повторите пароль"
                />

                <button
                  type="button"
                  class="password-toggle"
                  :aria-label="
                    showConfirmPassword
                      ? 'Скрыть пароль'
                      : 'Показать пароль'
                  "
                  @click="
                    showConfirmPassword =
                      !showConfirmPassword
                  "
                >
                  <svg
                    v-if="!showConfirmPassword"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                    />
                  </svg>

                  <svg
                    v-else
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m3 3 18 18" />
                    <path
                      d="M10.6 10.6a2 2 0 0 0 2.8 2.8"
                    />
                    <path
                      d="M9.9 4.2A10.8 10.8 0 0 1 12 4c6.5 0 10 8 10 8a17.4 17.4 0 0 1-3.2 4.4"
                    />
                    <path
                      d="M6.2 6.2C3.6 8.2 2 12 2 12s3.5 8 10 8c1.4 0 2.7-.3 3.8-.8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div
              v-if="errorMessage"
              class="message message--error"
            >
              {{ errorMessage }}
            </div>

            <div
              v-if="successMessage"
              class="message message--success"
            >
              {{ successMessage }}
            </div>

            <button
              type="submit"
              class="submit-button"
            >
              {{ isLogin ? 'Войти' : 'Создать аккаунт' }}
            </button>
          </form>
        </Transition>

        <div class="divider">
          <span>или</span>
        </div>

        <div class="social-buttons">
          <button
            type="button"
            class="social-button"
          >
            Войти через Telegram
          </button>

          <button
            type="button"
            class="social-button"
          >
            Войти через VK
          </button>
        </div>

        <p class="auth-footer">
          {{ isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?' }}

          <button
            type="button"
            @click="
              switchMode(
                isLogin
                  ? 'register'
                  : 'login'
              )
            "
          >
            {{
              isLogin
                ? 'Зарегистрироваться'
                : 'Войти'
            }}
          </button>
        </p>
      </div>

      <RouterLink
        to="/"
        class="back-link"
      >
        Вернуться на главную
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: calc(100vh - 72px);
  padding: 60px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background: #f8fafc;
}

.auth-background {
  position: absolute;
  width: 700px;
  height: 700px;

  top: -300px;
  right: -250px;

  border-radius: 50%;

  background: rgba(37, 99, 235, 0.1);
  filter: blur(20px);
}

.auth-background::after {
  content: '';

  position: absolute;

  width: 500px;
  height: 500px;

  left: -700px;
  top: 500px;

  border-radius: 50%;

  background: rgba(14, 165, 233, 0.08);
}

.auth-container {
  width: 100%;
  max-width: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 1;
}

.auth-logo {
  display: flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 24px;

  color: var(--color-secondary);

  font-size: 24px;
  font-weight: 800;

  text-decoration: none;
}

.auth-logo__icon {
  display: flex;
  align-items: center;

  color: var(--color-primary);
}

.auth-card {
  width: 100%;
  padding: 36px;

  background: white;

  border: 1px solid var(--border-color);
  border-radius: 20px;

  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.08);
}

.auth-header {
  margin-bottom: 28px;

  text-align: center;
}

.auth-header h1 {
  margin: 0 0 10px;

  color: var(--color-secondary);

  font-size: 28px;
}

.auth-header p {
  margin: 0;

  color: var(--text-secondary);

  font-size: 14px;
  line-height: 1.5;
}

.auth-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 4px;

  padding: 4px;
  margin-bottom: 28px;

  background: #f1f5f9;

  border-radius: 10px;
}

.auth-tab {
  padding: 10px;

  border: none;
  border-radius: 7px;

  background: transparent;

  color: var(--text-secondary);

  font: inherit;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
}

.auth-tab:hover {
  color: var(--color-primary);
}

.auth-tab--active {
  background: white;
  color: var(--color-primary);

  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.08);
}

.form-enter-active,
.form-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.form-enter-from {
  opacity: 0;
  transform: translateX(10px);
}

.form-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-field label {
  color: var(--color-secondary);

  font-size: 14px;
  font-weight: 600;
}

.field-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-field input {
  width: 100%;
  height: 46px;

  box-sizing: border-box;

  padding: 0 14px;

  border: 1px solid var(--border-color);
  border-radius: 9px;

  background: white;

  color: var(--color-secondary);

  font: inherit;

  outline: none;
}

.form-field input::placeholder {
  color: #94a3b8;
}

.form-field input:focus {
  border-color: var(--color-primary);

  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.forgot-button {
  padding: 0;

  border: none;
  background: transparent;

  color: var(--color-primary);

  font: inherit;
  font-size: 13px;

  cursor: pointer;
}

.forgot-button:hover {
  text-decoration: underline;
}

.password-input {
  position: relative;
}

.password-input input {
  padding-right: 48px;
}

.password-toggle {
  width: 28px;
  height: 28px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 12px;

  transform: translateY(-50%);

  border: none;
  background: transparent;

  color: #64748b;

  cursor: pointer;
}

.password-toggle:hover {
  color: var(--color-primary);
}

.message {
  padding: 11px 12px;

  border-radius: 8px;

  font-size: 13px;
}

.message--error {
  background: #fef2f2;
  color: #dc2626;
}

.message--success {
  background: #f0fdf4;
  color: #16a34a;
}

.submit-button {
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 9px;

  background: var(--color-primary);
  color: white;

  font: inherit;
  font-weight: 700;

  cursor: pointer;
}

.submit-button:hover {
  background: var(--color-primary-hover);

  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.submit-button:active {
  transform: translateY(1px);
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 26px 0 18px;

  color: #94a3b8;

  font-size: 13px;
}

.divider::before,
.divider::after {
  content: '';

  flex: 1;

  height: 1px;

  background: var(--border-color);
}

.social-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 10px;
}

.social-button {
  min-height: 44px;

  padding: 0 10px;

  border: 1px solid var(--border-color);
  border-radius: 9px;

  background: white;

  color: var(--color-secondary);

  font: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
}

.social-button:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.auth-footer {
  margin: 24px 0 0;

  color: var(--text-secondary);

  text-align: center;

  font-size: 14px;
}

.auth-footer button {
  padding: 0;

  border: none;
  background: transparent;

  color: var(--color-primary);

  font: inherit;
  font-weight: 600;

  cursor: pointer;
}

.auth-footer button:hover {
  text-decoration: underline;
}

.back-link {
  margin-top: 20px;

  color: var(--text-secondary);

  font-size: 13px;

  text-decoration: none;
}

.back-link:hover {
  color: var(--color-primary);
}

@media (max-width: 600px) {
  .auth-page {
    min-height: calc(100vh - 64px);
    padding: 40px 16px;
  }

  .auth-card {
    padding: 28px 22px;
    border-radius: 16px;
  }

  .auth-header h1 {
    font-size: 24px;
  }
}

@media (max-width: 420px) {
  .auth-page {
    padding: 28px 12px;
  }

  .auth-logo {
    font-size: 21px;
  }

  .auth-card {
    padding: 24px 18px;
  }

  .social-buttons {
    grid-template-columns: 1fr;
  }
}
</style>
```
