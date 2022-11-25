import { Instance } from 'mobx-state-tree'

import {
  Auth,
  Token
} from './type'

import {
  AuthMailResponse,
  AuthTokenResponse
} from '../../request/auth/response'

export const auth = (auth: AuthMailResponse): Instance<typeof Auth> => Auth.create({
  id: auth.id,
  create: auth.create,
  mail: auth.mail
})

export const token = (token: AuthTokenResponse): Instance<typeof Token> => Token.create({
  token: token.token,
  refresh: token.refresh
})
