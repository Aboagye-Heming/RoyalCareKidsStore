<template>
  <div class="bg-white">
    <!-- Hero Section -->
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
        <div class="container mx-auto px-6 relative z-10 h-full flex items-center pt-20">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
            <div class="max-w-3xl">
              <span
                class="hero-tag inline-block px-4 py-2 bg-primary-500 text-white text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8 transform -translate-y-10 opacity-0"
              >
                {{ slide.tag }}
              </span>
              <h1
                class="hero-title text-5xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 transform -translate-y-10 opacity-0"
                v-html="slide.title"
              >
              </h1>
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
      <div class="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="setActiveSlide(index)"
          class="w-1 transition-all duration-500 rounded-full"
          :class="activeIndex === index ? 'h-12 bg-primary-500' : 'h-6 bg-white/30 hover:bg-white/50'"
        ></button>
      </div>

      <!-- Bottom Status Bar -->
      <div
        class="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-6"
      >
        <div
          class="flex items-center gap-4 group cursor-pointer"
          @click="scrollToCategories"
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

    <!-- Category Grid -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <!-- Colorful Accents -->
      <div
        class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-yellow"
      ></div>

      <div class="container mx-auto px-6">
        <div
          class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
        >
          <div class="max-w-2xl">
            <h2
              class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6"
            >
              Shop by <span class="text-primary-500 italic">Category</span>
            </h2>
            <p class="text-slate-500 text-lg md:text-xl">
              Discover our carefully selected range of premium essentials for
              your little ones.
            </p>
          </div>
          <NuxtLink
            to="/shop"
            class="px-10 py-5 bg-slate-200 text-slate-900 font-bold text-sm uppercase tracking-widest rounded-full hover:bg-slate-300 transition-all"
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
          <h2
            class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-6"
          >
            Trending
            <span
              class="text-secondary-500 underline decoration-8 decoration-secondary-100"
              >Now</span
            >
          </h2>
          <p class="text-slate-500 text-lg">
            The most loved items by our royal community in Accra.
          </p>
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
            class="px-12 py-6 bg-primary-500 text-white font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-600 shadow-2xl transition-all hover:scale-105 active:scale-95"
          >
            Explore All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div
          class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8"
        >
          <div class="max-w-2xl">
            <h2
              class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6"
            >
              Our <span class="text-primary-500 italic">Royal</span> Community
            </h2>
            <p class="text-slate-500 text-lg md:text-xl">
              Hear from parents who trust Royal Care for their little ones.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group"
          >
            <!-- <div class="flex gap-1 mb-6 text-accent-yellow">
              <Icon
                v-for="i in 5"
                :key="i"
                name="lucide:star"
                class="text-sm fill-current"
              />
            </div> -->
            <p class="text-slate-600 text-lg mb-8 italic leading-relaxed">
              "{{ testimonial.text }}"
            </p>
            <div class="flex items-center gap-4">
              <div
                class="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-50"
              >
                <img
                  :src="testimonial.avatar"
                  :alt="testimonial.author"
                  class="w-full h-full object-cover"
                  loading="lazy"
                  width="56"
                  height="56"
                />
              </div>
              <div>
                <h4 class="font-bold text-slate-900">
                  {{ testimonial.author }}
                </h4>
                <p
                  class="text-slate-400 text-sm tracking-widest uppercase font-bold"
                >
                  {{ testimonial.role }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <!-- <section class="py-32 bg-primary-500 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="grid grid-cols-12 h-full">
          <div
            v-for="i in 12"
            :key="i"
            class="border-l border-white h-full"
          ></div>
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2
          class="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10 italic"
        >
          📦 Shop Online Today
        </h2>
        <p class="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Fast delivery across Accra and beyond. Get the best for your little
          royal with just a few clicks.
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <div
            class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold"
          >
            <Icon name="lucide:truck" class="text-2xl" />
            <span>Accra Delivery</span>
          </div>
          <div
            class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold"
          >
            <Icon name="lucide:shield-check" class="text-2xl" />
            <span>Premium Quality</span>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";

const activeIndex = ref(0);
const autoplayInterval = ref(null);

const slides = [
  {
    tag: "Est. 2024 | Accra",
    title: 'Your Little <br /> <span class="text-primary-500">Royal</span>',
    description: "Baby & mothercare essentials curated with love. Clothing, accessories, gifts, and premium care items.",
    image: "/images/hero-nursery.png",
    cta: "Shop Collection",
    link: "/shop"
  },
  {
    tag: "Premium Quality",
    title: 'Pure <span class="text-primary-500">Comfort</span> <br /> For Tiny Ones',
    description: "Organic cotton fabrics and gentle textures that embrace your baby with the softness they deserve.",
    image: "/images/hero-organic.png",
    cta: "Explore Apparel",
    link: "/shop"
  },
  {
    tag: "Boutique Selection",
    title: 'Modern <span class="text-primary-500">Essentials</span> <br /> For Parents',
    description: "Carefully handpicked items that make your parenting journey more beautiful and organized.",
    image: "/images/hero-accessories.png",
    cta: "View Accessories",
    link: "/shop"
  }
];

const runAnimations = () => {
  // Select ONLY the active slide to animate its children
  const activeSlideClass = ".opacity-100.z-10";
  
  gsap.fromTo(`${activeSlideClass} .hero-tag`, 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power4.out" }
  );
  gsap.fromTo(`${activeSlideClass} .hero-title`, 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power4.out" }
  );
  gsap.fromTo(`${activeSlideClass} .hero-description`, 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power4.out" }
  );
  gsap.fromTo(`${activeSlideClass} .hero-actions`, 
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power4.out" }
  );
  gsap.fromTo(`${activeSlideClass} .hero-floating`, 
    { x: 30, opacity: 0 },
    { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power4.out" }
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
    activeIndex.value = (activeIndex.value + 1) % slides.length;
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

const featuredProducts = [
  {
    id: 1,
    name: "Organic Cotton Onepiece",
    price: 180,
    category: "Clothing",
    image: "/images/hero.png",
    tag: "New",
  },
  {
    id: 2,
    name: "Wooden Sensory Rattle",
    price: 95,
    category: "Accessories",
    image: "/images/accessories.png",
    tag: "Best Seller",
  },
  {
    id: 3,
    name: "Sleepy Bear Gift Set",
    price: 450,
    category: "Gifts",
    image: "/images/gifts.png",
    tag: "Gift",
  },
  {
    id: 4,
    name: "Organic Baby Massage Oil",
    price: 120,
    category: "Care",
    image: "/images/care.png",
    tag: "Premium",
  },
];

const testimonials = [
  {
    id: 1,
    text: "The quality of the clothing is exceptional. My baby feels so comfortable, and the colors stay vibrant even after many washes. Truly royal care!",
    author: "Sarah Mensah",
    role: "Mother of 2",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 2,
    text: "Ordered a gift set for my sister, and she was blown away by the premium packaging and thoughtful selection of items. The best baby store in Accra!",
    author: "Kofi Owusu",
    role: "Happy Customer",
    avatar: "https://i.pravatar.cc/150?u=kofi",
  },
  {
    id: 3,
    text: "Fast delivery and amazing customer service. They really go above and beyond to make sure you have everything you need for your little one.",
    author: "Akosua Addo",
    role: "New Mom",
    avatar: "https://i.pravatar.cc/150?u=akosua",
  },
];

onMounted(() => {
  gsap.to(".hero-animate", {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out",
  });
});

const scrollToCategories = () => {
  window.scrollTo({
    top: window.innerHeight * 1,
    behavior: "smooth",
  });
};
</script>

<style scoped>
.hero-animate {
  will-change: transform, opacity;
}

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
