import { FunctionComponent } from 'react'

import { Button as Btn } from '@chakra-ui/react'

type ButtonProps = {
  children: string
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { children } = props

  return (
    <Btn>
      {children}
    </Btn>
  )
}
