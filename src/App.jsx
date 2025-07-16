import { useState } from 'react'
import './App.css'

function App() {
  const [fetchStatus, setFetchStatus] = useState("")
  const [data, setData] = useState({})

  const func = async () => {
  try {
    const res = await fetch("https://oracle.browse.wf/invasions");

    if (!res.ok) {
      setFetchStatus(`Error: ${res.status} ${res.statusText}`);
      return;
    }

    const data = await res.json();
    setData(data)
    setFetchStatus("Success")
  } catch (error) {
    setFetchStatus(`Network error: ${error.message}`);
  }
};

  return (
    <>
      <h1>Lag Waggon Press The Button</h1>
      <div className="card">
        <button onClick={func}>
          Status: {fetchStatus}
        </button>
        {data.activation && data.invasions.map(i => <p>{i.ally}</p>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
