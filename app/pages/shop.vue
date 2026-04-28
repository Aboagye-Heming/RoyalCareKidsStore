<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Header -->

    <section class="pt-40 pb-16 bg-primary-50 relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-full h-2 bg-rainbow-gradient animate-rainbow bg-200%"
      ></div>
      <div class="container mx-auto px-6">
        <h1
          class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-6"
        >
          The <span class="text-primary-500 italic">Royal</span> Collection
        </h1>
        <p class="text-xl text-slate-600 max-w-2xl leading-relaxed">
          Premium essentials for your little royal. Explore our curated
          selection of clothing, accessories, and mothercare items.
        </p>

        <!-- Search Bar -->
        <div class="mt-10 max-w-lg relative">
          <div
            class="absolute inset-y-0 left-5 flex items-center pointer-events-none"
          >
            <Icon name="lucide:search" class="text-slate-400 text-lg" />
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search products..."
            class="w-full pl-14 pr-12 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
            @input="currentPage = 1"
          />
          <button
            v-if="searchQuery"
            @click="
              searchQuery = '';
              currentPage = 1;
            "
            class="absolute inset-y-0 right-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
          >
            <Icon name="lucide:x" class="text-sm" />
          </button>
        </div>
      </div>
    </section>

    <!-- Shop Content -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <!-- Filters & Sort -->
        <div class="flex flex-col gap-6 mb-16">
          <!-- Category Filters + Sort -->
          <div
            class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div class="flex flex-wrap gap-3">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="
                  activeCategory = cat;
                  currentPage = 1;
                "
                class="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all relative overflow-hidden"
                :class="
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-xl scale-105 border-b-4 border-accent-yellow'
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                "
              >
                {{ cat }}
                <span
                  class="ml-1 font-medium normal-case tracking-normal opacity-60"
                  >({{ categoryCounts[cat] }})</span
                >
              </button>
            </div>
            <div class="flex items-center gap-4 shrink-0">
              <span
                class="text-sm font-bold text-slate-400 uppercase tracking-widest"
                >Sort:</span
              >
              <CustomSelect v-model="sortBy" :options="sortOptions" />
            </div>
          </div>

          <!-- Price Range + Results Count -->
          <div class="flex flex-wrap items-center gap-4">
            <span
              class="text-sm font-bold text-slate-400 uppercase tracking-widest shrink-0"
              >Price:</span
            >
            <div class="flex items-center gap-3">
              <div class="relative">
                <span
                  class="absolute inset-y-0 left-3 flex items-center text-slate-400 text-xs font-bold pointer-events-none"
                  >GHS</span
                >
                <input
                  v-model.number="minPrice"
                  type="number"
                  placeholder="Min"
                  min="0"
                  class="pl-11 pr-3 py-2.5 w-28 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all"
                  @input="currentPage = 1"
                />
              </div>
              <span class="text-slate-300 font-bold">—</span>
              <div class="relative">
                <span
                  class="absolute inset-y-0 left-3 flex items-center text-slate-400 text-xs font-bold pointer-events-none"
                  >GHS</span
                >
                <input
                  v-model.number="maxPrice"
                  type="number"
                  placeholder="Max"
                  min="0"
                  class="pl-11 pr-3 py-2.5 w-28 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:border-primary-300 transition-all"
                  @input="currentPage = 1"
                />
              </div>
              <button
                v-if="minPrice || maxPrice"
                @click="
                  minPrice = null;
                  maxPrice = null;
                  currentPage = 1;
                "
                class="text-xs font-bold text-slate-400 hover:text-primary-500 transition-colors uppercase tracking-widest"
              >
                Clear
              </button>
            </div>
            <span class="ml-auto text-sm font-bold text-slate-400">
              {{ filteredProducts.length }}
              {{ filteredProducts.length === 1 ? "product" : "products" }} found
            </span>
          </div>
        </div>

        <!-- Product Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <ProductCard
            v-for="product in paginatedProducts"
            :key="product.id"
            v-bind="product"
          />
        </div>

        <!-- Empty State -->
        <div v-if="paginatedProducts.length === 0" class="py-20 text-center">
          <Icon
            name="lucide:search-x"
            class="text-6xl text-slate-200 mb-4 mx-auto"
          />
          <p class="text-xl font-bold text-slate-400 mb-2">
            No products found.
          </p>
          <p class="text-slate-300 mb-8">
            Try adjusting your search or filters.
          </p>
          <button
            @click="resetFilters"
            class="px-8 py-4 bg-primary-500 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-primary-600 transition-all"
          >
            Clear All Filters
          </button>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-20 flex justify-center gap-4">
          <button
            @click="currentPage > 1 ? currentPage-- : null"
            class="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all shadow-sm"
          >
            <Icon name="lucide:chevron-left" />
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            class="min-w-[48px] h-12 px-4 rounded-2xl transition-all shadow-lg flex items-center justify-center font-black text-sm z-10"
            :class="[
              Number(currentPage) === Number(page)
                ? 'bg-primary-500 text-white border-b-4 border-primary-700'
                : 'bg-slate-50 text-slate-900 hover:bg-primary-500 hover:text-white',
            ]"
          >
            {{ page }}
          </button>
          <button
            @click="currentPage < totalPages ? currentPage++ : null"
            class="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all shadow-sm"
          >
            <Icon name="lucide:chevron-right" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

