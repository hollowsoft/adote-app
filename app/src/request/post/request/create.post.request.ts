import { Size } from '../../../type/size.enum'
import { Gender } from '../../../type/gender.enum'

export type CreatePostRequest = {
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetRequest
  readonly location: string
}

type PetRequest = {
  readonly name: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
  readonly breed: string
}
