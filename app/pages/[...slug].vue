<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-6">
    <div class="text-center max-w-lg">
      <!-- Big 404 -->
      <h1 class="text-[12rem] font-black text-slate-100 leading-none tracking-tighter select-none">
        404
      </h1>
      <div class="-mt-8 mb-8">
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
          Page Not Found
        </h2>
        <p class="text-slate-500 text-lg leading-relaxed">
          This page doesn't exist or may have been moved. Let's get you back to the royal collection.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/"
          class="px-8 py-4 bg-primary-500 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-primary-600 shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          Back to Home
        </NuxtLink>
        <NuxtLink
          to="/shop"
          class="px-8 py-4 bg-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all"
        >
          Browse Shop
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '404 — Page Not Found | Royal Care Kids Store',
  meta: [{ name: 'robots', content: 'noindex' }]
})
</script>
