<template>
  <div
    class="group bg-slate-50 border border-slate-100 rounded-[3rem] overflow-hidden transition-all duration-500 hover:bg-white hover:border-slate-200"
  >
    <button
      @click="$emit('toggle')"
      class="w-full text-left px-10 py-10 flex items-center justify-between gap-6"
    >
      <span
        class="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight"
      >
        {{ question }}
      </span>
      <div
        class="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:bg-primary-500 group-hover:text-white"
        :class="{ 'rotate-180 bg-primary-500 text-white': isOpen }"
      >
        <Icon name="lucide:chevron-down" class="text-2xl" />
      </div>
    </button>

    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[500px] opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="max-h-[500px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="isOpen" class="px-10 pb-10">
        <div class="h-px bg-slate-100 mb-8"></div>
        <div
          class="text-lg text-slate-600 leading-relaxed font-medium prose prose-slate max-w-none"
          v-html="answer"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

defineEmits(['toggle']);
</script>
