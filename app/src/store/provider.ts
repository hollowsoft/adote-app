import { createContext } from 'react'

import { store } from './store'

export const StoreContext = createContext<typeof store>(store)

export const StoreProvider = StoreContext.Provider
