import { useToast as use } from '@chakra-ui/react'

type ToastProps = {
  description?: string
}

export const useToast = (props: ToastProps) => {
  const { description } = props

  const toast = use()

  return () => {
    toast({
      description
    })
  }
}
