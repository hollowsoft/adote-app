import { request } from '../request'

import { Response } from '../response'

import {
  AuthMailResponse,
  AuthTokenResponse
} from './response'

export const auth = (mail: string): Promise<Response<AuthMailResponse, unknown>> => request
  .post('/auth/mail', { mail })
  .then((response: Response<AuthMailResponse, unknown>) => response)

export const code = (mail: string, code: string): Promise<Response<AuthTokenResponse, unknown>> => request
  .post('/auth/mail/code', { mail, code })
  .then((response: Response<AuthTokenResponse, unknown>) => response)

export const token = (): Promise<Response<AuthTokenResponse, unknown>> => request
  .post('/auth/token')
  .then((response: Response<AuthTokenResponse, unknown>) => response)
