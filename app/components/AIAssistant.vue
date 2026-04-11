<template>
  <div class="fixed bottom-6 right-6 z-50 font-sans">
    <!-- Chat Window -->
    <!-- Silicon Valley Morphic Chat Window -->
    <transition
      enter-active-class="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 scale-90 translate-y-8 blur-sm"
      enter-to-class="opacity-100 scale-100 translate-y-0 blur-0"
      leave-active-class="transition-all duration-300 ease-[cubic-bezier(0.7,0,0.84,0)]"
      leave-from-class="opacity-100 scale-100 translate-y-0 blur-0"
      leave-to-class="opacity-0 scale-95 translate-y-4 blur-sm"
    >
      <div
        v-if="isOpen"
        class="absolute bottom-24 right-0 w-80 md:w-[400px] bg-white/40 backdrop-blur-3xl rounded-[3rem] shadow-[0_32px_128px_rgba(0,0,0,0.2)] border border-white/40 overflow-hidden flex flex-col mb-4"
      >
        <!-- Mesh Background -->
        <div class="absolute inset-0 -z-10 opacity-20">
          <div class="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-primary-400/40 rounded-full blur-[100px] animate-pulse"></div>
          <div class="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-secondary-400/40 rounded-full blur-[100px] animate-pulse" style="animation-delay: 1s"></div>
        </div>

        <!-- Header -->
        <div class="p-6 border-b border-white/20 bg-white/20 flex items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg relative overflow-hidden group">
              <img src="/logo-vibrant.png" alt="Royal Assistant" class="w-8 h-8 object-contain" />
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-white/50 rounded-full z-20"></div>
            </div>
            <div>
              <h3 class="text-slate-900 font-black text-sm tracking-tight flex items-center gap-2">
                Royal Bot v4.0.1
                <span class="px-2 py-0.5 bg-primary-500/10 text-primary-600 text-[8px] uppercase tracking-widest rounded-full">Pro</span>
              </h3>
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                <span class="text-[9px] text-slate-500 font-black uppercase tracking-widest">Relay: Accra-HQ-01</span>
              </div>
            </div>
          </div>
          <button
            @click="toggleChat"
            class="w-10 h-10 flex items-center justify-center rounded-2xl hover:bg-white/40 text-slate-400 hover:text-slate-900 transition-all transform hover:rotate-90 border border-transparent hover:border-white/50"
          >
            <Icon name="lucide:x" class="w-6 h-6" />
          </button>
        </div>

        <!-- Messages Area -->
        <div
          class="p-6 flex-1 min-h-[350px] max-h-[450px] overflow-y-auto space-y-8 scrollbar-hide"
          ref="messagesContainer"
        >
          <!-- AI Greeting -->
          <div class="flex gap-4">
            <div class="w-10 h-10 rounded-2xl bg-white/60 flex items-center justify-center shrink-0 border border-white/40 shadow-sm">
              <Icon name="lucide:sparkles" class="w-5 h-5 text-primary-600" />
            </div>
            <div class="bg-white/60 backdrop-blur-xl text-slate-900 p-5 rounded-[1.5rem] rounded-tl-sm text-sm border border-white/40 shadow-sm leading-relaxed font-medium">
              Akwaaba! 🍼 System online. How can I help you find the perfect essentials for your little royal today?
            </div>
          </div>

          <!-- Quick Actions -->
          <div v-if="showOptions" class="flex flex-col gap-3 pl-14">
            <button
              v-for="opt in quickOptions"
              :key="opt.id"
              @click="handleAction(opt.id)"
              class="text-left px-5 py-3 bg-white/50 hover:bg-white border border-white/40 rounded-2xl text-[10px] font-black text-slate-600 hover:text-primary-600 hover:shadow-xl transition-all flex items-center justify-between group uppercase tracking-widest"
            >
              {{ opt.label }}
              <Icon :name="opt.icon" class="w-4 h-4 text-slate-300 group-hover:text-primary-600 transition-colors" />
            </button>
          </div>

          <!-- Dynamic Messages -->
          <div
            v-for="(msg, idx) in messages"
            :key="idx"
            class="flex flex-col gap-1 w-full animate-in fade-in slide-in-from-bottom-2 duration-500"
            :class="[msg.isUser ? 'items-end' : 'items-start']"
          >
            <div class="flex gap-4 max-w-[85%]" :class="[msg.isUser ? 'flex-row-reverse' : 'flex-row']">
              <div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm" :class="[msg.isUser ? 'bg-primary-600' : 'bg-white/60 border border-white/40']">
                <Icon v-if="!msg.isUser" name="lucide:bot" class="w-5 h-5 text-primary-600" />
                <Icon v-else name="lucide:user" class="w-5 h-5 text-white" />
              </div>
              <div class="p-5 text-sm shadow-sm leading-relaxed" :class="[msg.isUser ? 'bg-primary-600 text-white rounded-[1.5rem] rounded-tr-sm font-bold' : 'bg-white/60 text-slate-900 rounded-[1.5rem] rounded-tl-sm border border-white/40 font-medium']" v-html="msg.text"></div>
            </div>
            <div v-if="msg.links && !msg.isUser" class="flex flex-wrap gap-3 mt-3 pl-14">
              <NuxtLink v-for="link in msg.links" :key="link.url" :to="link.url" @click="isOpen = false" class="px-5 py-2.5 bg-primary-100 text-primary-700 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-primary-600 hover:text-white transition-all border border-primary-200 shadow-sm">
                {{ link.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex gap-4 pt-2">
            <div class="w-10 h-10 rounded-2xl bg-white/60 flex items-center justify-center shrink-0 border border-white/40 shadow-sm">
              <Icon name="lucide:sparkles" class="w-5 h-5 text-primary-600" />
            </div>
            <div class="bg-white/60 p-5 rounded-[1.5rem] rounded-tl-sm border border-white/40 shadow-sm flex items-center gap-2">
              <span class="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style="animation-delay: 0s"></span>
              <span class="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
              <span class="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-6 border-t border-white/20 bg-white/20 flex flex-col gap-4">
          <div class="flex gap-3">
            <input
              v-model="userInput"
              type="text"
              placeholder="System prompt..."
              class="flex-1 bg-white/50 border border-white/40 rounded-2xl px-6 py-3 text-sm outline-none focus:border-primary-400 focus:bg-white transition-all font-medium placeholder:text-slate-400"
              @keyup.enter="sendMessage"
            />
            <button
              @click="toggleListening"
              class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl transition-all active:scale-95 group relative overflow-hidden"
              :class="isListening ? 'bg-secondary-500 text-white animate-pulse' : 'bg-primary-600 text-white hover:bg-primary-700'"
            >
              <div v-if="isListening" class="absolute inset-0 bg-secondary-400 animate-ping opacity-20"></div>
              <Icon :name="isListening ? 'lucide:mic-off' : 'lucide:mic'" class="w-5 h-5 transition-transform" :class="{ 'scale-110': isListening }" />
            </button>
            <button
              @click="sendMessage"
              class="w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center shadow-xl hover:bg-primary-700 transition-all active:scale-95 group"
            >
              <Icon name="lucide:send" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <p v-if="isListening" class="text-[9px] text-center text-secondary-500 font-black uppercase tracking-widest animate-pulse">
            Transcribing audio stream...
          </p>
        </div>
      </div>
    </transition>

    <!-- Floating Toggle Button -->
    <button
      @click="toggleChat"
      class="group w-20 h-20 bg-primary-600 rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.3)] flex items-center justify-center text-white hover:scale-105 transition-all duration-500 relative overflow-hidden border-4 border-white/20"
      :class="isOpen ? 'bg-secondary-500 rotate-90 scale-90' : ''"
    >
      <div v-if="!isOpen" class="absolute inset-0 bg-gradient-to-tr from-primary-400/20 to-transparent"></div>
      <Icon
        v-if="!isOpen"
        name="lucide:sparkles"
        class="w-8 h-8 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform"
      />
      <Icon v-else name="lucide:x" class="w-8 h-8" />
    </button>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";

const isOpen = ref(false);
const showOptions = ref(true);
const isTyping = ref(false);
const isListening = ref(false);
const userInput = ref("");
const messages = ref([]);
const messagesContainer = ref(null);

let recognition = null;

onMounted(() => {
  if (process.client) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        isListening.value = false;
      };

      recognition.onerror = () => {
        isListening.value = false;
      };

      recognition.onend = () => {
        isListening.value = false;
      };
    }
  }
});

