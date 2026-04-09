<template>
  <div class="group relative aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-slate-100 cursor-pointer">
    <img 
      :src="image" 
      :alt="name"
      class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
    />
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

    <!-- Content -->
    <div class="absolute bottom-10 left-10 right-10 flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div>
        <h3 class="text-4xl font-black text-white tracking-tight mb-2">{{ name }}</h3>
        <p class="text-white/80 text-sm font-semibold tracking-wide uppercase">{{ count }} items available</p>
      </div>
      <div class="w-14 h-14 rounded-full bg-primary-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 border-4 border-white/20">
        <Icon name="lucide:arrow-right" class="text-2xl" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  image: String,
  count: [String, Number]
})
</script>
