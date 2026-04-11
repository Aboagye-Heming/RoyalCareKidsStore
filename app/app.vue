<template>
  <div class="antialiased text-slate-900 selection:bg-primary-300 selection:text-primary-900">
    <!-- Intro Loader Overlay -->
    <div ref="loader" class="fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none">
      <div class="overflow-hidden">
        <img 
          ref="loaderText" 
          src="/logo-vibrant.png" 
          alt="Royal Care Kids Store" 
          class="h-48 w-auto transform translate-y-full opacity-0"
        />
      </div>
    </div>
    
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const loader = ref(null)
const loaderText = ref(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  // Animate text up
  tl.to(loaderText.value, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    delay: 0.2
  })
  
  // Hold briefly
  tl.to({}, { duration: 0.8 })
  
  // Animate text down or fade
  tl.to(loaderText.value, {
    y: '-100%',
    opacity: 0,
    duration: 0.8,
    ease: "power4.inOut"
  })
  
  // Slide loader out
  tl.to(loader.value, {
    y: '-100%',
    duration: 1,
    ease: "expo.inOut"
  }, "-=0.4")
})
</script>
