import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const register = async (e) => {
    e.preventDefault()
    await axios.post('/register', { username, password })
  }

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
      <form className='w-64 mx-auto mb-12' onSubmit={register}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder='Username'
          className='block w-full rounded-md p-2 mb-2 border'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
          className='block w-full rounded-md p-2 mb-2 border'
        />
        <button className='bg-blue-500 text-white block w-full rounded-md p-2'>Register</button>
      </form>
    </div>
  )
}

export default Register