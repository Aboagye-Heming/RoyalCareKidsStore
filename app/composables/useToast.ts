export const useToast = () => {
  const visible = useState('toast-visible', () => false)
  const message = useState('toast-message', () => '')
  const type = useState('toast-type', () => 'success')

  const showToast = (msg: string, t: string = 'success') => {
    message.value = msg
    type.value = t
    visible.value = true
    
    setTimeout(() => {
      visible.value = false
    }, 3000)
  }

  return {
    visible,
    message,
    type,
    showToast
  }
}
