import {
  request,
  Response
} from '../request'

import { LocationResponse } from './response/location.response'

export const search = (term: string): Promise<Response<LocationResponse[], unknown>> => request
  .get('/location/search', { params: { term } })
  .then((response: Response<LocationResponse[], unknown>) => response)
