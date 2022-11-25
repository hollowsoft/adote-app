import { Instance } from 'mobx-state-tree'

import { AuthStore } from './auth'
import { FavStore } from './fav'
import { UserStore } from './user'
import { PostStore } from './post'
import { BreedStore } from './breed'
import { LocationStore } from './location'

export type Store = {
  auth: Instance<typeof AuthStore>
  fav: Instance<typeof FavStore>
  user: Instance<typeof UserStore>
  post: Instance<typeof PostStore>
  breed: Instance<typeof BreedStore>
  location: Instance<typeof LocationStore>
}

export const store: Store = {
  auth: AuthStore.create(),
  fav: FavStore.create(),
  user: UserStore.create(),
  post: PostStore.create(),
  breed: BreedStore.create(),
  location: LocationStore.create()
}
