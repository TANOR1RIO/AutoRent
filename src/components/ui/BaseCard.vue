<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
  interactive?: boolean
}

// Дефолты, чтобы не передавать всё каждый раз
withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false,
  interactive: false,
})
</script>

<template>
  <div
    class="card"
    :class="[
      `card--${variant}`,
      `card--${padding}`,
      {
        'card--hover': hover,
        'card--interactive': interactive,
      }
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.card {
  border-radius: 16px;
  transition: all 0.25s ease;
  background: var(--bg-surface, #ffffff);
}

.card--default {
  border: 1px solid var(--border-color, #e2e8f0);
}

.card--elevated {
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04),
              0 4px 12px rgba(15, 23, 42, 0.06);
}

.card--outlined {
  background: transparent;
  border: 2px solid var(--border-color, #e2e8f0);
}

.card--glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Поднимается при наведении, если hover включён */
.card--hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
}

.card--interactive {
  cursor: pointer;
}

.card--none { padding: 0; }
.card--sm    { padding: 16px; }
.card--md    { padding: 24px; }
.card--lg    { padding: 32px; }
</style>