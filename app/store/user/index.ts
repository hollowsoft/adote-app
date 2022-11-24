import {
  flow,
  types
} from 'mobx-state-tree'

import { User } from './type'

import * as build from './build'

import * as request from '../../request/user'

import { Response } from '../../request/request'

import { UpdateUserRequest } from '../../request/user/request'

import { UserResponse } from '../../request/user/response'

export const UserStore = types
  .model({
    user: types.maybe(User)
  })
  .actions((self) => {
    const get = flow(function*() {
      const { data: user }: Response<UserResponse, unknown> = yield request.current()

      self.user = build.user(user)
    })

    const update = flow(function*(update: UpdateUserRequest) {
      const { data: user }: Response<UserResponse, unknown> = yield request.update(update)

      self.user = build.user(user)
    })

    const image = flow(function*() {
      
    })

    return {
      get,
      update,
      image
    }
  })
