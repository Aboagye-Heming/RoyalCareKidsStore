<template>
  <div class="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
    <!-- Image -->
    <div class="aspect-[4/5] overflow-hidden bg-slate-50 relative">
      <img 
        :src="image" 
        :alt="name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <!-- Badge -->
      <div v-if="tag" class="absolute top-4 left-4">
        <span class="px-3 py-1 bg-secondary-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
          {{ tag }}
        </span>
      </div>

      <!-- Favorite Button -->
      <button 
        @click="toggleFavorite(props)"
        class="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        :class="isFavorite(props.id) ? 'text-secondary-500 shadow-inner' : 'text-slate-400 shadow-md'"
      >
        <Icon :name="isFavorite(props.id) ? 'lucide:heart' : 'lucide:heart'" :class="[isFavorite(props.id) ? 'fill-secondary-500' : '']" class="text-lg" />
      </button>

      <!-- Quick Actions -->
      <div class="absolute bottom-4 left-0 right-0 px-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <button 
          @click="addToCart(props)"
          class="w-full py-3 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-primary-500 shadow-2xl transition-all flex items-center justify-center gap-2 group/btn"
        >
          <Icon name="lucide:shopping-cart" class="text-sm group-hover/btn:animate-bounce" />
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <p class="text-[10px] font-black text-primary-500 uppercase tracking-widest">{{ category }}</p>
      </div>
      <h3 class="text-slate-900 font-black text-lg leading-tight mb-2 group-hover:text-primary-500 transition-colors">
        {{ name }}
      </h3>
      <div class="flex items-center justify-between">
        <span class="text-slate-900 font-extrabold text-xl">GHS {{ price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '~/composables/useCart'

const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  name: String,
  price: Number,
  category: String,
  image: String,
  tag: String
})

const { addToCart, toggleFavorite, isFavorite } = useCart()
</script>
