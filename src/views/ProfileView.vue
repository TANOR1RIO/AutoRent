<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="profile-page">
      <div class="container">

        <!-- Заголовок -->
        <section class="profile-header">
          <div class="profile-user">
            <div class="profile-avatar">
              Е
            </div>

            <div>
              <h1>Евгений</h1>
              <p>evgeniy@example.com</p>
            </div>
          </div>

          <button class="edit-button">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>

            Редактировать
          </button>
        </section>

        <!-- Статистика -->
        <section class="stats-grid">

          <div class="stat-card">
            <div class="stat-icon stat-icon--blue">
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
                <path d="M5 17h14" />
                <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
                <circle cx="7.5" cy="17.5" r="1.5" />
                <circle cx="16.5" cy="17.5" r="1.5" />
              </svg>
            </div>

            <div>
              <span class="stat-card__label">Поездок</span>
              <strong>24</strong>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon stat-icon--green">
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
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v10" />
                <path d="M15 9.5c0-1.1-1.3-2-3-2s-3 .9-3 2 1.3 2 3 2 3 .9 3 2-1.3 2-3 2-3-.9-3-2" />
              </svg>
            </div>

            <div>
              <span class="stat-card__label">Потрачено</span>
              <strong>12 450 ₽</strong>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon stat-icon--orange">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3Z" />
              </svg>
            </div>

            <div>
              <span class="stat-card__label">Любимый автомобиль</span>
              <strong>Kia Rio</strong>
            </div>
          </div>

        </section>

        <!-- Личные данные -->
        <section class="profile-card">
          <div class="card-header">
            <div>
              <h2>Личные данные</h2>
              <p>Основная информация о вашем аккаунте</p>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item">
              <span>Имя</span>
              <strong>Евгений</strong>
            </div>

            <div class="info-item">
              <span>Email</span>
              <strong>evgeniy@example.com</strong>
            </div>

            <div class="info-item">
              <span>Телефон</span>
              <strong>+7 (999) 123-45-67</strong>
            </div>

            <div class="info-item">
              <span>Дата рождения</span>
              <strong>15.04.2000</strong>
            </div>
          </div>
        </section>

        <!-- Водительские права -->
        <section class="profile-card">
          <div class="card-header">
            <div>
              <h2>Водительские права</h2>
              <p>Данные для аренды автомобиля</p>
            </div>

            <span class="status-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Подтверждены
            </span>
          </div>

          <div class="license-info">
            <div class="license-icon">
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 17h14" />
                <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
                <circle cx="7.5" cy="17.5" r="1.5" />
                <circle cx="16.5" cy="17.5" r="1.5" />
              </svg>
            </div>

            <div>
              <strong>Водительские права</strong>
              <p>Серия 1234 №567890</p>
            </div>
          </div>
        </section>

        <!-- История поездок -->
        <section class="profile-card">
          <div class="card-header">
            <div>
              <h2>История поездок</h2>
              <p>Ваши последние поездки</p>
            </div>

            <button class="text-button">
              Все поездки
            </button>
          </div>

          <div class="trip-list">

            <div class="trip-item">
              <div class="trip-icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 17h14" />
                  <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </div>

              <div class="trip-info">
                <strong>Kia Rio</strong>
                <span>24 сентября · 42 мин</span>
              </div>

              <strong class="trip-price">
                420 ₽
              </strong>
            </div>

            <div class="trip-item">
              <div class="trip-icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 17h14" />
                  <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </div>

              <div class="trip-info">
                <strong>Hyundai Solaris</strong>
                <span>20 сентября · 31 мин</span>
              </div>

              <strong class="trip-price">
                325 ₽
              </strong>
            </div>

            <div class="trip-item">
              <div class="trip-icon">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 17h14" />
                  <path d="M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h8l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </div>

              <div class="trip-info">
                <strong>Volkswagen Polo</strong>
                <span>17 сентября · 54 мин</span>
              </div>

              <strong class="trip-price">
                605 ₽
              </strong>
            </div>

          </div>
        </section>

      </div>
    </div>
  </MainLayout>
</template>

