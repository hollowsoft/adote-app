import { FunctionComponent } from 'react'

import {
  Input as In,
  FormControl
} from '@chakra-ui/react'

type InputProps = {
  onText?: (text: string) => void
}

export const Input: FunctionComponent<InputProps> = (props: InputProps) => {
  const { onText } = props

  return (
    <FormControl>
      <In onChange={(e) => onText?.(e.target.value)} />
    </FormControl>
  )
}
