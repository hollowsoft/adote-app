import { ReactNode, FunctionComponent } from 'react'

import { Modal as Md } from '@chakra-ui/react'

type ModalProps = {
  open: boolean
  children: ReactNode
  onClose: () => void
}

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { open, children, onClose } = props
  
  return (
    <Md isOpen={open} onClose={onClose}>
      {children}
    </Md>
  )
}
