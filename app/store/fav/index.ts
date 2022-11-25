import {
  flow,
  types
} from 'mobx-state-tree'

import { Fav } from './type'

import * as build from './build'

import * as request from '../../request/fav'

import { Response } from '../../request/response'
import { ListFavResponse } from '../../request/fav/response'

export const FavStore = types
  .model({
    list: types.array(Fav)
  })
  .actions((self) => {
    const all = flow(function*() {
      const { data: fav }: Response<ListFavResponse[], unknown> = yield request.all()

      const list = fav.map((fav) => build.fav(fav))

      self.list.replace(list)
    })

    const add = flow(function*(id: string) {
      return request.add(id)
    })

    const remove = flow(function*(id: string) {
      return request.remove(id)
    })

    return {
      all,
      add,
      remove
    }
  })
