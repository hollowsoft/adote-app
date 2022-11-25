import { types } from 'mobx-state-tree'

export const Token = types
  .model({
    token: types.string,
    refresh: types.string
  })
