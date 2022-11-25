import Ax from 'axios'

const request = Ax.create({
  baseURL: '',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export {
  request
}
