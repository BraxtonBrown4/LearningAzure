import { useState } from 'react'
import './App.css'

function App() {
  const [fetchStatus, setFetchStatus] = useState("")

  const func = async () => {
  try {
    const res = await fetch("https://oracle.browse.wf/invasions");

    if (!res.ok) {
      setFetchStatus(`Error: ${res.status} ${res.statusText}`);
      return;
    }

    const data = await res.json();
    setFetchStatus(data.activation)
  } catch (error) {
    setFetchStatus(`Network error: ${error.message}`);
  }
};

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={func}>
          Status: {fetchStatus}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
