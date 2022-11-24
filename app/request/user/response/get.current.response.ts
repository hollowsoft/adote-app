export type GetCurrentResponse = {
  readonly create: Date
  readonly mail: string
  readonly name: string
  readonly image: string
  readonly description: string
  readonly contact: ContactResponse
  readonly location: LocationResponse 
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
