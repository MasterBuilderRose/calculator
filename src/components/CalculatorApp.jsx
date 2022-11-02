import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const CalculatorApp = () => {
  const [number, setNumber] = useState("");

  const handleClick = (event) => {
    setNumber(number.concat(event.target.value))
  }

  // handle clear 
  const handleClear = () => {
    setNumber("")
  }
  // handle slash 
  const handleSlice = () => {
    setNumber(number.slice(0, -1))
  }
  // answer 
  const handleAnswer = () => {
    try {
      setNumber(eval(number).toString())
    } catch (error) {
      setNumber('invalid')
    }
  }

  return (
    <>
      <section>
        <div className='bg-black w-96 pb-10 mx-auto rounded-xl overflow-hidden mt-20'>
          <div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-4 pl-2 sm:min-h-fit'>
            <GiHamburgerMenu />
            <p>
              Calculator
            </p>
          </div>
          {/* screen  */}
          <div className='w-full h-20'>
            <input type="text"
              placeholder='0'
              value={number}
              className='w-full h-full border text-gray-100 border-white bg-black text-4xl text-right pr-5 '

            />

          </div>

          {/* key  */}
          <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>
            <button onClick={handleClear} className='btn1'>AC</button>
            <button onClick={handleSlice} className='btn1'>C</button>
            <button onClick={handleClick} value='/' className='text-white w-20 h-20 bg-green-500 hover:bg-green-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
            <button onClick={handleClick} value='+' className='text-white w-20  bg-red-500 hover:bg-red-700 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2 h-44'>+</button>



            <button onClick={handleClick} value='9' className='btn1'>9</button>
            <button onClick={handleClick} value='8' className='btn1'>8</button>
            <button onClick={handleClick} value='7' className='btn1'>7</button>
            {/* <button className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button> */}



            <button onClick={handleClick} value='6' className='btn1'>6</button>
            <button onClick={handleClick} value='5' className='btn1'>5</button>
            <button onClick={handleClick} value='4' className='btn1'>4</button>
            <button onClick={handleClick} value='-' className='text-white w-20 h-20 bg-yellow-300 hover:bg-yellow-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button>


            <button onClick={handleClick} value='3' className='btn1'>3</button>
            <button onClick={handleClick} value='2' className='btn1'>2</button>
            <button onClick={handleClick} value='1' className='btn1'>1</button>
            <button onClick={handleClick} value='*' className='text-white w-20 h-20 bg-orange-400 hover:bg-orange-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

            <button onClick={handleClick} value='.' className='btn1'>.</button>
            <button onClick={handleClick} value='0' className='btn1'>0</button>
            <button onClick={handleAnswer} className='text-black w-44 h-20 bg-white hover:bg-gray-300 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button>


          </div>
        </div>
      </section>
    </>
  )
}

export default CalculatorApp