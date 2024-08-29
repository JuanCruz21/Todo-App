import { create } from 'zustand'

const useToken = create((set) => ({
    token: null,
    setToken: (token) => set({ token }),
}))

export default useToken