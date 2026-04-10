<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="pt-40 pb-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl">
          <h1
            class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10"
          >
            Let's <span class="text-primary-500 italic">Connect</span>
          </h1>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Have a question about our collections or need help with an order?
            Our team in Accra is here to assist you.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Info & Grid -->
    <section class="py-24">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <!-- Contact Details -->
          <div class="space-y-12">
            <div>
              <h2 class="text-3xl font-black text-slate-900 mb-8">
                Visit Our Boutique
              </h2>
              <div
                class="flex items-start gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary-200 transition-colors"
              >
                <div
                  class="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center shrink-0"
                >
                  <Icon name="lucide:map-pin" class="text-white text-2xl" />
                </div>
                <div>
                  <h4 class="text-xl font-bold text-slate-900 mb-2">
                    Location
                  </h4>
                  <p class="text-slate-600 leading-relaxed text-lg">
                    📍 Accra, Ghana<br />
                    High-street, East Legon<br />
                    (Near the A&C Mall)
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"
              >
                <div
                  class="w-12 h-12 bg-secondary-500 rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon name="lucide:phone" class="text-white text-xl" />
                </div>
                <h4 class="font-bold text-slate-900 mb-2">Phone</h4>
                <p class="text-slate-600">+233 (0) 55 123 4567</p>
              </div>
              <div
                class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100"
              >
                <div
                  class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-6"
                >
                  <Icon name="lucide:mail" class="text-white text-xl" />
                </div>
                <h4 class="font-bold text-slate-900 mb-2">Email</h4>
                <p class="text-slate-600">royalcarekidsstore@gmail.com</p>
              </div>
            </div>

            <!-- Social Links -->
            <div>
              <h3 class="text-xl font-bold text-slate-900 mb-6">
                Follow Our Journey
              </h3>
              <div class="flex gap-4">
                <a
                  href="https://instagram.com/RoyalCareKidsStore"
                  target="_blank"
                  class="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary-500 transition-all duration-300"
                >
                  <Icon name="lucide:instagram" class="text-2xl" />
                </a>
                <a
                  href="https://tiktok.com/@RoyalCareKidsStore"
                  target="_blank"
                  class="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-all duration-300"
                >
                  <Icon name="simple-icons:tiktok" class="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/RoyalCareKidsStore"
                  target="_blank"
                  class="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-primary-500 transition-all duration-300"
                >
                  <Icon name="lucide:facebook" class="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div
            class="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-100 h-fit"
          >
            <h2 class="text-3xl font-black text-slate-900 mb-10">
              Send us a Message
            </h2>
            <form @submit.prevent class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label
                    class="text-xs font-black uppercase tracking-widest text-slate-400"
                    >Full Name</label
                  >
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary-500 transition-all outline-none"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-xs font-black uppercase tracking-widest text-slate-400"
                    >Email Address</label
                  >
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary-500 transition-all outline-none"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label
                  class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Subject</label
                >
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Inquiry about collections"
                  class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary-500 transition-all outline-none"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-xs font-black uppercase tracking-widest text-slate-400"
                  >Message</label
                >
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="How can we help your little royal?"
                  class="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-primary-500 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <button
                  @click="submitViaWhatsApp"
                  class="flex items-center justify-center gap-3 py-5 bg-[#10B981] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-600 shadow-xl transition-all hover:scale-[1.02] active:scale-98"
                >
                  <Icon name="lucide:message-circle" class="text-xl" />
                  WhatsApp
                </button>
                <button
                  @click="submitViaEmail"
                  class="flex items-center justify-center gap-3 py-5 bg-[#583CF1] text-white font-black uppercase tracking-widest rounded-2xl hover:bg-primary-600 shadow-xl transition-all hover:scale-[1.02] active:scale-98"
                >
                  <Icon name="lucide:mail" class="text-xl" />
                  Email Us
                </button>
              </div>
              <p
                class="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest"
              >
                We usually respond within 2 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitViaWhatsApp = () => {
  const phoneNumber = "+233501587398";
  const text = `*New Inquiry from Website*%0A%0A*Name:* ${form.name}%0A*Email:* ${form.email}%0A*Subject:* ${form.subject}%0A%0A*Message:*%0A${form.message}`;
  window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
};

const submitViaEmail = () => {
  const email = "royalcarekidsstore@gmail.com";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
  window.location.href = mailtoLink;
};
</script>
