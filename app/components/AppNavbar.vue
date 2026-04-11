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
            src="/logo-vibrant.png"
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
          class="text-sm font-black tracking-widest uppercase transition-all duration-300 relative py-1 group"
          :class="[
            isScrolled || isMobileMenuOpen || !isHomePage
              ? (route.path === link.path ? 'text-primary-500' : 'text-slate-900 hover:text-primary-500')
              : (route.path === link.path ? 'text-white' : 'text-white/60 hover:text-white'),
          ]"
        >
          {{ link.name }}
          <span 
            class="absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all duration-300"
            :class="[
              route.path === link.path ? 'w-full' : 'w-0 group-hover:w-1/2',
              !(isScrolled || isMobileMenuOpen || !isHomePage) && route.path === link.path ? 'bg-white' : ''
            ]"
          ></span>
        </NuxtLink>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center gap-2 md:gap-4">
        <!-- Favorites -->
        <button
          @click="$emit('open-favorites')"
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
            :class="{ 'fill-primary-500 text-primary-500': favorites.length > 0 }"
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

        <!-- Silicon Valley Glassy Fade Card -->
        <transition
          enter-active-class="transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
          enter-from-class="opacity-0 blur-2xl scale-110"
          enter-to-class="opacity-100 blur-0 scale-100"
          leave-active-class="transition-all duration-500 ease-[cubic-bezier(0.755,0.05,0.855,0.06)]"
          leave-from-class="opacity-100 blur-0 scale-100"
          leave-to-class="opacity-0 blur-2xl scale-110"
        >
          <div
            v-if="isMobileMenuOpen"
            class="relative w-full max-w-sm bg-white/40 backdrop-blur-3xl rounded-[4rem] border border-white/40 shadow-[0_32px_128px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col max-h-[85vh]"
          >
            <!-- Dynamic Mesh Gradient Background -->
            <div class="absolute inset-0 -z-10 opacity-30">
              <div
                class="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary-400/40 rounded-full blur-[100px] animate-pulse"
              ></div>
              <div
                class="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-secondary-400/40 rounded-full blur-[100px] animate-pulse"
                style="animation-delay: 1s"
              ></div>
            </div>

            <!-- Header (Centered Logo) -->
            <div class="flex flex-col items-center pt-12 pb-6 text-center">
              <div class="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 mb-2">
                <img src="/logo-vibrant.png" alt="Royal Care" class="h-8 w-auto" />
              </div>
              <span class="text-[9px] font-black text-primary-600 uppercase tracking-[0.4em]">Navigator</span>
            </div>

            <!-- Staggered Glassy Links (Balanced Spacing) -->
            <div
              class="flex-1 px-8 py-4 flex flex-col justify-center space-y-1 text-center overflow-y-auto"
            >
              <NuxtLink
                v-for="(link, idx) in navLinks"
                :key="link.path"
                :to="link.path"
                @click="handleNavClick(link.path)"
                class="group relative py-4 rounded-[2.5rem] transition-all duration-500 hover:bg-white/40 border border-transparent hover:border-white/60 animate-in fade-in zoom-in-95"
                :style="{ animationDelay: `${idx * 100}ms` }"
              >
                <div class="flex flex-col items-center">
                  <span
                    class="text-[9px] font-black text-primary-500 uppercase tracking-[0.4em] mb-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >Discover</span
                  >
                  <span
                    class="text-3xl font-black text-slate-900 tracking-tighter group-active:scale-95 transition-all duration-500"
                    >{{ link.name }}</span
                  >
                </div>
              </NuxtLink>
            </div>

            <!-- Futuristic Footer -->
            <div class="p-10 flex justify-center">
              <NuxtLink
                to="/shop"
                @click="handleNavClick('/shop')"
                class="block w-full py-6 bg-slate-900 text-white text-center rounded-[2rem] font-black uppercase tracking-widest shadow-2xl active:scale-95 transition-all text-[10px]"
              >
                Explore Marketplace
              </NuxtLink>
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

defineEmits(["open-cart", "open-favorites"]);

const route = useRoute();
const { cartCount, favorites } = useCart();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const isHomePage = computed(() => route.path === "/");

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "FAQs", path: "/faqs" },
  { name: "Contact", path: "/contact" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const handleNavClick = (path) => {
  isMobileMenuOpen.value = false;
  if (route.path === path) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