<style scoped>
.profile-page {
  min-height: calc(100vh - 72px);
  padding: 40px 0 80px;
  background: #f5f7fb;
}

.container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

/* Header */

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.profile-user {
  display: flex;
  align-items: center;
  gap: 16px;
}

.profile-avatar {
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: linear-gradient(135deg, #2563eb, #4f46e5);

  color: #fff;
  font-size: 28px;
  font-weight: 700;

  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.profile-user h1 {
  margin: 0 0 6px;

  color: #111827;
  font-size: 32px;
}

.profile-user p {
  margin: 0;
  color: #6b7280;
}

/* Buttons */

.edit-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 10px 18px;

  border: 1px solid #dbe1ea;
  border-radius: 10px;

  background: #fff;
  color: #374151;

  cursor: pointer;
  font: inherit;

  transition: 0.2s;
}

.edit-button:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.text-button {
  padding: 4px;

  border: none;
  background: transparent;

  color: #2563eb;

  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
}

.text-button:hover {
  text-decoration: underline;
}

/* Statistics */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  margin-bottom: 32px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 20px;

  border: 1px solid #e5e7eb;
  border-radius: 16px;

  background: #fff;

  transition: 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.06);
}

.stat-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 12px;
}

.stat-icon--blue {
  background: #eff6ff;
  color: #2563eb;
}

.stat-icon--green {
  background: #ecfdf5;
  color: #059669;
}

.stat-icon--orange {
  background: #fff7ed;
  color: #ea580c;
}

.stat-card__label {
  display: block;

  margin-bottom: 5px;

  color: #6b7280;
  font-size: 13px;
}

.stat-card strong {
  color: #111827;
  font-size: 22px;
}

/* Cards */

.profile-card {
  max-width: 800px;

  margin-bottom: 24px;
  padding: 24px;

  border: 1px solid #e5e7eb;
  border-radius: 18px;

  background: #fff;

  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);

  transition: 0.2s;
}

.profile-card:hover {
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 16px;
  margin-bottom: 24px;
}

.card-header h2 {
  margin: 0 0 6px;

  color: #111827;
  font-size: 20px;
}

.card-header p {
  margin: 0;

  color: #6b7280;
  font-size: 14px;
}

/* Personal information */

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;

  padding: 14px;

  border-radius: 12px;
  background: #f8fafc;
}

.info-item span {
  color: #6b7280;
  font-size: 13px;
}

.info-item strong {
  color: #111827;
  font-size: 15px;
}

/* License */

.license-info {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 16px;

  border-radius: 12px;
  background: #f8fafc;
}

.license-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: #eff6ff;
  color: #2563eb;
}

.license-info strong {
  display: block;
  margin-bottom: 4px;

  color: #111827;
}

.license-info p {
  margin: 0;

  color: #6b7280;
  font-size: 14px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 6px 10px;

  border-radius: 20px;

  background: #dcfce7;
  color: #15803d;

  font-size: 12px;
  font-weight: 600;
}

/* Trips */

.trip-list {
  display: flex;
  flex-direction: column;
}

.trip-item {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 16px 8px;

  border-bottom: 1px solid #eef0f4;
  border-radius: 10px;

  transition: 0.2s;
}

.trip-item:hover {
  background: #f8fafc;
}

.trip-item:last-child {
  border-bottom: none;
}

.trip-icon {
  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: #eff6ff;
  color: #2563eb;
}

.trip-info {
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.trip-info strong {
  color: #111827;
}

.trip-info span {
  color: #6b7280;
  font-size: 13px;
}

.trip-price {
  color: #111827;
}

/* Mobile */

@media (max-width: 700px) {
  .profile-page {
    padding: 24px 0 50px;
  }

  .container {
    width: min(100% - 24px, 1200px);
  }

  .profile-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .card-header {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .profile-user h1 {
    font-size: 26px;
  }

  .profile-avatar {
    width: 60px;
    height: 60px;

    font-size: 24px;
  }

  .profile-card {
    padding: 18px;
  }

  .trip-item {
    padding: 14px 4px;
  }

  .trip-price {
    font-size: 14px;
  }
}
</style>