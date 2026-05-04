import React from 'react'
export default function Filterinput({value,onChange}) {
  return (
    <input 
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className='w-full p-2 bg-white rounded-md border border-gray-400 text-md'
    />
  )
}
