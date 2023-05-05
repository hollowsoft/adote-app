'use client'

import {
  ReactNode,
  FunctionComponent
} from 'react'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

type ProviderProps = {
  children: ReactNode
}

export const Provider: FunctionComponent<ProviderProps> = (props: ProviderProps) => {
  const { children } = props

  return (
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
