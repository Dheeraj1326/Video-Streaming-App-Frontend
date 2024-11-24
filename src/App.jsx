import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoStreaming from './components/VideoStreaming'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)
  const [videoId, setVideoId]=useState('52fc1c2d-be6e-4dad-a61a-800b8d3f1408');
  return (
    <>
      <div className='flex flex-col items-center space-y-9 justify-center py-9'>
        <h1 className='text-2xl font-bold text-gray-700  dark:text-gray-100'>
          Video streaming app</h1>

        <div>
          <h1 className='text-white'>Playing Video</h1>
          <video
           src={`http://localhost:8080/api/v1/videos/stream/${videoId}`}
           controls
           style={{
            width:500,
            height:500,
           }}
           >
            </video>
        </div>

        <VideoStreaming />
      </div>

      <Toaster />
    </>
  )
}

export default App
