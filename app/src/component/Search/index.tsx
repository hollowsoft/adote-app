import { FunctionComponent } from 'react'

import { Input } from '@chakra-ui/react'

type SearchProps = {
  search: string
  onText?: (text: string) => void
}

export const Search: FunctionComponent<SearchProps> = (props: SearchProps) => {
  const { search, onText } = props

  return (
    <Input
      value={search}
      onChange={(e) => onText?.(e.target.value)} />
  )
}
