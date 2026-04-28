<template>
  <div class="bg-white min-h-screen">
    <!-- Hero Header -->
    <PageHero
      variant="light"
      title="Help <span class='text-primary-500 italic'>Center</span>"
      subtitle="Everything you need to know about shopping with Royal Care. Can't find what you're looking for? Ask our Mama Royal AI."
    />

    <!-- FAQ Content -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          <!-- Categories Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-32 space-y-2">
              <button 
                v-for="category in faqCategories" 
                :key="category.id"
                @click="activeCategory = category.id"
                class="w-full text-left px-8 py-5 rounded-[2rem] text-sm font-black uppercase tracking-widest transition-all duration-300 border-2"
                :class="activeCategory === category.id 
                  ? 'bg-primary-500 text-white border-primary-500 shadow-[0_12px_24px_rgba(255,95,15,0.3)]' 
                  : 'bg-white text-slate-400 border-slate-50 hover:border-primary-100 hover:text-slate-600'"
              >
                {{ category.name }}
              </button>
            </div>
          </div>

          <!-- FAQ Accordion -->
          <div class="lg:col-span-3">
            <div class="space-y-6">
              <FaqItem
                v-for="(faq, index) in filteredFaqs"
                :key="index"
                :question="faq.question"
                :answer="faq.answer"
                :isOpen="openIndex === index"
                @toggle="toggleFaq(index)"
              />
            </div>

            <!-- Empty State -->
            <div v-if="filteredFaqs.length === 0" class="py-20 text-center">
              <Icon name="lucide:search" class="text-6xl text-slate-200 mb-6 mx-auto" />
              <p class="text-xl font-bold text-slate-400 font-sans uppercase tracking-[0.2em]">No answers found here...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAs -->
    <section class="py-32 bg-slate-950 relative overflow-hidden">
      <!-- Mesh background -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-primary-600/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 italic">
          Still Have Questions?
        </h2>
        <div class="flex flex-wrap justify-center gap-6">
          <NuxtLink 
            to="/contact"
            class="px-12 py-6 bg-white text-slate-950 font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-500 hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Contact Support
          </NuxtLink>
          <button 
            @click="openChat"
            class="px-12 py-6 bg-primary-600 text-white font-black text-sm uppercase tracking-[0.2em] rounded-full hover:bg-primary-700 transition-all shadow-2xl active:scale-95 border-b-4 border-primary-900"
          >
            Chat with Mama Royal AI
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'FAQs | Royal Care Kids Store',
  meta: [
    { name: 'description', content: 'Frequently asked questions about Royal Care Kids Store — shipping, returns, product quality, sizing, and our Mama Royal AI assistant.' },
    { property: 'og:title', content: 'Help Center | Royal Care Kids Store' },
    { property: 'og:description', content: 'Everything you need to know about shopping with Royal Care. Orders, delivery, returns, and more.' },
    { property: 'og:image', content: '/logo-vibrant.png' },
    { property: 'og:type', content: 'website' },
  ]
})

const activeCategory = ref('general')
const openIndex = ref(null)

const faqCategories = [
  { id: 'general', name: 'The Mama Royal AI' },
  { id: 'orders', name: 'Orders & Delivery' },
  { id: 'products', name: 'Quality & Sizing' },
  { id: 'returns', name: 'Returns & Policy' }
]

const faqs = [
  // Mama Royal AI Section
  {
    category: 'general',
    question: 'How does Mama Royal AI work?',
    answer: `<p>Our <strong>Mama Royal AI</strong> is your personal shopping assistant powered by advanced algorithms to help you find precisely what your little royal needs. It features:</p>
             <ul class="list-disc pl-5 space-y-2 mt-4">
               <li><strong>Voice Search:</strong> Use the microphone icon to speak your requests naturally.</li>
               <li><strong>Instant Recommendations:</strong> Ask about specific categories like "clothing" or "gifts".</li>
               <li><strong>24/7 Availability:</strong> Get answers even when our boutiques in Accra are closed.</li>
             </ul>`
  },
  {
    category: 'general',
    question: 'Is my conversation with the Mama Royal AI private?',
    answer: 'Absolutely. We take your privacy seriously. The Mama Royal AI data is used solely to improve your shopping experience and provide more relevant product recommendations. We do not share your transcripts with third parties.'
  },
  {
    category: 'general',
    question: 'Can the Mama Royal AI help with my order status?',
    answer: 'Currently, the Mama Royal AI is specialized in product discovery and general inquiries. For specific order tracking, please contact our support team via WhatsApp or reach out through our contact form.'
  },
  
  // Orders & Delivery Section
  {
    category: 'orders',
    question: 'Do you deliver across Accra?',
    answer: 'Yes! We offer premium delivery services across the metropolitan Accra region and nationwide. Standard delivery takes 1-2 business days, while express delivery options are available for most neighborhoods.'
  },
  {
    category: 'orders',
    question: 'How can I pay for my order?',
    answer: 'We accept Mobile Money (MoMo), Visa/Mastercard via our secure payment gateway, and Bank Transfers. Delivery is currently available across Accra and nationwide.'
  },
  
  // Quality Section
  {
    category: 'products',
    question: 'Are your clothes made of organic materials?',
    answer: 'Brand quality is our top priority. The majority of our clothing collections are made from 100% organic cotton, sourced specifically for its softness and breathability for sensitive baby skin.'
  },
  {
    category: 'products',
    question: 'How do I choose the right size?',
    answer: 'Our sizing usually follows standard international baby sizes (NB, 0-3M, 3-6M, etc.). We recommend choosing a size up if your little one is between sizes, as babies grow incredibly fast!'
  },
  
  // Returns Section
  {
    category: 'returns',
    question: 'What is your return policy?',
    answer: 'We offer a 7-day return policy for most items. Products must be unused, in their original packaging, and with all tags attached. Due to hygiene reasons, certain items like massage oils and care products cannot be returned once opened.'
  }
]

const filteredFaqs = computed(() => {
  return faqs.filter(faq => faq.category === activeCategory.value)
})

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const openChat = () => {
  // Logic to trigger AIAssistant toggle if needed, or just scroll to it
  const chatButton = document.querySelector('.bottom-6.right-6 button');
  if (chatButton) chatButton.click();
}
</script>

<style scoped>
.prose ul {
  list-style-type: none;
  padding-left: 0;
}
.prose li {
  position: relative;
  padding-left: 1.5rem;
}
.prose li::before {
  content: "🍼";
  position: absolute;
  left: 0;
}
</style>
