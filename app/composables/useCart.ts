import { ref, watch, onMounted, computed } from 'vue'

export const useCart = () => {
  const cart = useState<any[]>('cart', () => [])
  const favorites = useState<any[]>('favorites', () => [])

  // Initialize from localStorage on client-side
  onMounted(() => {
    if (import.meta.client) {
      const savedCart = localStorage.getItem('royal-cart')
      const savedFavs = localStorage.getItem('royal-favs')
      if (savedCart) cart.value = JSON.parse(savedCart)
      if (savedFavs) favorites.value = JSON.parse(savedFavs)
    }
  })

  // Watch for changes and save to localStorage
  watch([cart, favorites], () => {
    if (import.meta.client) {
      localStorage.setItem('royal-cart', JSON.stringify(cart.value))
      localStorage.setItem('royal-favs', JSON.stringify(favorites.value))
    }
  }, { deep: true })

  const addToCart = (product: any) => {
    const { showToast } = useToast()
    const exists = cart.value.find(item => item.id === product.id)
    if (exists) {
      exists.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
    showToast(`${product.name} added to cart!`, 'success')
  }

  const removeFromCart = (productId: number) => {
    cart.value = cart.value.filter(item => item.id !== productId)
  }

  const toggleFavorite = (product: any) => {
    const index = favorites.value.findIndex(item => item.id === product.id)
    if (index > -1) {
      favorites.value.splice(index, 1)
    } else {
      favorites.value.push(product)
    }
  }

  const isFavorite = (productId: number) => {
    return favorites.value.some(item => item.id === productId)
  }

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  const cartCount = computed(() => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  })

  return {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    toggleFavorite,
    isFavorite,
    cartTotal,
    cartCount
  }
}
