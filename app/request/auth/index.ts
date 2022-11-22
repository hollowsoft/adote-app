import {
  request,
  Response
} from '../request'

import { AuthMailResponse } from './response/auth.mail.response'

export const auth = (mail: string): Promise<Response<AuthMailResponse, unknown>> => request
  .post('/auth/mail', { mail })
  .then((response: Response<AuthMailResponse, unknown>) => response)
