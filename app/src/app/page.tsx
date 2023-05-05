'use client'

import {
  useState,
  FunctionComponent
} from 'react'

import {
  Swiper,
  Search
} from '@/component'

type AppProps = {

}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const [search, setSearch] = useState<string>('')

  return (
    <main>
      <Swiper />
      <Search
        search={search}
        onText={setSearch} />
    </main>
  )
}

export default App
