import {
  request,
  Response
} from '../request'

import { Kind } from '../../type/kind.enum'

import { BreedResponse } from './response'

export const all = (kind: Kind): Promise<Response<BreedResponse[], unknown>> => request
  .get('/breed', { params: { kind } })
  .then((response: Response<BreedResponse[], unknown>) => response)
