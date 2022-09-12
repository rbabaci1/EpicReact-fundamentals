// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const inputRef = React.useRef(null)

  function handleChange(event) {
    let value = event.target.value
    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" ref={inputRef} onChange={handleChange} />
      </div>

      <span role="alert" style={{color: 'red'}}>
        {error}
      </span>
      <br></br>

      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
