import { types } from 'mobx-state-tree'

export const Location = types
  .model({
    id: types.identifier,
    city: types.string,
    state: types.string
  })
