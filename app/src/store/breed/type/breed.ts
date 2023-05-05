import { types } from 'mobx-state-tree'

export const Breed = types
  .model({
    id: types.identifier,
    name: types.string,
    // key: types.enumeration([
    //   'cat',
    //   'dog'
    // ])
  })
