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
      class="fixed top-0 left-0 right-0 z-[60] h-10 bg-slate-950 text-white flex items-center overflow-hidden"
    >
      <!-- Static on desktop, scrolling on mobile -->
      <div class="banner-content flex items-center gap-2 text-xs font-bold whitespace-nowrap">
        <Icon name="lucide:truck" class="text-primary-400 shrink-0 text-sm truck-icon" />
        <span class="text-slate-300">Free delivery on orders over <span class="ghs-pulse text-primary-400">GHS 500</span></span>
      </div>

      <button
        @click="dismiss"
        class="absolute right-3 text-slate-500 hover:text-white transition-colors p-1"
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

<style scoped>
/* Desktop: centered and static */
.banner-content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* Mobile: scroll when text might overflow */
@media (max-width: 480px) {
  .banner-content {
    position: static;
    transform: none;
    animation: marquee 12s linear infinite;
    padding-left: 100vw;
  }

  .banner-content:hover {
    animation-play-state: paused;
  }
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* Desktop animations */
.truck-icon {
  animation: truck-bounce 2s ease-in-out infinite;
}

.ghs-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes truck-bounce {
  0%, 100% { transform: translateX(0); }
  40%       { transform: translateX(4px); }
  60%       { transform: translateX(2px); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 1; text-shadow: 0 0 0px transparent; }
  50%       { opacity: 0.75; text-shadow: 0 0 8px #FF5F0F; }
}
</style>
