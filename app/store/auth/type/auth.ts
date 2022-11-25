import { types } from 'mobx-state-tree'

export const Auth = types
  .model({
    id: types.identifier,
    create: types.Date,
    mail: types.string
  })
