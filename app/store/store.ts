import { Instance } from 'mobx-state-tree'

import { LocationStore } from './location'

export type Store = {
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  location: LocationStore.create()
}
