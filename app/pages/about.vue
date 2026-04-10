<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative pt-40 pb-20 overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl">
          <span
            class="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-600 text-xs font-black uppercase tracking-widest mb-6"
            >Our Story</span
          >
          <h1
            class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
          >
            For Your Little <br />
            <span class="text-primary-500 italic">Royal</span>
          </h1>
          <p
            class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl"
          >
            Royal Care Kids Store was founded with a simple mission: to provide
            the most elegant, safe, and comfortable essentials for the next
            generation of royals in Accra.
          </p>
        </div>
      </div>

      <!-- Abstract Background -->
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/4"
      ></div>
    </section>

    <!-- CEO Section -->
    <section class="py-32 bg-slate-50 relative overflow-hidden">
      <!-- Rainbow accent -->
      <div
        class="absolute top-0 left-0 w-full h-2 bg-rainbow-gradient animate-rainbow bg-200%"
      ></div>

      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div class="relative group">
            <div
              class="absolute -inset-4 bg-primary-100 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"
            ></div>
            <div
              class="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/5]"
            >
              <img
                src="/images/royal.png"
                alt="CEO of Royal Care Kids Store"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <!-- Floating badge -->
            <div
              class="absolute -bottom-10 -right-4 md:-right-10 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center p-6 text-center border-8 border-slate-50"
            >
              <span
                class="text-primary-500 font-extrabold text-[10px] uppercase tracking-widest mb-1"
                >Founder & CEO</span
              >
              <p
                class="text-slate-900 font-black text-xs md:text-sm leading-tight"
              >
                Empowering Royal Parents
              </p>
            </div>
          </div>

          <div class="space-y-8">
            <div
              class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-xl text-xs font-black uppercase tracking-widest"
            >
              Meet the Visionary
            </div>
            <h2
              class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none"
            >
              Dedicated to
              <span class="text-secondary-500 italic">Your Royal Family</span>
            </h2>
            <p class="text-slate-500 text-lg leading-relaxed">
              "As a mother and an entrepreneur, I founded Royal Care Kids Store
              with a single mission: to provide the families of Accra with
              access to the highest quality essentials that don't compromise on
              style or safety."
            </p>
            <p class="text-slate-500 text-lg leading-relaxed">
              Every item in our collection is handpicked with love, designed to
              make the journey of parenthood just as elegant as it is rewarding.
              We aren't just a store; we are a community dedicated to the
              well-being of the next generation of royalty.
            </p>
            <div class="pt-6 flex items-center gap-6">
              <div class="w-16 h-px bg-slate-200"></div>
              <p class="font-bold text-slate-900 italic font-serif text-2xl">
                Founder, Royal Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-32 bg-slate-950 text-white rounded-[4rem] mx-6 mb-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Our Royal Values
          </h2>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">
            The pillars that define the Royal Care experience.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div
            v-for="value in values"
            :key="value.title"
            class="p-10 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-8"
            >
              <Icon :name="value.icon" class="text-white text-3xl" />
            </div>
            <h3 class="text-2xl font-bold mb-4">{{ value.title }}</h3>
            <p class="text-slate-400 leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    title: "Elegance",
    desc: "Timeless designs that make your little one shine with royal grace.",
    icon: "lucide:sparkles",
  },
  {
    title: "Safety",
    desc: "Only the safest, non-toxic, and organic materials touch your baby.",
    icon: "lucide:shield-check",
  },
  {
    title: "Community",
    desc: "Proudly serving the families of Accra with care and dedication.",
    icon: "lucide:heart",
  },
];
</script>
