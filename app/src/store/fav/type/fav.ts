import { types } from 'mobx-state-tree'

export const Fav = types
  .model({
    id: types.identifier,
    create: types.Date,
    title: types.string,
    image: types.array(types.string),
    pet: types.model({
      name: types.string,
      age: types.array(types.number),
      // size: types.enumeration([]),
      // gender: types.enumeration([])
    }),
    location: types.model({
      city: types.string,
      state: types.string
    })
  })
