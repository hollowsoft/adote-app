import Ax from 'axios'

export const request = Ax.create({
  baseURL: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
