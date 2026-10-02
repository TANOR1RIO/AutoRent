<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: 'shield',
    title: 'КАСКО включено',
    description: 'Полная страховка без франшизы.',
  },
  {
    icon: 'fuel',
    title: 'Бензин за наш счёт',
    description: 'Заправка уже входит в стоимость аренды.',
  },
  {
    icon: 'phone',
    title: 'Поддержка 24/7',
    description: 'Мы всегда остаёмся на связи.',
  },
]

// Inline SVG-иконки (чтобы не ставить лишнюю библиотеку)
const icons: Record<string, string> = {
  shield: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  fuel: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>',
  phone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
}
</script>

<template>
  <ul class="hero__features">
    <li
      v-for="feature in features"
      :key="feature.title"
      class="hero__feature"
    >
      <span
        class="hero__feature-icon"
        v-html="icons[feature.icon]"
      />
      <div class="hero__feature-content">
        <strong>{{ feature.title }}</strong>
        <p>{{ feature.description }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.hero__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.hero__feature {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  color: var(--text-white);
}

.hero__feature-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.15);
}

.hero__feature-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.hero__feature-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;
}

.hero__feature strong {
  font-size: 16px;
  font-weight: 600;
}

.hero__feature p {
  font-size: 14px;
  opacity: 0.82;
  margin: 0;
}
</style>