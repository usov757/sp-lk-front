import { watch, ref } from 'vue'

let STORAGE_KEY = 'pioneer_warehouse_admin'

let store = ref({
  error: null,

  localStorage: {},

  sessionStorage: {
    user: null,
  },
})

Object.assign(store.value.localStorage, JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'))

Object.assign(store.value.sessionStorage, JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}'))

function getSessionStorage() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}

function setUser(userData) {
  sessionStorage.setItem('user', JSON.stringify(userData))
}

function getSessionUser() {
  try {
    const storedData = sessionStorage.getItem(STORAGE_KEY)
    if (!storedData) return null

    const parsedData = JSON.parse(storedData)
    return parsedData?.user || null
  } catch (error) {
    console.error(error)
    return null
  }
}
watch(
  () => store.value.localStorage,
  () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.value.localStorage))
  },
  { deep: true },
)

watch(
  () => store.value.sessionStorage,
  () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store.value.sessionStorage))
  },
  { deep: true },
)

export function useStore() {
  return {
    store,
    getSessionStorage,
    getSessionUser,
    setUser,
  }
}
