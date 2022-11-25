import { types } from 'mobx-state-tree'

export const User = types
  .model({
    create: types.Date,
    mail: types.string,
    name: types.string,
    image: types.string,
    description: types.string,
    contact: types.model({
      mail: types.string,
      phone: types.string,
      social: types.string
    }),
    location: types.model({
      id: types.identifier,
      city: types.string,
      state: types.string
    }),
  })
