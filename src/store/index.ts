import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type Personal = {
  name: string
  email: string
  phone: string
  link: string
}

type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert'

interface Store {
  personal: Personal | null
  level: Level | null
  preferences: string[]
  setPersonal: (data: Personal) => void
  setLevel: (level: Level) => void
  setPreferences: (data: string[]) => void
}

export const useStore = create<Store>()(
  devtools((set) => ({
    personal: null,
    level: null,
    preferences: [],
    setPersonal: (data: Personal) => {
      set((state) => ({ ...state, personal: data }))
    },
    setLevel: (level: Level) => {
      set((state) => ({ ...state, level }))
    },
    setPreferences: (data: string[]) => {
      set((state) => ({ ...state, preferences: data }))
    },
  }))
)
