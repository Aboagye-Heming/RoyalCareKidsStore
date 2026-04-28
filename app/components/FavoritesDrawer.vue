<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-show="isOpen"
      class="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[100] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
    >
      <!-- Header -->
      <div
        class="p-8 border-b border-slate-100 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 bg-secondary-50 rounded-2xl flex items-center justify-center"
          >
            <Icon name="lucide:heart" class="text-secondary-600 text-xl" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">
              Favorites
            </h2>
            <p
              class="text-sm font-bold text-slate-400 uppercase tracking-widest"
            >
              {{ favorites.length }} Items
            </p>
          </div>
        </div>
        <button
          @click="$emit('close')"
          class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-50 transition-colors"
        >
          <Icon name="lucide:x" class="text-slate-400 text-2xl" />
        </button>
      </div>

      <!-- Items List -->
      <div class="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
        <div
          v-if="favorites.length === 0"
          class="h-full flex flex-col items-center justify-center text-center space-y-4"
        >
          <div
            class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4"
          >
            <Icon name="lucide:heart" class="text-slate-200 text-4xl" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">No favorites yet</h3>
          <p class="text-slate-400">
            Start adding your favorite royal pieces to see them here.
          </p>
          <NuxtLink
            to="/shop"
            @click="$emit('close')"
            class="px-8 py-4 bg-primary-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl"
          >
            Explore Shop
          </NuxtLink>
        </div>

        <div
          v-for="item in favorites"
          :key="item.id"
          class="flex gap-6 p-4 bg-slate-50 rounded-3xl border border-slate-100 group"
        >
          <div
            class="w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0 shadow-sm"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 space-y-1">
            <div class="flex justify-between">
              <h4
                class="font-bold text-slate-900 leading-tight group-hover:text-primary-500 transition-colors"
              >
                {{ item.name }}
              </h4>
              <button
                @click="toggleFavorite(item)"
                class="text-slate-300 hover:text-red-500 transition-colors"
              >
                <Icon name="lucide:heart" class="fill-red-500 text-red-500" />
              </button>
            </div>
            <p
              class="text-xs font-black text-primary-500 uppercase tracking-widest"
            >
              {{ item.category }}
            </p>
            <div class="flex items-center justify-between pt-2">
              <span class="font-extrabold text-slate-900"
                >GHS {{ item.price.toFixed(2) }}</span
              >
              <button
                @click="handleAddToCart(item)"
                class="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-100 text-xs font-black uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <!-- Overlay -->
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isOpen"
      @click="$emit('close')"
      class="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[90]"
    ></div>
  </transition>
</template>

<script setup>
import { watch, onUnmounted } from "vue";
import { useCart } from "~/composables/useCart";

const props = defineProps({
  isOpen: Boolean,
});

defineEmits(["close"]);

watch(() => props.isOpen, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = ''
})

const { favorites, toggleFavorite, addToCart } = useCart();

const handleAddToCart = (item) => {
  addToCart(item);
  // Optionally close favorites when adding to cart? User might want to add more.
  // For now, let's keep it open but provide visual feedback via toast (already in addToCart).
};
</script>
