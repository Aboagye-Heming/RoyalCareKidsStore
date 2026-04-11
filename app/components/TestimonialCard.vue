<template>
  <div
    class="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group"
  >
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
        <h4 class="font-bold text-slate-900 leading-none mb-1">
          {{ testimonial.author }}
        </h4>
        <div class="flex items-center gap-2">
          <p
            class="text-slate-400 text-[10px] tracking-widest uppercase font-black"
          >
            {{ testimonial.role }}
          </p>
          <span class="w-1 h-1 rounded-full bg-slate-300"></span>
          <a
            v-if="testimonial.link"
            :href="testimonial.link"
            target="_blank"
            class="text-primary-500 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1"
          >
            <Icon
              :name="
                testimonial.platform === 'Instagram'
                  ? 'simple-icons:instagram'
                  : 'simple-icons:facebook'
              "
              class="text-xs"
            />
            View Comment
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
});
</script>
