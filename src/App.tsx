import { useState } from 'react'
import reactLogo from './assets/react.svg'
import gcp from './assets/gcp.png'
import gcr from './assets/gcr.png'
import gar from './assets/gar.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={gcr} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="" target="_blank">
          <img src={gar} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>GCR + GAR</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click Me : {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Created In Order To Learn GCP Deployments
      </p>
      <p className="read-the-docs">
        made with ❤ <a target='_blank' href="https://github.com/moshdev2213">@moshdev2213</a>
      </p>
    </>
  )
}

export default App
