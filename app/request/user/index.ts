import {
  request,
  Response
} from '../request'

import { UpdateUserRequest } from './request'

import {
  GetCurrentResponse,
  UpdateUserResponse
} from './response'

export const current = (): Promise<Response<GetCurrentResponse, unknown>> => request
  .get('/user/current')
  .then((response: Response<GetCurrentResponse, unknown>) => response)

export const update = (user: UpdateUserRequest): Promise<Response<UpdateUserResponse, unknown>> => request
  .put('/user', { user })
  .then((response: Response<UpdateUserResponse, unknown>) => response)

export const image = (): Promise<Response<unknown, unknown>> => request
  .post('/user/image')
  .then((response: Response<unknown, unknown>) => response)
