import {
  request,
  Response
} from '../request'

import { UpdateUserRequest } from './request'

import { UserResponse } from './response'

export const current = (): Promise<Response<UserResponse, unknown>> => request
  .get('/user/current')
  .then((response: Response<UserResponse, unknown>) => response)

export const update = (user: UpdateUserRequest): Promise<Response<UserResponse, unknown>> => request
  .put('/user', { user })
  .then((response: Response<UserResponse, unknown>) => response)

export const image = (): Promise<Response<unknown, unknown>> => request
  .post('/user/image')
  .then((response: Response<unknown, unknown>) => response)
