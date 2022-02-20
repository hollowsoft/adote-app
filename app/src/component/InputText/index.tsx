import { FunctionComponent } from 'react'

type InputTextProps = {
  onText?: (text: string) => void
}

export const InputText: FunctionComponent<InputTextProps> = (props: InputTextProps) => {
  const { onText } = props
  
  return (
    <div />
  )
}
