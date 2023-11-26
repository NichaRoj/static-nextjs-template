'use client'

import { useEffect, useState } from 'react'
import Config from '../config'

export default function HelloWorld() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setLoading] = useState(true)

  function handleNameChange(e: any)  {
    setName(e.target.value)
  }

  function handleSayHiClick() {
    fetch(Config.EndPoint + '/hello-world', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
        Name: name,
      })
    })
      .then((res) => res.text())
      .then((data) => {
        setMessage(data)
        setLoading(false)
      })
      .catch((err) => {
        setMessage("Error: " + err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetch(Config.EndPoint + '/hello-world', {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify({
      })
    })
      .then((res) => res.text())
      .then((data) => {
        setMessage(data)
        setLoading(false)
      })
      .catch((err) => {
        setMessage("Error: " + err)
        setLoading(false)
      })
  }, [])

  if (isLoading)
    return (
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-center">
        Loading...
      </div>
    )

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex text-center">
      <div>{message}</div>
      <div><input
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      type="text"
      value={name}
      onChange={handleNameChange}
      placeholder='Name'
      /></div>
      <div><button onClick={handleSayHiClick}>Say Hi</button></div>
    </div>
  )
}
