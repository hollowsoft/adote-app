import {
  request,
  Response
} from '../request'

import {
  AddFavResponse,
  ListFavResponse
} from './response'

export const all = (): Promise<Response<ListFavResponse[], unknown>> => request
  .get('/fav')
  .then((response: Response<ListFavResponse[], unknown>) => response)

export const add = (id: string): Promise<Response<AddFavResponse, unknown>> => request
  .post('/fav', { id })
  .then((response: Response<AddFavResponse, unknown>) => response)

export const remove = (id: string): Promise<Response<void, unknown>> => request
  .delete('/fav')
  .then((response: Response<void, unknown>) => response)
