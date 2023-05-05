import {
  flow,
  types
} from 'mobx-state-tree'

import { Kind } from '../../type/kind.enum'

import { Breed } from './type'

import * as build from './build'

import * as request from '../../request/breed'

import { Response } from '../../request/response'
import { ListBreedResponse } from '../../request/breed/response'

export const BreedStore = types
  .model({
    list: types.array(Breed)
  })
  .actions((self) => {
    const all = flow(function*(kind?: Kind) {
      const { data: breed }: Response<ListBreedResponse[], unknown> = yield request.all(kind)

      const list = breed.map((breed) => build.breed(breed))

      self.list.replace(list)
    })

    return {
      all
    }
  })
