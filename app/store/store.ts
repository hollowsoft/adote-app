import { Instance } from 'mobx-state-tree'

import { AuthStore } from './auth'
import { FavStore } from './fav'
import { PostStore } from './post'
import { BreedStore } from './breed'
import { LocationStore } from './location'

export type Store = {
  auth: Instance<typeof AuthStore>
  fav: Instance<typeof FavStore>
  post: Instance<typeof PostStore>
  breed: Instance<typeof BreedStore>
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  auth: AuthStore.create(),
  fav: FavStore.create(),
  post: PostStore.create(),
  breed: BreedStore.create(),
  location: LocationStore.create()
}
