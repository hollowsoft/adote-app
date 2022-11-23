import { Size } from '../../../type/size.enum'
import { Gender } from '../../../type/gender.enum'

export type UpdatePostResponse = {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly description: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly location: LocationResponse
}

type PetResponse = {
  readonly id: string
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

type LocationResponse = {
  readonly id: string
  readonly city: string
  readonly state: string
}
