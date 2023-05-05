import {
  flow,
  types
} from 'mobx-state-tree'

import {
  Auth,
  Token
} from './type'

import * as build from './build'

import * as request from '../../request/auth'

import { Response } from '../../request/response'

import {
  AuthMailResponse,
  AuthTokenResponse
} from '../../request/auth/response'

export const AuthStore = types
  .model({
    auth: types.maybe(Auth),
    token: types.maybe(Token)
  })
  .actions((self) => {
    const auth = flow(function*(mail: string) {
      const { data: auth }: Response<AuthMailResponse, unknown> = yield request.auth(mail)

      self.auth = build.auth(auth)
    })

    const code = flow(function*(mail: string, code: string) {
      const { data: token }: Response<AuthTokenResponse, unknown> = yield request.code(mail, code)

      self.token = build.token(token)
    })

    const token = flow(function*() {
      const { data: token }: Response<AuthTokenResponse, unknown> = yield request.token()

      self.token = build.token(token)
    })

    return {
      auth,
      code,
      token
    }
  })
