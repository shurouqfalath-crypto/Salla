import React from 'react'

export default function RemoveBtn({ onClick }) {
  return (
      
   <button onClick={onClick}className="w-[28px] h-[28px] flex items-center justify-center text-red-500 border border-red-500 rounded-full" ><b dir="ltr">×</b> </button> 
 );

}
