<template>
  <div class="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
    <div 
      v-for="sparkle in sparkles" 
      :key="sparkle.id"
      class="absolute w-4 h-4 rounded-full"
      :style="{ 
        left: sparkle.x + 'px', 
        top: sparkle.y + 'px', 
        background: sparkle.color,
        transform: `translate(-50%, -50%) scale(${sparkle.scale})`,
        opacity: sparkle.opacity
      }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sparkles = ref([])
let id = 0

const colors = ['#583CF1', '#EF2D5E', '#FBBF24', '#10B981', '#3B82F6']

const addSparkle = (e) => {
  const count = 6
  for (let i = 0; i < count; i++) {
    const sparkleId = id++
    const color = colors[Math.floor(Math.random() * colors.length)]
    const angle = (Math.PI * 2 * i) / count
    const velocity = 2 + Math.random() * 4
    
    const newSparkle = {
      id: sparkleId,
      x: e.clientX,
      y: e.clientY,
      color,
      scale: 1,
      opacity: 1,
      vx: Math.cos(angle) * velocity,
      vy: Math.sin(angle) * velocity
    }
    
    sparkles.value.push(newSparkle)
    
    const startTime = Date.now()
    const duration = 800
    
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = elapsed / duration
      
      if (progress < 1) {
        newSparkle.x += newSparkle.vx
        newSparkle.y += newSparkle.vy
        newSparkle.vy += 0.1 // gravity
        newSparkle.scale = 1 - progress
        newSparkle.opacity = 1 - progress
        requestAnimationFrame(animate)
      } else {
        sparkles.value = sparkles.value.filter(s => s.id !== sparkleId)
      }
    }
    
    requestAnimationFrame(animate)
  }
}

onMounted(() => {
  window.addEventListener('mousedown', addSparkle)
})

onUnmounted(() => {
  window.removeEventListener('mousedown', addSparkle)
})
</script>
