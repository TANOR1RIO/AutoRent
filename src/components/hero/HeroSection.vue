<script setup lang="ts">
import HeroContent from './HeroContent.vue'
import HeroVisual from './HeroVisual.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__deco hero__deco--circle-1"></div>
    <div class="hero__deco hero__deco--circle-2"></div>

    <div class="hero__container">
      <HeroContent />
      <HeroVisual />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - 72px);
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  overflow: hidden;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 40%, #60a5fa 100%);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse at 15% 45%, rgba(255, 255, 255, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 75%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.hero__deco {
  position: absolute;
  pointer-events: none;
}

.hero__deco--circle-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%);
  border-radius: 50%;
  top: -100px;
  right: -100px;
}

.hero__deco--circle-2 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  bottom: -80px;
  left: -80px;
}

.hero__container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  align-items: center;
}

@media (max-width: 968px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 60px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 60px 0 40px;
    min-height: auto;
  }
}
</style>