export type GetCurrentResponse = {
  readonly create: Date
  readonly mail: string
  readonly name: string
  readonly image: string
  readonly description: string
  readonly location: LocationResponse
  readonly contact: ContactResponse
}

type LocationResponse = {
  readonly id: string
  readonly city: string
  readonly state: string
}

type ContactResponse = {
  readonly mail: string
  readonly phone: string
  readonly social: string
}
