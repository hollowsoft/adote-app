import { Instance } from 'mobx-state-tree'

import { AuthStore } from './auth'
import { BreedStore } from './breed'
import { LocationStore } from './location'

export type Store = {
  auth: Instance<typeof AuthStore>
  breed: Instance<typeof BreedStore>
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  auth: AuthStore.create(),
  breed: BreedStore.create(),
  location: LocationStore.create()
}
