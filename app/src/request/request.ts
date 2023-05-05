import Ax from 'axios'

import * as env from '../../env'

export const request = Ax.create({
  baseURL: env.get<string>('PATH'),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
