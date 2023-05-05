import Ax from 'axios'

import * as env from '../../env'

const request = Ax.create({
  baseURL: env.get<string>('PATH'),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export {
  request
}
