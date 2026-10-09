<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  loading: false,
  disabled: false,
  type: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Чтобы не было двойного клика, пока идёт загрузка
const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      {
        'btn--block': block,
        'btn--loading': loading,
      }
    ]"
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="btn__spinner" />
    <span class="btn__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all 0.2s ease;
  font-family: inherit;
  position: relative;
  line-height: 1.2;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Фокус для навигации с клавы */
.btn:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.btn--sm { padding: 8px 14px; font-size: 13px; }
.btn--md { padding: 10px 18px; font-size: 14px; }
.btn--lg { padding: 14px 24px; font-size: 15px; }
.btn--block { width: 100%; }

.btn--primary {
  background: #2563eb;
  color: white;
  box-shadow: 0 1px 2px rgba(37, 99, 235, 0.2);
}
.btn--primary:hover:not(:disabled) {
  background: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}
.btn--primary:active:not(:disabled) {
  transform: translateY(0);
}

.btn--secondary { background: #f1f5f9; color: #0f172a; }
.btn--secondary:hover:not(:disabled) { background: #e2e8f0; }

.btn--success { background: #10b981; color: white; }
.btn--success:hover:not(:disabled) { background: #059669; }

.btn--warning { background: #f59e0b; color: white; }
.btn--warning:hover:not(:disabled) { background: #d97706; }

.btn--danger { background: #ef4444; color: white; }
.btn--danger:hover:not(:disabled) { background: #dc2626; }

.btn--outline {
  background: transparent;
  color: #2563eb;
  border: 1.5px solid #2563eb;
}
.btn--outline:hover:not(:disabled) { background: rgba(37, 99, 235, 0.08); }

.btn--ghost { background: transparent; color: #475569; }
.btn--ghost:hover:not(:disabled) { background: rgba(15, 23, 42, 0.05); color: #0f172a; }

.btn--loading { pointer-events: none; }

.btn__spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

/* Спиннер для светлых кнопок */
.btn--outline .btn__spinner,
.btn--ghost .btn__spinner,
.btn--secondary .btn__spinner {
  border-color: rgba(37, 99, 235, 0.2);
  border-top-color: #2563eb;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn--loading .btn__content {
  opacity: 0.7;
}
</style>