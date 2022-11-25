import { types } from 'mobx-state-tree'

export const Post = types
  .model({
    id: types.identifier,
    create: types.Date,
    title: types.string,
    description: types.string,
    image: types.array(types.string),
    pet: types.model({
      name: types.string,
      age: types.array(types.number),
      // size: types.string,
      // gender: types.string,
      breed: types.model({
        id: types.string,
        name: types.string
      })
    }),
    user: types.model({
      create: types.Date,
      name: types.string,
      image: types.string,
      description: types.string,
      contact: types.model({
        mail: types.string,
        phone: types.string,
        social: types.string
      })
    }),
    location: types.model({
      id: types.identifier,
      city: types.string,
      state: types.string
    })
  })
