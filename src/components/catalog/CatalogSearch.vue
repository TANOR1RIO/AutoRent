<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="catalog-search">
    <div class="catalog-search__wrapper">
      <svg
        class="catalog-search__icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        :value="modelValue"
        type="text"
        placeholder="Поиск по марке или модели..."
        class="catalog-search__input"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>

<style scoped>
.catalog-search {
  margin-bottom: 24px;
}

.catalog-search__wrapper {
  position: relative;
}

.catalog-search__icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  pointer-events: none;
}

.catalog-search__input {
  width: 100%;
  padding: 12px 16px 12px 44px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  background: white;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.catalog-search__input::placeholder {
  color: #94a3b8;
}

.catalog-search__input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
</style>