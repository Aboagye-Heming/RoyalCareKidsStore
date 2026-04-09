<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div 
      v-if="visible" 
      class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[10001] px-8 py-4 rounded-3xl bg-slate-900 border-2 border-white/10 shadow-2xl flex items-center gap-4 min-w-[300px]"
    >
      <div 
        class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
        :class="type === 'success' ? 'bg-primary-500' : 'bg-secondary-500'"
      >
        <Icon :name="type === 'success' ? 'lucide:check-circle' : 'lucide:alert-circle'" class="text-white text-xl" />
      </div>
      <div>
        <p class="text-white font-black text-sm tracking-tight capitalize">{{ type }}</p>
        <p class="text-slate-400 text-xs font-bold leading-tight">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useToast } from '~/composables/useToast'
const { visible, message, type } = useToast()
</script>
