<template>
  <footer class="bg-slate-950 text-white pt-20 pb-10">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Info -->
        <div class="space-y-6">
          <div
            class="flex items-center gap-3 bg-white p-4 rounded-[2rem] inline-flex"
          >
            <img
              src="/logo-vibrant.png"
              alt="Royal Care Kids Store"
              class="h-12 w-auto"
            />
          </div>
          <p class="text-slate-400 leading-relaxed text-sm">
            Baby & mothercare essentials for your little royal. Premium
            clothing, accessories, and gifts carefully curated for your family
            in Accra.
          </p>
          <div class="flex items-center gap-4">
            <a
              href="https://instagram.com/RoyalCareKidsStore"
              target="_blank"
              class="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-primary-500 hover:scale-110 active:scale-95 transition-all duration-300 group shadow-lg"
            >
              <Icon
                name="lucide:instagram"
                class="text-xl group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.tiktok.com/@royalcarekidsstore"
              target="_blank"
              class="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 group shadow-lg"
            >
              <Icon
                name="simple-icons:tiktok"
                class="text-xl group-hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.facebook.com/RoyalCareKidsStore"
              target="_blank"
              class="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-secondary-500 hover:scale-110 active:scale-95 transition-all duration-300 group shadow-lg"
            >
              <Icon
                name="lucide:facebook"
                class="text-xl group-hover:animate-bounce"
              />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-bold mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li v-for="link in links" :key="link.name">
              <NuxtLink
                :to="link.path"
                class="text-slate-400 hover:text-primary-500 transition-colors duration-300"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="text-lg font-bold mb-6">Shop by Category</h4>
          <ul class="space-y-4">
            <li v-for="cat in categories" :key="cat">
              <NuxtLink
                to="/shop"
                class="text-slate-400 hover:text-primary-500 transition-colors duration-300"
              >
                {{ cat }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-bold mb-6">Contact Us</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-slate-400">
              <Icon
                name="lucide:map-pin"
                class="text-primary-500 mt-1 shrink-0"
              />
              <span>📍 Accra, Ghana<br />Delivery to everywhere</span>
            </li>
            <li class="flex items-center gap-3 text-slate-400">
              <Icon name="lucide:phone" class="text-primary-500 shrink-0" />
              <span>+233 50 158 7398</span>
            </li>
            <li class="flex items-center gap-3 text-slate-400">
              <Icon name="lucide:mail" class="text-primary-500 shrink-0" />
              <span>royalcarekidsstore@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6"
      >
        <p class="text-slate-500 text-sm">
          &copy; {{ new Date().getFullYear() }} Royal Care Kids Store. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { name: "Home", path: "/" },
  { name: "Shop All", path: "/shop" },
  { name: "About Our Story", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "FAQs", path: "/faqs" },
];

const categories = [
  "Clothing",
  "Accessories",
  "Gifts",
  "Care Items",
  "New Arrivals",
];
</script>
