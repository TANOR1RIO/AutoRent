<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import CarCard from '@/components/catalog/CarCard.vue'
import CatalogSearch from '@/components/catalog/CatalogSearch.vue'
import CatalogFilters from '@/components/catalog/CatalogFilters.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import { cars } from '@/data/cars'
import type { CarType, Transmission, CarStatus } from '@/types/car'

const router = useRouter()

const searchQuery = ref('')
const selectedType = ref<CarType | 'all'>('all')
const selectedTransmission = ref<Transmission | 'all'>('all')
const selectedStatus = ref<CarStatus | 'all'>('available')

const filteredCars = computed(() => {
  let result = [...cars]

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(car =>
      `${car.brand} ${car.model}`.toLowerCase().includes(query)
    )
  }

  if (selectedType.value !== 'all') {
    result = result.filter(car => car.type === selectedType.value)
  }

  if (selectedTransmission.value !== 'all') {
    result = result.filter(car => car.transmission === selectedTransmission.value)
  }

  if (selectedStatus.value !== 'all') {
    result = result.filter(car => car.status === selectedStatus.value)
  }

  return result
})

const stats = computed(() => ({
  total: cars.length,
  available: cars.filter(c => c.status === 'available').length,
  busy: cars.filter(c => c.status === 'busy').length,
}))

const goToCar = (carId: number) => {
  router.push(`/car/${carId}`)
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedType.value = 'all'
  selectedTransmission.value = 'all'
  selectedStatus.value = 'available'
}
</script>

<template>
  <MainLayout>
    <section class="catalog">
      <div class="catalog__container">

        <header class="catalog__header">
          <div class="catalog__title-block">
            <h1 class="catalog__title">Каталог автомобилей</h1>
            <p class="catalog__subtitle">
              Выберите автомобиль рядом с вами
            </p>
          </div>

          <div class="catalog__stats">
            <BaseBadge variant="success" dot>
              {{ stats.available }} доступно
            </BaseBadge>
            <BaseBadge variant="warning">
              {{ stats.busy }} занято
            </BaseBadge>
            <BaseBadge variant="info">
              Всего {{ stats.total }}
            </BaseBadge>
          </div>
        </header>

        <CatalogSearch v-model="searchQuery" />

        <CatalogFilters
          v-model:type="selectedType"
          v-model:transmission="selectedTransmission"
          v-model:status="selectedStatus"
        />

        <div class="catalog__results-info">
          <span class="catalog__results-count">
            Найдено: <strong>{{ filteredCars.length }}</strong>
          </span>
          <button
            v-if="searchQuery || selectedType !== 'all' || selectedTransmission !== 'all' || selectedStatus !== 'available'"
            class="catalog__reset-btn"
            @click="resetFilters"
          >
            Сбросить
          </button>
        </div>

        <div class="catalog__grid">
          <CarCard
            v-for="car in filteredCars"
            :key="car.id"
            :car="car"
            @click="goToCar(car.id)"
          />

          <div v-if="filteredCars.length === 0" class="catalog__empty">
            <div class="catalog__empty-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 class="catalog__empty-title">Ничего не найдено</h3>
            <p class="catalog__empty-text">
              Попробуйте изменить параметры поиска или сбросить фильтры
            </p>
          </div>
        </div>

      </div>
    </section>
  </MainLayout>
</template>

<style scoped>
.catalog {
  padding: 48px 0 80px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  min-height: 100vh;
}

.catalog__container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.catalog__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.catalog__title {
  margin: 0 0 8px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #0f172a;
}

.catalog__subtitle {
  margin: 0;
  color: #64748b;
  font-size: 16px;
}

.catalog__stats {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.catalog__results-info {
  margin: 24px 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.catalog__results-count {
  font-size: 14px;
  color: #64748b;
}

.catalog__results-count strong {
  color: #0f172a;
  font-weight: 700;
}

.catalog__reset-btn {
  background: none;
  border: none;
  color: #2563eb;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s;
}

.catalog__reset-btn:hover {
  background: rgba(37, 99, 235, 0.08);
}

.catalog__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.catalog__empty {
  grid-column: 1 / -1;
  text-align: center;
  padding: 64px 24px;
  background: #ffffff;
  border: 2px dashed #e2e8f0;
  border-radius: 16px;
}

.catalog__empty-icon {
  margin-bottom: 16px;
  display: inline-flex;
}

.catalog__empty-title {
  margin: 0 0 8px;
  font-size: 20px;
  color: #0f172a;
}

.catalog__empty-text {
  margin: 0;
  color: #64748b;
  font-size: 14px;
}

@media (max-width: 1000px) {
  .catalog__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .catalog__title {
    font-size: 32px;
  }
}

@media (max-width: 650px) {
  .catalog {
    padding: 32px 0 60px;
  }

  .catalog__container {
    width: min(100% - 24px, 1200px);
  }

  .catalog__header {
    align-items: flex-start;
    flex-direction: column;
  }

  .catalog__title {
    font-size: 28px;
  }

  .catalog__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .catalog__stats {
    width: 100%;
  }
}
</style>