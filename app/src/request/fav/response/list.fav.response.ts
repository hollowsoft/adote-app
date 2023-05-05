import { Size } from '../../../type/size.enum'
import { Gender } from '../../../type/gender.enum'

export type ListFavResponse = {
  readonly id: string
  readonly create: Date
  readonly title: string
  readonly image: string[]
  readonly pet: PetResponse
  readonly location: LocationResponse
}

type PetResponse = {
  readonly name: string
  readonly age: [number, number]
  readonly size: Size
  readonly gender: Gender
}

type LocationResponse = {
  readonly city: string
  readonly state: string
}
