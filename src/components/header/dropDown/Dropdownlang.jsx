import React from 'react'

export default function Dropdownlang() {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <select className="border border-gray-300 p-2 rounded"
//         value={value} onChange={(e)=>
// onChange(e.target.value)}
>
          <option value="en">English</option>
          <option value="ar">عربي</option>
        </select>
      </div>
    </div>
  )
}

  1
