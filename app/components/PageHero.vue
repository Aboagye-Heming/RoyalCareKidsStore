<template>
  <section 
    class="relative pt-40 pb-20 overflow-hidden"
    :class="variant === 'light' ? 'bg-primary-50' : 'bg-slate-50'"
  >
    <!-- Silicon Valley Mesh Background (Optional/Variant based) -->
    <div v-if="variant === 'light'" class="absolute inset-0 z-0 opacity-40">
      <div class="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary-400/40 rounded-full blur-[100px] animate-pulse"></div>
      <div class="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-secondary-400/40 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl">
        <span
          v-if="tag"
          class="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-600 text-xs font-black uppercase tracking-widest mb-6"
        >
          {{ tag }}
        </span>
        <h1
          class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
        >
          <span v-html="title"></span>
        </h1>
        <p
          v-if="subtitle"
          class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  tag: String,
  variant: {
    type: String,
    default: 'default' // 'default' or 'light'
  }
});
</script>
