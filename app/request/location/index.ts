import {
  request,
  Response
} from '../request'

import { SearchLocationResponse } from './response'

export const search = (term: string): Promise<Response<SearchLocationResponse[], unknown>> => request
  .get('/location/search', { params: { term } })
  .then((response: Response<SearchLocationResponse[], unknown>) => response)
