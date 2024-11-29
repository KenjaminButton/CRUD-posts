'use client'

import { useFormStatus } from 'react-dom'

export default function FormSubmit() {
  // Must be used between <form> tags
  const status = useFormStatus()
  console.log('status:::', status)
  if (status.pending) {
    return <p>Creating post...</p>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  )
}