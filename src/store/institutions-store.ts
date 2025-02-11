import { create } from 'zustand';

export type TransversalState = {
    ui: {
        openMenu: boolean
    }
}

export type TransversalActions = {
    setMenu: () => void,
   
}

export type TransversalStore = TransversalState & TransversalActions


export const defaultInitState: TransversalState = {
    ui: {
        openMenu: false,
    },
   
}


export const useTransversalStore = create<TransversalStore>()((set) => ({
    ...defaultInitState,
    setMenu: () => set(({ui}) => ({ ui: { openMenu: !ui.openMenu } }))
}));