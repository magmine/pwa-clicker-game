import { create } from 'zustand';
import { storeUserData } from '../services/indexedDB/dbUtility';
const useUserStore = create((set, get) => ({
    userData: {
        id: 'Squid',
        score: 0,
        boughtItems: 0,
        highestScore: 0,
    },
    setUserData: (data) => set(() => {
        const newUserData = { userData: data.userData };
        storeUserData(newUserData);
        return newUserData;
    }),
    updateUserScore: (score) => set((state) => {
        if (score > state.userData.highestScore) {
            return { userData: { ...state.userData, highestScore: score, score } };
        }
        return { userData: { ...state.userData, score } };
    }),
    updateBoughtItems: (items) => set((state) => ({ userData: { ...state.userData, boughtItems: items } })),
    updateHighestScore: (score) => set((state) => {
        if (score > state.userData.highestScore) {
            return { userData: { ...state.userData, highestScore: score } };
        }
    }),
}));

export default useUserStore;
