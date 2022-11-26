export const get = <T = any>(property: string): T => {
  return <T> process.env[property]
}
