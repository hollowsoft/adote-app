import { types } from 'mobx-state-tree'

import { Location } from './type/location'

export const LocationStore = types
  .model({
    list: types.array(Location)
  })
  .actions((self) => {

    return {

    }
  })
