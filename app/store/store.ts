import { Instance } from 'mobx-state-tree'

import { AuthStore } from './auth'
import { FavStore } from './fav'
import { BreedStore } from './breed'
import { LocationStore } from './location'

export type Store = {
  auth: Instance<typeof AuthStore>
  fav: Instance<typeof FavStore>
  breed: Instance<typeof BreedStore>
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  auth: AuthStore.create(),
  fav: FavStore.create(),
  breed: BreedStore.create(),
  location: LocationStore.create()
}
