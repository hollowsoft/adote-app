import Ax, { AxiosResponse as Response } from 'axios'

export const request = Ax.create({
  baseURL: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export type { Response }
