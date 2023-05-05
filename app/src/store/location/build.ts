import { Instance } from 'mobx-state-tree'

import { Location } from './type'

import { SearchLocationResponse } from '../../request/location/response'

export const location = (location: SearchLocationResponse): Instance<typeof Location> => Location.create({
  id: location.id,
  city: location.city,
  state: location.state
})
