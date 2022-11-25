import {
  request,
  Response
} from '../request'

import {
  CreatePostRequest,
  UpdatePostRequest
} from './request'

import {
  PostResponse,
  PublishPostResponse
} from './response'

export const all = (): Promise<Response<PostResponse[], unknown>> => request
  .get('/post')
  .then((response: Response<PostResponse[], unknown>) => response)

export const get = (id: string): Promise<Response<PostResponse, unknown>> => request
  .get('/post')
  .then((response: Response<PostResponse, unknown>) => response)

export const create = (post: CreatePostRequest): Promise<Response<PostResponse, unknown>> => request
  .post('/post', { post })
  .then((response: Response<PostResponse, unknown>) => response)

export const update = (id: string, post: UpdatePostRequest): Promise<Response<PostResponse, unknown>> => request
  .put(`/post/${id}`, { post })
  .then((response: Response<PostResponse, unknown>) => response)

export const publish = (id: string, publish: boolean): Promise<Response<PublishPostResponse, unknown>> => request
  .put(`/post/${id}`, { publish })
  .then((response: Response<PublishPostResponse, unknown>) => response)

export const remove = (id: string): Promise<Response<void, unknown>> => request
  .delete(`/post/${id}`)
  .then((response: Response<void, unknown>) => response)
