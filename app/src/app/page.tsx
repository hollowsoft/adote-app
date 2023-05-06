'use client'

import {
  useState,
  useEffect,
  FunctionComponent
} from 'react'

import {
  Swiper,
  Search
} from '@/component'

import styled from '@emotion/styled'

type AppProps = {

}

const Block = styled.main`
  height: 100vh;
  background: #000072;
`

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const [search, setSearch] = useState<string>('')

  // remove later
  const [show, setShow] = useState<boolean>(false)
  const [content, setContent] = useState<string[]>([])

  const remove = () => window.removeEventListener('keydown', (e) => {

  })

  useEffect(() => {
    window.addEventListener('keydown', ({ key }: any) => setContent((value) => [...value, key]))

    return () => remove()

  }, [])

  useEffect(() => {
    setShow(content.join('').includes('an'))

    if (show) { remove() }

  }, [content])

  return show ?
  (
    <main>
      <Swiper />
      <Search
        search={search}
        onText={setSearch} />
    </main>
  ) : <Block />
}

export default App
