<script setup lang="ts">
import heroCarImage from '@/assets/images/hero-car.png'
</script>

<template>
  <div class="hero__visual">
    <div class="hero__car-wrapper">
      <div class="hero__car-display">
        <img
          :src="heroCarImage"
          alt="Автомобиль AutoRent"
          class="car-image"
        />
      </div>

      <div class="hero__floating-card">
        <div class="floating-card__header">
          <span class="floating-card__status"></span>
          <span class="floating-card__label">БЛИЖАЙШЕЕ АВТО</span>
        </div>
        <div class="floating-card__body">
          <div class="car-info">
            <strong class="car-info__name">Kia Rio</strong>
            <span class="car-info__year">2024</span>
          </div>
          <div class="car-info__price">
            <span class="price__value">2 199 ₽</span>
            <span class="price__period">/мин</span>
          </div>
        </div>
        <div class="floating-card__footer">
          <span class="distance">120 м от вас</span>
        </div>
      </div>

      <div class="hero__mini-card">
        <span class="mini-card__text">Подача за 15 мин</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero__visual {
  position: relative;
  animation: fadeInRight 0.9s ease-out;
  min-height: 480px;
}

.hero__car-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero__car-display {
  width: 100%;
  height: 460px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: floatCar 7s ease-in-out infinite;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform: rotate(1deg);
}

.car-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero__floating-card {
  position: absolute;
  bottom: 50px;
  left: -40px;
  background: var(--bg-surface);
  padding: 26px;
  border-radius: var(--radius-md);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
  min-width: 290px;
  animation: floatCard 5s ease-in-out infinite;
  transform: rotate(-1deg);
}

.floating-card__header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.floating-card__status {
  width: 10px;
  height: 10px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
}

.floating-card__label {
  font-size: 11px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 700;
}

.floating-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.car-info__name {
  font-size: 26px;
  color: var(--text-primary);
  display: block;
  font-weight: 800;
}

.car-info__year {
  font-size: 14px;
  color: var(--text-secondary);
  margin-left: 10px;
  font-weight: 500;
}

.car-info__price {
  text-align: right;
}

.price__value {
  font-size: 34px;
  font-weight: 800;
  color: var(--color-primary);
  display: block;
  line-height: 1;
}

.price__period {
  font-size: 13px;
  color: var(--text-secondary);
  font-weight: 500;
}

.floating-card__footer {
  padding-top: 18px;
  border-top: 1px solid var(--border-color);
}

.distance {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
}

.hero__mini-card {
  position: absolute;
  top: 30px;
  right: -20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 14px 20px;
  border-radius: var(--radius-sm);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  animation: floatCard 6s ease-in-out infinite reverse;
  transform: rotate(2deg);
}

.mini-card__text {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes floatCar {
  0%, 100% { transform: translateY(0) rotate(1deg); }
  50% { transform: translateY(-12px) rotate(1deg); }
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-10px) rotate(-1deg); }
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

@media (max-width: 968px) {
  .hero__visual {
    order: -1;
    min-height: 360px;
  }

  .hero__car-display {
    height: 360px;
  }

  .hero__floating-card {
    left: 20px;
    bottom: 20px;
  }

  .hero__mini-card {
    right: 10px;
    top: 10px;
  }
}
</style>