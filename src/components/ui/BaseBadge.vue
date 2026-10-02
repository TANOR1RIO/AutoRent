<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'outline' | 'info'
  size?: 'sm' | 'md'
  dot?: boolean  // ← новая фишка: точка-индикатор
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  dot: false,
})
</script>

<template>
  <span
    class="badge"
    :class="[
      `badge--${variant}`,
      `badge--${size}`,
      { 'badge--dot': dot }
    ]"
  >
    <span v-if="dot" class="badge__dot" />
    <slot />
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  border-radius: 999px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition: all 0.2s ease;
}

/* ===== Варианты ===== */

.badge--primary {
  background: rgba(37, 99, 235, 0.12);
  color: #2563eb;
}

.badge--success {
  background: rgba(16, 185, 129, 0.15);
  color: #059669;
}

.badge--warning {
  background: rgba(245, 158, 11, 0.15);
  color: #b45309;
}

.badge--danger {
  background: rgba(239, 68, 68, 0.15);
  color: #dc2626;
}

.badge--info {
  background: rgba(100, 116, 139, 0.12);
  color: #475569;
}

/* Outline — работает и на светлом, и на тёмном фоне */
.badge--outline {
  background: rgba(15, 23, 42, 0.04);
  color: #334155;
  border: 1px solid rgba(15, 23, 42, 0.12);
}

/* ===== Размеры ===== */

.badge--sm {
  padding: 4px 10px;
  font-size: 11px;
}

.badge--md {
  padding: 6px 12px;
  font-size: 13px;
}

/* ===== Точка-индикатор ===== */

.badge--dot {
  gap: 8px;
}

.badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>