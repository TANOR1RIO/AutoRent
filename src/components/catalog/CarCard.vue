<script setup lang="ts">
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import type { Car } from '@/types/car'

const props = defineProps<{
  car: Car
}>()

const emit = defineEmits<{
  click: [car: Car]
}>()

const handleClick = () => {
  emit('click', props.car)
}

const typeLabels: Record<string, string> = {
  sedan: 'Седан',
  crossover: 'Кроссовер',
  hatchback: 'Хэтчбек',
  premium: 'Премиум',
}
</script>

<template>
  <BaseCard variant="elevated" hover class="car-card">
    <article class="car-card__inner">

      <!-- Фото -->
      <div class="car-card__image">
        <img
          :src="car.image"
          :alt="`${car.brand} ${car.model}`"
          class="car-card__img"
        />

        <BaseBadge
          :variant="car.status === 'available' ? 'success' : 'warning'"
          size="sm"
          dot
          class="car-card__status"
        >
          {{ car.status === 'available' ? 'Доступен' : 'Занят' }}
        </BaseBadge>

        <BaseBadge variant="outline" size="sm" class="car-card__distance">
          {{ car.distance }} м
        </BaseBadge>
      </div>

      <!-- Информация -->
      <div class="car-card__body">
        <div class="car-card__header">
          <div>
            <h2 class="car-card__name">
              {{ car.brand }} {{ car.model }}
            </h2>
            <BaseBadge variant="info" size="sm">
              {{ typeLabels[car.type] || car.type }}
            </BaseBadge>
          </div>
        </div>

        <!-- Характеристики -->
        <div class="car-card__specs">
          <div class="car-card__spec">
            <span class="car-card__spec-label">Год</span>
            <span class="car-card__spec-value">{{ car.year }}</span>
          </div>
          <div class="car-card__spec">
            <span class="car-card__spec-label">КПП</span>
            <span class="car-card__spec-value">
              {{ car.transmission === 'automatic' ? 'Автомат' : 'Механика' }}
            </span>
          </div>
          <div class="car-card__spec">
            <span class="car-card__spec-label">Двигатель</span>
            <span class="car-card__spec-value">{{ car.engine }} л</span>
          </div>
        </div>

        <!-- Цена и кнопка -->
        <div class="car-card__footer">
          <div class="car-card__price">
            <strong>{{ car.pricePerMinute }} ₽</strong>
            <span>/мин</span>
          </div>

          <BaseButton
            variant="primary"
            size="sm"
            :disabled="car.status === 'busy'"
            @click="handleClick"
          >
            Подробнее
          </BaseButton>
        </div>
      </div>

    </article>
  </BaseCard>
</template>

<style scoped>
.car-card {
  height: 100%;
}

.car-card__inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* ===== Фото ===== */

.car-card__image {
  position: relative;
  height: 180px;
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
  margin-bottom: 16px;
}

.car-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.car-card:hover .car-card__img {
  transform: scale(1.05);
}

.car-card__status {
  position: absolute;
  top: 12px;
  left: 12px;
}

.car-card__distance {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
}

/* ===== Тело карточки ===== */

.car-card__body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
}

.car-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}

.car-card__name {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

/* ===== Характеристики ===== */

.car-card__specs {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 10px 0;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
}

.car-card__spec {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.car-card__spec-label {
  font-size: 11px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 500;
}

.car-card__spec-value {
  font-size: 13px;
  color: #0f172a;
  font-weight: 600;
}

/* ===== Футер ===== */

.car-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 4px;
}

.car-card__price {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.car-card__price strong {
  color: #2563eb;
  font-size: 22px;
  font-weight: 800;
}

.car-card__price span {
  color: #94a3b8;
  font-size: 13px;
  font-weight: 500;
}
</style>