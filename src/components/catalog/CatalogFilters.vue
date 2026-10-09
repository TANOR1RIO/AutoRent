<script setup lang="ts">
import type { CarType, Transmission, CarStatus } from '@/types/car'

defineProps<{
  type: CarType | 'all'
  transmission: Transmission | 'all'
  status: CarStatus | 'all'
}>()

const emit = defineEmits<{
  'update:type': [value: CarType | 'all']
  'update:transmission': [value: Transmission | 'all']
  'update:status': [value: CarStatus | 'all']
}>()
</script>

<template>
  <div class="catalog-filters">
    <!-- Тип кузова -->
    <div class="catalog-filters__group">
      <label class="catalog-filters__label">Тип кузова</label>
      <select
        :value="type"
        class="catalog-filters__select"
        @change="emit('update:type', ($event.target as HTMLSelectElement).value as CarType | 'all')"
      >
        <option value="all">Все типы</option>
        <option value="sedan">Седан</option>
        <option value="crossover">Кроссовер</option>
        <option value="hatchback">Хэтчбек</option>
        <option value="premium">Премиум</option>
      </select>
    </div>

    <!-- Коробка передач -->
    <div class="catalog-filters__group">
      <label class="catalog-filters__label">Коробка передач</label>
      <select
        :value="transmission"
        class="catalog-filters__select"
        @change="emit('update:transmission', ($event.target as HTMLSelectElement).value as Transmission | 'all')"
      >
        <option value="all">Любая</option>
        <option value="automatic">Автомат</option>
        <option value="manual">Механика</option>
      </select>
    </div>

    <!-- Статус -->
    <div class="catalog-filters__group">
      <label class="catalog-filters__label">Статус</label>
      <select
        :value="status"
        class="catalog-filters__select"
        @change="emit('update:status', ($event.target as HTMLSelectElement).value as CarStatus | 'all')"
      >
        <option value="all">Все</option>
        <option value="available">Доступны</option>
        <option value="busy">Заняты</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.catalog-filters {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.catalog-filters__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
}

.catalog-filters__label {
  font-size: 13px;
  color: #667085;
  font-weight: 500;
}

.catalog-filters__select {
  padding: 10px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
}

.catalog-filters__select:focus {
  outline: none;
  border-color: #1769ff;
}
</style>