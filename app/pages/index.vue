<template>
  <div class="bg-white">
    <!-- Hero Carousel -->
    <HeroCarousel :slides="slides" @scroll="scrollToCategories" />

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
      <div class="container mx-auto px-6 mb-20">
        <div class="flex flex-col md:flex-row items-end justify-between gap-8">
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
      </div>

      <!-- Scrolling ticker — two copies for seamless loop -->
      <div
        class="testimonial-track-wrapper"
        @mouseenter="pauseScroll"
        @mouseleave="resumeScroll"
      >
        <div ref="trackRef" class="testimonial-track">
          <div
            v-for="(testimonial, i) in [...testimonials, ...testimonials]"
            :key="i"
            class="testimonial-item"
          >
            <TestimonialCard :testimonial="testimonial" />
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
          Shop Online Today
        </h2>
        <p class="text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-medium">
          Fast delivery across Accra and beyond. Get the best for your little
          royal with just a few clicks.
        </p>
        <div class="flex flex-wrap justify-center gap-6 mb-12">
          <div
            class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold"
          >
            <Icon name="lucide:truck" class="text-2xl" />
            <span>Nationwide Delivery</span>
          </div>
          <div
            class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold"
          >
            <Icon name="lucide:shield-check" class="text-2xl" />
            <span>Premium Quality</span>
          </div>
          <div
            class="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white font-bold"
          >
            <Icon name="lucide:heart" class="text-2xl" />
            <span>Curated with Love</span>
          </div>
        </div>
        <NuxtLink
          to="/shop"
          class="inline-block px-12 py-6 bg-white text-primary-500 font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-50 shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          Browse the Collection
        </NuxtLink>
      </div>
    </section> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

useHead({
  title:
    "Royal Care Kids Store | Premium Baby & Mothercare Essentials in Accra",
  meta: [
    {
      name: "description",
      content:
        "Royal Care Kids Store — premium baby clothing, accessories, gifts, and mothercare essentials for your little royal. Fast delivery across Accra, Ghana.",
    },
    {
      property: "og:title",
      content: "Royal Care Kids Store | Baby & Mothercare Essentials",
    },
    {
      property: "og:description",
      content:
        "Premium baby & kids essentials curated with love in Accra. Clothing, accessories, gifts and care items.",
    },
    { property: "og:image", content: "/images/hero-nursery.jpg" },
    { property: "og:type", content: "website" },
  ],
});
import gsap from "gsap";

const slides = [
  {
    tag: "Premium Kids Store",
    title: 'Your Little <br /> <span class="text-primary-500">Royal</span>',
    description:
      "Baby & mothercare essentials curated with love. Clothing, accessories, gifts, and premium care items.",
    image: "/images/hero-nursery.jpg",
    cta: "Shop Collection",
    link: "/shop",
  },
  {
    tag: "Premium Quality",
    title:
      'Pure <span class="text-primary-500">Comfort</span> <br /> For Tiny Ones',
    description:
      "Organic cotton fabrics and gentle textures that embrace your baby with the softness they deserve.",
    image: "/images/hero-organic.jpg",
    cta: "Explore Apparel",
    link: "/shop",
  },
  {
    tag: "Boutique Selection",
    title:
      'Modern <span class="text-primary-500">Essentials</span> <br /> For Parents',
    description:
      "Carefully handpicked items that make your parenting journey more beautiful and organized.",
    image: "/images/hero-accessories.jpg",
    cta: "View Accessories",
    link: "/shop",
  },
];

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
    avatar: "https://i.pravatar.cc/150?u=sarah",
    platform: "Instagram",
    link: "https://instagram.com/RoyalCareKidsStore",
  },
  {
    id: 2,
    text: "Ordered a gift set for my sister, and she was blown away by the premium packaging and thoughtful selection of items. The best baby store in Accra!",
    author: "Kofi Owusu",
    avatar: "https://i.pravatar.cc/150?u=kofi",
    platform: "Instagram",
    link: "https://instagram.com/RoyalCareKidsStore",
  },
  {
    id: 3,
    text: "Fast delivery and amazing customer service. They really go above and beyond to make sure you have everything you need for your little one.",
    author: "Akosua Addo",
    avatar: "https://i.pravatar.cc/150?u=akosua",
    platform: "Facebook",
    link: "https://www.facebook.com/RoyalCareKidsStore",
  },
];

const trackRef = ref(null);

const pauseScroll = () => {
  if (trackRef.value) trackRef.value.style.animationPlayState = "paused";
};
const resumeScroll = () => {
  if (trackRef.value) trackRef.value.style.animationPlayState = "running";
};

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

/* Testimonial infinite scroll */
.testimonial-track-wrapper {
  overflow: hidden;
  /* edge fade */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );
}

.testimonial-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  animation: scroll-left 28s linear infinite;
  will-change: transform;
}

.testimonial-item {
  width: 380px;
  flex-shrink: 0;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
