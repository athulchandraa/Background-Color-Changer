import React, { useState } from 'react'
import { FaRandom } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

function Color() {
    const [color,setColor]=useState('')
    const Random=()=>{
        let num=Math.round(Math.random()*10)
        switch(num){
            case 0:return('purple-600')
                break
            case 1:return('orange-600')
                break
            case 2:return('pink-600')
                break
            case 3:return('cyan-600')
                break
            case 4:return('sky-600')
                break
            case 5:return('gray-600')
                break
            case 6:return('indigo-600')
                break
            case 7:return('teal-600')
                break
            case 8:return('amber-600')
                break
            default:return('black')
                break
        }
        
    }
  return (
    <div className={`bg-${color} p-10`}>
      <div className='text-center bg-white rounded'>
          <h3 className='font-medium text-3xl py-5'>Background Color Changer</h3>
          <p>Click a color button to change the background</p>
          <div className='flex justify-center items-center flex-wrap'>
            <button onClick={()=>setColor('red-600')} className='bg-red-700 text-white px-3 h-10 w-30 rounded font-medium m-5'>Red</button>
            <button onClick={()=>setColor('blue-600')} className='bg-blue-700 text-white px-3 h-10 w-30 rounded font-medium m-5'>Blue</button>
            <button onClick={()=>setColor('green-600')} className='bg-green-700 text-white px-3 h-10 w-30 rounded font-medium m-5'>Green</button>
            <button onClick={()=>setColor('yellow-600')} className='bg-yellow-400 text-white px-3 h-10 w-30 rounded font-medium m-5'>Yellow</button>
            <button onClick={()=>setColor(Random())} className='bg-purple-400 text-white px-3 h-10 w-30 rounded font-medium m-5 flex justify-center items-center gap-2'><FaRandom />Random</button>
          </div>
          <div className='p-10'>
            <div className='flex justify-center gap-5 bg-blue-200 h-30 items-center rounded'>
            <IoMdColorPalette className='text-5xl text-blue-500' />
            <div className='text-left'>
                <p className='font-medium'>Current Selected Color :</p>
                <h3 className={`text-4xl text-${color} font-medium`}>{color.split('-')[0].toUpperCase()}</h3>
            </div>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Color