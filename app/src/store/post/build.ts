import { Instance } from 'mobx-state-tree'

import { Post } from './type'

import { PostResponse } from '../../request/post/response'

export const post = (post: PostResponse): Instance<typeof Post> => {
  const { pet, user, location } = post

  const { breed } = pet
  const { contact } = user

  return Post.create({
    id: post.id,
    create: post.create,
    title: post.title,
    description: post.description,
    image: post.image,
    pet: {
      name: pet.name,
      age: pet.age,
      // size: pet.size,
      // gender: pet.gender,
      breed: {
        id: breed.id,
        name: breed.name
      }
    },
    user: {
      create: user.create,
      name: user.name,
      image: user.image,
      description: user.description,
      contact: {
        mail: contact.mail,
        phone: contact.phone,
        social: contact.social
      }
    },
    location: {
      id: location.id,
      city: location.city,
      state: location.state
    }
  })
}
