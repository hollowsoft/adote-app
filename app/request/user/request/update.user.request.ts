export type UpdateUserRequest = {
  readonly name: string
  readonly description: string
  readonly location: string
  readonly contact: ContactRequest
}

type ContactRequest = {
  readonly mail: string
  readonly phone: string
  readonly social: string
}
