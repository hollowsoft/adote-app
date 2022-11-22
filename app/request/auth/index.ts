import {
  request,
  Response
} from '../request'

import {
  AuthMailResponse,
  AuthMailCodeResponse
} from './response'

export const auth = (mail: string): Promise<Response<AuthMailResponse, unknown>> => request
  .post('/auth/mail', { mail })
  .then((response: Response<AuthMailResponse, unknown>) => response)

export const code = (mail: string, code: string): Promise<Response<AuthMailCodeResponse, unknown>> => request
  .post('/auth/mail/code', { mail, code })
  .then((response: Response<AuthMailCodeResponse, unknown>) => response)
