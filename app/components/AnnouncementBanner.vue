<template>
  <transition
    enter-active-class="transition-all duration-500 ease-out"
    enter-from-class="-translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-full opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed top-0 left-0 right-0 z-[60] h-10 bg-slate-950 text-white flex items-center justify-center px-10 text-xs"
    >
      <p class="flex items-center gap-2 font-bold">
        <Icon name="lucide:truck" class="text-primary-400 shrink-0 text-sm" />
        <span class="hidden sm:inline text-slate-300">Free delivery on orders over GHS 500&nbsp;&nbsp;•&nbsp;&nbsp;</span>
        <NuxtLink to="/contact" @click="dismiss" class="text-primary-400 hover:text-primary-300 transition-colors">
          Call: +233 50 158 7398
        </NuxtLink>
      </p>
      <button
        @click="dismiss"
        class="absolute right-4 text-slate-500 hover:text-white transition-colors p-1"
        aria-label="Dismiss announcement"
      >
        <Icon name="lucide:x" class="text-sm" />
      </button>
    </div>
  </transition>
</template>

<script setup>
const { isVisible, dismiss } = useAnnouncement()
</script>
