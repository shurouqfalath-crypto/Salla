import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import React from 'react'
export default function Loader({ text = "Loading..."}) {
  return (
 <div className="flex flex-col items-center gap-2">
      <DotLottieReact
        src="https://lottie.host/9748cf75-6053-4e72-9873-1cf25a9099c5/v1rS37WZ7X.lottie"
        loop
        autoplay
        style={{ width: 120, height: 120 }}
      />
      <span className="text-gray-500 text-sm">{text}</span>      
    </div>
  )
}
