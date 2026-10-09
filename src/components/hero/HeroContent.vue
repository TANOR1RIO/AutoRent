<script setup lang="ts">
import { useRouter } from 'vue-router'

import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

import HeroFeatures from './HeroFeatures.vue'

const router = useRouter()

const goToCatalog = (): void => {
  router.push('/catalog')
}

// Заглушка, пока не сделали якорную ссылку или модалку
const scrollToHowItWorks = (): void => {
  console.log('Скролл и "Как это работает"')
}
</script>

<template>
  <div class="hero__content">
    <BaseBadge variant="outline">
      500+ автомобилей · рейтинг 4.9
    </BaseBadge>

    <h1 class="hero__title">
      Найди автомобиль
      <!-- Акцентный перенос для красивой типографики -->
      <span class="hero__title-accent">
        за пару минут
      </span>
    </h1>

    <p class="hero__subtitle">
      Арендуй автомобиль без залога, с полной страховкой
      и подачей в течение 15 минут.
    </p>

    <div class="hero__actions">
      <BaseButton
        variant="primary"
        size="lg"
        @click="goToCatalog"
      >
        Найти автомобиль
      </BaseButton>

      <BaseButton
        variant="secondary"
        size="lg"
        @click="scrollToHowItWorks"
      >
        Как это работает
      </BaseButton>
    </div>

    <HeroFeatures />
  </div>
</template>

<style scoped>
.hero__content {
  animation: fadeInLeft .8s ease-out;
}

.hero__title {
  margin: 24px 0;
  font-size: 62px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -.03em;
  color: var(--text-white);
}

.hero__title-accent {
  display: block;
  margin-top: 5px;
}

.hero__subtitle {
  max-width: 520px;
  margin-bottom: 40px;
  margin-top: 5px;
  font-size: 19px;
  line-height: 1.7;
  color: rgba(255,255,255,.88);
}

.hero__actions {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>