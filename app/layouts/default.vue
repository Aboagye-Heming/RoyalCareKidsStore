<template>
  <div class="min-h-screen flex flex-col font-sans selection:bg-primary-500 selection:text-white">
    <AppNavbar @open-cart="isCartOpen = true" />
    
    <CartDrawer :is-open="isCartOpen" @close="isCartOpen = false" />
    <Toast />
    
    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
    
    <AIAssistant />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isCartOpen = ref(false)
</script>

<style>
/* Custom Navbar Visibility Fix */
.nav-scrolled {
  @apply bg-white/95 backdrop-blur-md shadow-lg border-slate-100;
}

/* Cursor Reset for touch */
@media (max-width: 768px) {
  .cursor-none {
    cursor: auto !important;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
