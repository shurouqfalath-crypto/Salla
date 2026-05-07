import React from 'react'

export default function ErrorMsg({ message }) {
  return (
    <div className="w-full flex items-center justify-center p-4 rounded-xl border border-rose-200 bg-rose-50">

      <span className="text-rose-600 text-sm font-medium">
        {message}
      </span>

    </div>
  )
}