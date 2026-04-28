<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-show="isOpen"
      class="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[100] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
    >
      <!-- Header -->
      <div
        class="p-8 border-b border-slate-100 flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center"
          >
            <Icon name="lucide:shopping-bag" class="text-primary-600 text-xl" />
          </div>
          <div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">
              Your Cart
            </h2>
            <p
              class="text-sm font-bold text-slate-400 uppercase tracking-widest"
            >
              {{ cart.length }} Items
            </p>
          </div>
        </div>
        <button
          @click="$emit('close')"
          class="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-50 transition-colors"
        >
          <Icon name="lucide:x" class="text-slate-400 text-2xl" />
        </button>
      </div>

      <!-- Items List -->
      <div class="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
        <div
          v-if="cart.length === 0"
          class="h-full flex flex-col items-center justify-center text-center space-y-4"
        >
          <div
            class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4"
          >
            <Icon name="lucide:shopping-cart" class="text-slate-200 text-4xl" />
          </div>
          <h3 class="text-xl font-bold text-slate-900">Your cart is empty</h3>
          <p class="text-slate-400">
            Looks like you haven't added any royal essentials yet.
          </p>
          <NuxtLink
            to="/shop"
            @click="$emit('close')"
            class="px-8 py-4 bg-primary-500 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl"
          >
            Start Shopping
          </NuxtLink>
        </div>

        <div
          v-for="item in cart"
          :key="item.id"
          class="flex gap-6 p-4 bg-slate-50 rounded-3xl border border-slate-100 group"
        >
          <div
            class="w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0 shadow-sm"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="flex-1 space-y-1">
            <div class="flex justify-between">
              <h4
                class="font-bold text-slate-900 leading-tight group-hover:text-primary-500 transition-colors"
              >
                {{ item.name }}
              </h4>
              <button
                @click="removeFromCart(item.id)"
                class="text-slate-300 hover:text-red-500 transition-colors"
              >
                <Icon name="lucide:trash-2" />
              </button>
            </div>
            <p
              class="text-xs font-black text-primary-500 uppercase tracking-widest"
            >
              {{ item.category }}
            </p>
            <div class="flex items-center justify-between pt-2">
              <span class="font-extrabold text-slate-900"
                >GHS {{ item.price.toFixed(2) }}</span
              >
              <div
                class="flex items-center gap-3 bg-white rounded-xl border border-slate-100 px-3 py-1 scale-90"
              >
                <button
                  @click="item.quantity > 1 ? item.quantity-- : null"
                  class="text-slate-400 hover:text-slate-900"
                >
                  <Icon name="lucide:minus" />
                </button>
                <span class="font-bold text-sm min-w-[20px] text-center">{{
                  item.quantity
                }}</span>
                <button
                  @click="item.quantity++"
                  class="text-slate-400 hover:text-slate-900"
                >
                  <Icon name="lucide:plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkout Footer -->
      <div
        v-if="cart.length > 0"
        class="p-8 border-t border-slate-100 bg-slate-50/50 space-y-6"
      >
        <div class="space-y-3">
          <div
            class="flex justify-between text-slate-400 font-bold uppercase tracking-widest text-xs"
          >
            <span>Subtotal</span>
            <span>GHS {{ cartTotal.toFixed(2) }}</span>
          </div>
          <div
            class="flex justify-between text-slate-400 font-bold uppercase tracking-widest text-xs"
          >
            <span>Delivery</span>
            <span class="text-accent-green">Calculated at Checkout</span>
          </div>
          <div
            class="flex justify-between text-xl font-black text-slate-900 border-t border-slate-200 pt-4"
          >
            <span>Total</span>
            <span>GHS {{ cartTotal.toFixed(2) }}</span>
          </div>
        </div>

        <button
          @click="checkoutViaWhatsApp"
          class="w-full py-6 bg-accent-green text-white rounded-[2rem] font-black uppercase tracking-widest shadow-2xl hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center gap-3"
        >
          <Icon name="lucide:message-circle" class="text-2xl" />
          Checkout via WhatsApp
        </button>
        <p
          class="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest"
        >
          Fast & Secure Order Placement in Accra
        </p>
      </div>
    </div>
  </transition>

  <!-- Overlay -->
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isOpen"
      @click="$emit('close')"
      class="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-[90]"
    ></div>
  </transition>
</template>

<script setup>
import { useCart } from "~/composables/useCart";

defineProps({
  isOpen: Boolean,
});

defineEmits(["close"]);

const { cart, cartTotal, removeFromCart } = useCart();

const checkoutViaWhatsApp = () => {
  const phoneNumber = "+233501587398";
  let message = `*Royal Care Kids Store - New Order*%0A%0A`;

  cart.value.forEach((item) => {
    message += `🛒 *${item.name}* x${item.quantity}%0A`;
    message += `   Price: GHS ${(item.price * item.quantity).toFixed(2)}%0A%0A`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━%0A`;
  message += `💰 *Total Amount: GHS ${cartTotal.value.toFixed(2)}*%0A%0A`;
  message += `📍 Please let me know the delivery location in Accra!`;

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
};
</script>
