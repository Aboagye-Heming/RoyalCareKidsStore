<template>
  <div class="relative min-w-[200px]" v-click-outside="close">
    <button 
      @click="toggle"
      class="w-full bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-black text-slate-900 flex items-center justify-between transition-all group active:scale-95"
    >
      <span class="uppercase tracking-widest text-[10px]">{{ label }}</span>
      <Icon 
        name="lucide:chevron-down" 
        class="text-slate-400 group-hover:text-primary-500 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div 
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl border border-slate-100 rounded-[2rem] shadow-2xl overflow-hidden z-[100]"
      >
        <div class="p-2 space-y-1">
          <button 
            v-for="option in options" 
            :key="option.value"
            @click="select(option)"
            class="w-full text-left px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all"
            :class="modelValue === option.value ? 'bg-primary-500 text-white shadow-lg' : 'text-slate-500 hover:bg-primary-50 hover:text-primary-600'"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: String,
  options: Array
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const label = computed(() => {
  const option = props.options.find(o => o.value === props.modelValue)
  return option ? option.label : 'Select Option'
})

const toggle = () => isOpen.value = !isOpen.value
const close = () => isOpen.value = false

const select = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

// Simple directive for outside clicks
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}
</script>
