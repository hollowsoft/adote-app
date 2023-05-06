import {
  ReactNode,
  FunctionComponent
} from 'react'

type Direction = 'col' | 'row'

type StackProps = {
  direction: Direction
  children: ReactNode | ReactNode[]
}

export const Stack: FunctionComponent<StackProps> = (props: StackProps) => {
  const { direction = 'col', children } = props

  return (
    <div>
      {children}
    </div>
  )
}
