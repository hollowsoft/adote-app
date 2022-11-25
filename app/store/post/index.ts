import {
  flow,
  types
} from 'mobx-state-tree'

import { Post } from './type'

import * as build from './build'

import * as request from '../../request/post'

import { Response } from '../../request/response'

import {
  CreatePostRequest,
  UpdatePostRequest
} from '../../request/post/request'

import { PostResponse } from '../../request/post/response'

export const PostStore = types
  .model({
    list: types.array(Post),
    post: types.maybe(Post)
  })
  .actions((self) => {
    const all = flow(function*() {
      const { data: post }: Response<PostResponse[], unknown> = yield request.all()

      const list = post.map((post) => build.post(post))

      self.list.replace(list)
    })

    const get = flow(function*(id: string) {
      const { data: post }: Response<PostResponse, unknown> = yield request.get(id)

      self.post = build.post(post)
    })

    const create = flow(function*(create: CreatePostRequest) {
      const { data: post }: Response<PostResponse, unknown> = yield request.create(create)

      self.post = build.post(post)
    })

    const update = flow(function*(id: string, update: UpdatePostRequest) {
      const { data: post }: Response<PostResponse, unknown> = yield request.update(id, update)

      self.post = build.post(post)
    })

    const publish = flow(function*(id: string, publish: boolean) {
      return request.publish(id, publish)
    })

    const remove = flow(function*(id: string) {
      return request.remove(id)
    })

    return {
      all,
      get,
      create,
      update,
      publish,
      remove
    }
  })
