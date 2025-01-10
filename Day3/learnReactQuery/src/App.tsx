import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserData from './components/UserData'

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <QueryClientProvider client={queryClient}>
      <UserData/>
    </QueryClientProvider>
    </>
  )
}

export default App
