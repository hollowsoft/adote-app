import {
  request,
  Response
} from '../request'

import {
  CreatePostRequest,
  UpdatePostRequest
} from './request'

import {
  GetPostResponse,
  ListPostResponse,
  CreatePostResponse,
  UpdatePostResponse,
  PublishPostResponse
} from './response'

export const all = (): Promise<Response<ListPostResponse[], unknown>> => request
  .get('/post')
  .then((response: Response<ListPostResponse[], unknown>) => response)

export const get = (id: string): Promise<Response<GetPostResponse, unknown>> => request
  .get('/post')
  .then((response: Response<GetPostResponse, unknown>) => response)

export const create = (post: CreatePostRequest): Promise<Response<CreatePostResponse, unknown>> => request
  .post('/post', { post })
  .then((response: Response<CreatePostResponse, unknown>) => response)

export const update = (post: UpdatePostRequest): Promise<Response<UpdatePostResponse, unknown>> => request
  .put('/post', { post })
  .then((response: Response<UpdatePostResponse, unknown>) => response)

export const publish = (id: string, publish: boolean): Promise<Response<PublishPostResponse, unknown>> => request
  .put('/post', { publish })
  .then((response: Response<PublishPostResponse, unknown>) => response)

export const remove = (id: string): Promise<Response<void, unknown>> => request
  .delete('post')
  .then((response: Response<void, unknown>) => response)
