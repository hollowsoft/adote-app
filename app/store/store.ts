import { Instance } from 'mobx-state-tree'

import { AuthStore } from './auth'
import { LocationStore } from './location'

export type Store = {
  auth: Instance<typeof AuthStore>
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  auth: AuthStore.create(),
  location: LocationStore.create()
}
