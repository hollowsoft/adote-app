import {
  request,
  Response
} from '../request'

import { Kind } from '../../type/kind.enum'

import { ListBreedResponse } from './response'

export const all = (kind?: Kind): Promise<Response<ListBreedResponse[], unknown>> => request
  .get('/breed', { params: { kind } })
  .then((response: Response<ListBreedResponse[], unknown>) => response)
