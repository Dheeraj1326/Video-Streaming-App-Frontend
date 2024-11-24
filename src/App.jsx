import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoStreaming from './components/VideoStreaming'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col items-center space-y-9 justify-center py-9'>
        <h1 className='text-2xl font-bold text-gray-700  dark:text-gray-100'>
            Video streaming app</h1>
            <VideoStreaming />
      </div>
      <Toaster />
    </>
  )
}

export default App
