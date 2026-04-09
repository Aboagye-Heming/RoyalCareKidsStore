<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Hero Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/hero.png" 
          alt="Royal Care Hero" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10 pt-20">
        <div class="max-w-3xl" ref="heroContent">
          <span class="inline-block px-4 py-2 bg-primary-500 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8 transform -translate-y-10 opacity-0 hero-animate">
            Est. 2024 | Accra
          </span>
          <h1 class="text-5xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 transform -translate-y-10 opacity-0 hero-animate">
            Your Little <br/>
            <span class="text-primary-500">Royal</span> 🍼
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 transform -translate-y-10 opacity-0 hero-animate">
            Baby & mothercare essentials curated with love. <br class="hidden md:block" />
            Clothing, accessories, gifts, and premium care items.
          </p>
          <div class="flex flex-wrap gap-4 transform -translate-y-10 opacity-0 hero-animate">
            <NuxtLink 
              to="/shop"
              class="px-10 py-5 bg-white text-primary-500 font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-500 hover:text-white transition-all duration-500 shadow-2xl border-b-4 border-accent-yellow"
            >
              Shop Collection
            </NuxtLink>
            <NuxtLink 
              to="/about"
              class="px-10 py-5 bg-transparent border-2 border-white text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-primary-500 transition-all duration-500"
            >
              Our Story
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Bottom Status Bar -->
      <div class="absolute bottom-12 left-0 right-0 z-10 flex flex-col items-center gap-4">
        <p class="text-white/40 text-[10px] font-black uppercase tracking-[0.4em] transform translate-y-4 opacity-0 hero-animate">Scroll to Explore</p>
        <button 
          @click="scrollToCategories"
          class="group p-1 rounded-full bg-rainbow-gradient animate-rainbow bg-200% p-[2px] transition-transform hover:scale-110 active:scale-95 shadow-2xl"
        >
          <div class="bg-slate-900 rounded-full p-4">
            <Icon name="lucide:chevron-down" class="text-white text-2xl group-hover:translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </section>

    <!-- Category Grid -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <!-- Colorful Accents -->
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-yellow"></div>
      
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div class="max-w-2xl">
            <h2 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
              Shop by <span class="text-primary-500 italic">Category</span>
            </h2>
            <p class="text-slate-500 text-lg md:text-xl">Discover our carefully selected range of premium essentials for your little ones.</p>
          </div>
          <NuxtLink 
            to="/shop"
            class="px-10 py-5 bg-slate-200 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-slate-300 transition-all border-b-4 border-accent-green"
          >
            Explore More
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard 
            name="Clothing" 
            image="/images/hero.png" 
            count="120+"
            @click="$router.push('/shop')"
          />
          <CategoryCard 
            name="Accessories" 
            image="/images/accessories.png" 
            count="85+"
            @click="$router.push('/shop')"
          />
          <CategoryCard 
            name="Care Items" 
            image="/images/care.png" 
            count="40+"
            @click="$router.push('/shop')"
          />
          <CategoryCard 
            name="Gifts" 
            image="/images/gifts.png" 
            count="60+"
            @click="$router.push('/shop')"
          />
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-32">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h2 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            Trending <span class="text-secondary-500 underline decoration-8 decoration-secondary-100">Now</span>
          </h2>
          <p class="text-slate-500 text-lg">The most loved items by our royal community in Accra.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id"
            v-bind="product"
          />
        </div>

        <div class="mt-20 text-center">
          <NuxtLink 
            to="/shop"
            class="px-12 py-6 bg-primary-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-600 shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-accent-blue"
          >
            Explore All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 bg-primary-500 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="grid grid-cols-12 h-full">
          <div v-for="i in 12" :key="i" class="border-l border-white h-full"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10 italic">
          📦 Shop Online Today
        </h2>
        <p class="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Fast delivery across Accra and beyond. Get the best for your little royal with just a few clicks.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold">
            <Icon name="lucide:truck" class="text-2xl" />
            <span>Accra Delivery</span>
          </div>
          <div class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold">
            <Icon name="lucide:shield-check" class="text-2xl" />
            <span>Premium Quality</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const featuredProducts = [
  {
    id: 1,
    name: 'Organic Cotton Onepiece',
    price: 180,
    category: 'Clothing',
    image: '/images/hero.png',
    tag: 'New'
  },
  {
    id: 2,
    name: 'Wooden Sensory Rattle',
    price: 95,
    category: 'Accessories',
    image: '/images/accessories.png',
    tag: 'Best Seller'
  },
  {
    id: 3,
    name: 'Sleepy Bear Gift Set',
    price: 450,
    category: 'Gifts',
    image: '/images/gifts.png',
    tag: 'Gift'
  },
  {
    id: 4,
    name: 'Organic Baby Massage Oil',
    price: 120,
    category: 'Care',
    image: '/images/care.png',
    tag: 'Premium'
  }
]

onMounted(() => {
  gsap.to('.hero-animate', {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  })
})

const scrollToCategories = () => {
  window.scrollTo({
    top: window.innerHeight * 0.9,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
.hero-animate {
  will-change: transform, opacity;
}
</style>
