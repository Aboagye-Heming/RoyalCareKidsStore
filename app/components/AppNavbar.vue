<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/10"
    :class="[
      isScrolled || isMobileMenuOpen || !isHomePage
        ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div
          class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-105 transition-all duration-500"
        >
          <img
            src="/logo.png"
            alt="Royal Care Kids Store"
            class="h-8 md:h-10 w-auto"
          />
        </div>
      </NuxtLink>

      <!-- Nav Links (Desktop) -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-sm font-black tracking-widest uppercase hover:text-primary-500 transition-colors duration-300"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? 'text-slate-900'
              : 'text-white/80',
          ]"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 md:gap-4">
        <!-- Favorites -->
        <button
          class="p-2 relative group"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? 'text-slate-900'
              : 'text-white',
          ]"
        >
          <Icon
            name="lucide:heart"
            class="text-xl group-hover:scale-110 transition-transform"
          />
          <span
            v-if="favorites.length"
            class="absolute top-0 right-0 min-w-[16px] h-4 bg-secondary-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white px-1 leading-none"
            >{{ favorites.length }}</span
          >
        </button>

        <!-- Cart -->
        <button
          @click="$emit('open-cart')"
          class="p-2 relative group"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? 'text-slate-900'
              : 'text-white',
          ]"
        >
          <Icon
            name="lucide:shopping-bag"
            class="text-xl group-hover:scale-110 transition-transform"
          />
          <span
            v-if="cartCount"
            class="absolute top-0 right-0 min-w-[16px] h-4 bg-primary-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white px-1 leading-none"
            >{{ cartCount }}</span
          >
        </button>

        <!-- Shop Now (Desktop) -->
        <NuxtLink
          to="/shop"
          class="hidden lg:block px-6 py-2 rounded-full font-black text-xs tracking-widest uppercase transition-all duration-300 border-b-2"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-xl border-primary-700'
              : 'bg-white text-primary-500 hover:bg-primary-50 border-white/20',
          ]"
        >
          Shop Now
        </NuxtLink>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? 'text-slate-900'
              : 'text-white',
          ]"
        >
          <Icon
            :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="text-2xl"
          />
        </button>
      </div>
    </div>

    <!-- Silicon Valley "Unique" Mobile Menu -->
    <Teleport to="body">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:hidden"
      >
        <!-- Backdrop -->
        <transition
          enter-active-class="transition-opacity duration-500 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-300 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isMobileMenuOpen"
            class="absolute inset-0 bg-slate-950/20 backdrop-blur-2xl"
            @click="isMobileMenuOpen = false"
          ></div>
        </transition>

        <!-- Morphic Glass Card -->
        <transition
          enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          enter-from-class="opacity-0 scale-90 translate-y-8"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.7,0,0.84,0)]"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="isMobileMenuOpen"
            class="relative w-full max-w-sm bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white/40 shadow-[0_32px_128px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col"
          >
            <!-- Dynamic Mesh Gradient Background -->
            <div class="absolute inset-0 -z-10 opacity-30">
              <div
                class="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary-400/30 rounded-full blur-[100px] animate-pulse"
              ></div>
              <div
                class="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-secondary-400/30 rounded-full blur-[100px] animate-pulse"
                style="animation-delay: 1s"
              ></div>
            </div>

            <!-- Header -->
            <div class="flex items-center justify-between p-8">
              <div class="flex items-center gap-3">
                <div class="bg-white p-2 rounded-xl shadow-sm">
                  <img src="/logo.png" alt="Royal Care" class="h-6 w-auto" />
                </div>
              </div>
              <button
                @click="isMobileMenuOpen = false"
                class="w-10 h-10 rounded-2xl bg-white/50 flex items-center justify-center text-slate-900 active:scale-95 transition-all border border-white/50"
              >
                <Icon name="lucide:x" class="text-xl" />
              </button>
            </div>

            <!-- Refined Tech Links (No numbers/arrows) -->
            <div
              class="flex-1 px-8 py-10 space-y-8 flex flex-col justify-center text-center"
            >
              <NuxtLink
                v-for="(link, idx) in navLinks"
                :key="link.path"
                :to="link.path"
                @click="isMobileMenuOpen = false"
                class="group flex flex-col items-center p-4 rounded-3xl hover:bg-white/40 transition-all border border-transparent hover:border-white/60"
              >
                <span
                  class="text-[8px] font-black text-primary-500 uppercase tracking-[0.4em] mb-2 opacity-0 group-hover:opacity-100 transition-all"
                  >Explore</span
                >
                <span
                  class="text-3xl font-black text-slate-900 tracking-tighter group-active:scale-95 transition-all"
                  >{{ link.name }}</span
                >
              </NuxtLink>
            </div>

            <!-- Futuristic Footer / Status Ticker -->
            <div class="p-8 mt-4 border-t border-white/20 bg-white/20">
              <div class="flex flex-col gap-6">
                <NuxtLink
                  to="/shop"
                  @click="isMobileMenuOpen = false"
                  class="block w-full py-5 bg-slate-900 text-white text-center rounded-2xl font-black uppercase tracking-widest shadow-xl active:scale-95 transition-all text-xs"
                >
                  Enter Marketplace
                </NuxtLink>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </Teleport>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useCart } from "~/composables/useCart";

defineEmits(["open-cart"]);

const route = useRoute();
const { cartCount, favorites } = useCart();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const isHomePage = computed(() => route.path === "/");

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
