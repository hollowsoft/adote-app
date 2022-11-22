import {
  flow,
  types
} from 'mobx-state-tree'

import { Location } from './type/location'

import * as request from '../../request/location'

import { Response } from '../../request/request'
import { LocationResponse } from '../../request/location/response/location.response'

export const LocationStore = types
  .model({
    list: types.array(Location)
  })
  .actions((self) => {
    const search = flow(function*(term: string) {
      const { data: response }: Response<LocationResponse[], unknown> = yield request.search(term)

      const list = response.map((location) => Location.create({
        id: location.id,
        city: location.city,
        state: location.state,
      }))

      self.list.replace(list)
    })

    return {
      search
    }
  })
