import { FunctionComponent } from 'react'

type ButtonProps = {
  onClick?: () => void
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { onClick } = props
  
  return (
    <div />
  )
}
