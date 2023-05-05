import { useContext } from 'react'

import { Store } from './store'

import { StoreContext } from './provider'

export const useStore = (): Store => {
  return useContext<Store>(StoreContext)
}
