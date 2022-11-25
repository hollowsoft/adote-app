import { Size } from '../../../type/size.enum'
import { Gender } from '../../../type/gender.enum'

export type PostResponse = {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly user: UserResponse
  readonly location: LocationResponse
}

type PetResponse = {
  readonly name: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
  readonly breed: BreedResponse
}

type BreedResponse = {
  readonly id: string
  readonly name: string
}

type UserResponse = {
  readonly create: Date
  readonly name: string
  readonly image: string
  readonly description: string
  readonly contact: ContactResponse
}

type ContactResponse = {
  readonly mail: string
  readonly phone: string
  readonly social: string
}

type LocationResponse = {
  readonly id: string
  readonly city: string
  readonly state: string
}
