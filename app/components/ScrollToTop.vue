<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-32 right-6 z-40 w-12 h-12 bg-white border border-slate-100 text-slate-500 rounded-2xl shadow-xl flex items-center justify-center hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Scroll to top"
    >
      <Icon name="lucide:chevron-up" class="text-xl" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
