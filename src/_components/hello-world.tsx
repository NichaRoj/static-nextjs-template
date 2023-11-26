'use client'

import { useEffect, useState } from 'react'
import Config from '../config'

export default function HelloWorld() {
  const [message, setMessage] = useState('')
  const [isLoading, setLoading] = useState(true)

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
      {message}
    </div>
  )
}
