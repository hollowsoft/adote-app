import {
  flow,
  types
} from 'mobx-state-tree'

import { Location } from './type'

import * as build from './build'

import * as request from '../../request/location'

import { Response } from '../../request/request'
import { SearchLocationResponse } from '../../request/location/response'

export const LocationStore = types
  .model({
    list: types.array(Location)
  })
  .actions((self) => {
    const search = flow(function*(term: string) {
      const { data: location }: Response<SearchLocationResponse[], unknown> = yield request.search(term)

      const list = location.map((location) => build.location(location))

      self.list.replace(list)
    })

    return {
      search
    }
  })