const toggleListening = () => {
  if (!recognition) {
    alert("Speech recognition is not supported in your browser.");
    return;
  }

  if (isListening.value) {
    recognition.stop();
  } else {
    isListening.value = true;
    recognition.start();
  }
};

const toggleChat = () => {
  isOpen.value = !isOpen.value;
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = () => {
  if (!userInput.value.trim()) return;

  const text = userInput.value;
  userInput.value = "";
  messages.value.push({ isUser: true, text });
  scrollToBottom();
  
  processResponse(text);
};

const processResponse = (text) => {
  showOptions.value = false;
  isTyping.value = true;

  setTimeout(() => {
    isTyping.value = false;
    let response = {
      isUser: false,
      text: "I'm not sure about that, but let's explore our latest collections or baby care tips!",
      links: [
        { label: "New Arrivals", url: "/shop" },
        { label: "Care Tips", url: "/about" }
      ]
    };

    const lowercaseText = text.toLowerCase();
    if (lowercaseText.includes("gift") || lowercaseText.includes("present")) {
      response = {
        isUser: false,
        text: "Gifts are our specialty! 🎁 Are you looking for a newborn, toddler, or baby shower gift?",
        links: [
          { label: "Newborn Essentials", url: "/shop" },
          { label: "Gift Sets", url: "/shop" }
        ]
      };
    } else if (lowercaseText.includes("new") || lowercaseText.includes("arrival") || lowercaseText.includes("shop")) {
      response = {
        isUser: false,
        text: "We just received some beautiful organic cotton collections and sensory wooden toys! Would you like to see them?",
        links: [
          { label: "Shop New Arrivals", url: "/shop" },
          { label: "Best Sellers", url: "/shop" }
        ]
      };
    }

    messages.value.push(response);
    scrollToBottom();
    showOptions.value = true;
  }, 1200);
};

const handleAction = (id) => {
  const option = quickOptions.find(o => o.id === id);
  if (option) {
    userInput.value = option.label;
    sendMessage();
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
