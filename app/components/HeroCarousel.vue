<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Carousel Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          :src="slide.image"
          :alt="slide.title"
          class="w-full h-full object-cover scale-105 transition-transform duration-[10s] ease-linear"
          :class="{ 'scale-110': activeIndex === index }"
          fetchpriority="high"
        />
        <div class="absolute inset-0 bg-slate-900/40"></div>
      </div>

      <!-- Content -->
      <div
        class="container mx-auto px-6 relative z-10 h-full flex items-center pt-20"
      >
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-16 w-full"
        >
          <div class="max-w-3xl">
            <span
              class="hero-tag inline-block px-4 py-2 bg-primary-500 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8 transform -translate-y-10 opacity-0"
            >
              {{ slide.tag }}
            </span>
            <h1
              class="hero-title text-5xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 transform -translate-y-10 opacity-0"
              v-html="slide.title"
            ></h1>
            <p
              class="hero-description text-xl md:text-2xl text-white/90 leading-relaxed mb-12 transform -translate-y-10 opacity-0"
            >
              {{ slide.description }}
            </p>
            <div
              class="hero-actions flex flex-wrap gap-4 transform -translate-y-10 opacity-0"
            >
              <NuxtLink
                :to="slide.link"
                class="px-10 py-5 bg-transparent border-2 border-white text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-primary-500 transition-all duration-500"
              >
                {{ slide.cta }}
              </NuxtLink>
              <NuxtLink
                to="/about"
                class="px-10 py-5 bg-transparent border-2 border-white text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-primary-500 transition-all duration-500"
              >
                Our Story
              </NuxtLink>
            </div>
          </div>

          <!-- Optional Floating Image for specific slides -->
          <div
            v-if="slide.floatingImage"
            class="hero-floating relative w-full max-w-md lg:max-w-xl h-96 lg:h-[600px] transform translate-x-10 opacity-0 hidden lg:block"
          >
            <img
              :src="slide.floatingImage"
              alt="Premium Product"
              class="w-full h-full object-contain animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              loading="lazy"
            />
            <div
              class="absolute -top-10 -right-10 w-32 h-32 bg-primary-500/20 backdrop-blur-3xl rounded-full blur-3xl animate-pulse"
            ></div>
            <div
              class="absolute -bottom-20 -left-20 w-48 h-48 bg-secondary-500/20 backdrop-blur-3xl rounded-full blur-3xl animate-pulse delay-700"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel Indicators -->
    <div
      class="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6"
    >
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="setActiveSlide(index)"
        class="w-1 transition-all duration-500 rounded-full"
        :class="
          activeIndex === index
            ? 'h-12 bg-primary-500'
            : 'h-6 bg-white/30 hover:bg-white/50'
        "
      ></button>
    </div>

    <!-- Bottom Status Bar -->
    <div
      class="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-6"
    >
      <div
        class="flex items-center gap-4 group cursor-pointer"
        @click="$emit('scroll')"
      >
        <p
          class="text-white/60 text-[10px] font-black uppercase tracking-[0.4em] transition-colors group-hover:text-white"
        >
          Discover more
        </p>
        <div
          class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500"
        >
          <Icon
            name="lucide:arrow-down"
            class="text-white text-lg group-hover:text-primary-500 transition-colors"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
});

defineEmits(['scroll']);

const activeIndex = ref(0);
const autoplayInterval = ref(null);

const runAnimations = () => {
  const activeSlideClass = ".opacity-100.z-10";

  gsap.fromTo(
    `${activeSlideClass} .hero-tag`,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" },
  );
  gsap.fromTo(
    `${activeSlideClass} .hero-title`,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power4.out" },
  );
  gsap.fromTo(
    `${activeSlideClass} .hero-description`,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power4.out" },
  );
  gsap.fromTo(
    `${activeSlideClass} .hero-actions`,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power4.out" },
  );
  gsap.fromTo(
    `${activeSlideClass} .hero-floating`,
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power4.out" },
  );
};

const setActiveSlide = (index) => {
  activeIndex.value = index;
  resetAutoplay();
  nextTick(() => {
    runAnimations();
  });
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
    nextTick(() => {
      runAnimations();
    });
  }, 6000);
};

const resetAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    startAutoplay();
  }
};

onMounted(() => {
  runAnimations();
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayInterval.value) clearInterval(autoplayInterval.value);
});
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-30px) rotate(5deg);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}
</style>
