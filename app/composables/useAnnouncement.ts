import { onMounted } from 'vue'

export const useAnnouncement = () => {
  const isVisible = useState('banner-visible', () => true)

  onMounted(() => {
    if (import.meta.client) {
      const dismissed = sessionStorage.getItem('royal-banner-dismissed')
      if (dismissed === 'true') isVisible.value = false
    }
  })

  const dismiss = () => {
    isVisible.value = false
    if (import.meta.client) {
      sessionStorage.setItem('royal-banner-dismissed', 'true')
    }
  }

  return { isVisible, dismiss }
}
