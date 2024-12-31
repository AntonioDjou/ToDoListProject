import { ref, watch, onMounted, onUnmounted } from 'vue'

// Initialize with a default value
const useLocalStorage = (key, defaultValue) => {
  const value = ref(defaultValue)
  const read = () => {
    const v = window.localStorage.getItem(key)
    if (v != null) value.value = JSON.parse(v)
  }

  // Call the function to initialize load the value
  read()

  // Update whenever it's called outside this function
  onMounted(() => {
    window.addEventListener('storage', read)
  })

  // Clean up
  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  // Converts the value in a string and saves it with a key.
  // This function is called whenever the value changes with the 'watch' function

  const write = () => {
    window.localStorage.setItem(key, JSON.stringify(value.value))
  }
  watch([value], write, { deep: true })

  return value
}

// Pass the notes with an empty array as a default value
export const useLocalNotes = () => {
  return useLocalStorage('notes', [])
}
