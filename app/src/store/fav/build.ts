import { Instance } from 'mobx-state-tree'

import { Fav } from './type'

import { ListFavResponse } from '../../request/fav/response'

export const fav = (fav: ListFavResponse): Instance<typeof Fav> => {
  const { pet, location } = fav

  return Fav.create({
    id: fav.id,
    create: fav.create,
    title: fav.title,
    image: fav.image,
    pet: {
      name: pet.name,
      age: pet.age,
      // size: pet.size,
      // gender: pet.gender
    },
    location: {
      city: location.city,
      state: location.state
    }
  })
}