useHead({
  title: "Shop | Royal Care Kids Store",
  meta: [
    {
      name: "description",
      content:
        "Browse our premium collection of baby and kids clothing, accessories, gifts, and mothercare items. Shop online with delivery across Accra, Ghana.",
    },
    {
      property: "og:title",
      content: "Shop the Royal Collection | Royal Care Kids Store",
    },
    {
      property: "og:description",
      content:
        "Premium baby & kids essentials curated with love. Clothing, accessories, gifts and more. Delivered across Accra, Ghana.",
    },
    { property: "og:image", content: "/logo-vibrant.png" },
    { property: "og:type", content: "website" },
  ],
});

const route = useRoute();
const activeCategory = ref("All");
const sortBy = ref("newest");
const currentPage = ref(1);
const searchQuery = ref("");
const minPrice = ref(null);
const maxPrice = ref(null);
const itemsPerPage = 4;
const categories = ["All", "Clothing", "Accessories", "Gifts", "Care Items"];

const sortOptions = [
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "low-high" },
  { label: "Price: High to Low", value: "high-low" },
];

const products = [
  {
    id: 1,
    name: "Organic Cotton Onepiece",
    price: 180,
    category: "Clothing",
    image: "/images/hero.png",
    tag: "New",
    date: "2024-03-25",
  },
  {
    id: 2,
    name: "Wooden Sensory Rattle",
    price: 95,
    category: "Accessories",
    image: "/images/accessories.png",
    tag: "Best Seller",
    date: "2024-03-20",
  },
  {
    id: 3,
    name: "Sleepy Bear Gift Set",
    price: 450,
    category: "Gifts",
    image: "/images/gifts.png",
    tag: "Gift",
    date: "2024-03-15",
  },
  {
    id: 4,
    name: "Organic Baby Massage Oil",
    price: 120,
    category: "Care Items",
    image: "/images/care.png",
    tag: "Premium",
    date: "2024-03-10",
  },
  {
    id: 5,
    name: "Velvet Ribbon Headband",
    price: 65,
    category: "Accessories",
    image: "/images/accessories.png",
    date: "2024-03-05",
  },
  {
    id: 6,
    name: "Silk Swaddle Blanket",
    price: 320,
    category: "Care Items",
    image: "/images/hero.png",
    tag: "New",
    date: "2024-03-01",
  },
  {
    id: 7,
    name: "Embroidered Christening Gown",
    price: 850,
    category: "Clothing",
    image: "/images/hero.png",
    tag: "Royal",
    date: "2024-02-25",
  },
  {
    id: 8,
    name: "Luxury Bath Time Kit",
    price: 280,
    category: "Care Items",
    image: "/images/care.png",
    date: "2024-02-20",
  },
];

const categoryCounts = computed(() => {
  const counts = { All: products.length };
  categories.slice(1).forEach((cat) => {
    counts[cat] = products.filter((p) => p.category === cat).length;
  });
  return counts;
});

const filteredProducts = computed(() => {
  let result = [...products];

  if (activeCategory.value !== "All") {
    result = result.filter((p) => p.category === activeCategory.value);
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }

  if (minPrice.value !== null && minPrice.value !== "") {
    result = result.filter((p) => p.price >= Number(minPrice.value));
  }

  if (maxPrice.value !== null && maxPrice.value !== "") {
    result = result.filter((p) => p.price <= Number(maxPrice.value));
  }

  if (sortBy.value === "low-high") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortBy.value === "high-low") {
    result.sort((a, b) => b.price - a.price);
  } else {
    result.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  return result;
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage),
);

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
});

onMounted(() => {
  const cat = route.query.category;
  if (cat && categories.includes(String(cat))) {
    activeCategory.value = String(cat);
  }
});

const resetFilters = () => {
  activeCategory.value = "All";
  searchQuery.value = "";
  minPrice.value = null;
  maxPrice.value = null;
  currentPage.value = 1;
};
</script>
