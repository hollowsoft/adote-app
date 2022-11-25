import { Instance } from 'mobx-state-tree'

import { Breed } from './type'

import { ListBreedResponse } from '../../request/breed/response'

export const breed = (breed: ListBreedResponse): Instance<typeof Breed> => Breed.create({
  id: breed.id,
  name: breed.name,
  // kind: breed.kind
})
