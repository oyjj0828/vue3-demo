import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    return {}
  },
  {
    persist: true
  }
)