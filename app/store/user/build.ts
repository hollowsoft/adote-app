import { Instance } from 'mobx-state-tree'

import { User } from './type'

import { UserResponse } from '../../request/user/response'

export const user = (user: UserResponse): Instance<typeof User> => {
  const { contact, location } = user

  return User.create({
    create: user.create,
    mail: user.mail,
    name: user.name,
    image: user.image,
    description: user.description,
    contact: {
      mail: contact.mail,
      phone: contact.phone,
      social: contact.social
    },
    location: {
      id: location.id,
      city: location.city,
      state: location.state
    }
  })
}
