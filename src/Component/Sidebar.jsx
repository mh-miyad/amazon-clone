import React from 'react'

const Sidebar = () => {
  return (
    <div>


        <div className='border-2 rounded-lg border-green-600 px-7 bg-green-300  font-bold shadow-2xl shadow-green-300 '>
            <div className='p-10'>
                <h4 className='text-3xl px-10 py-5 my-6 bg-white/80 shadow-xl shadow-black/20 rounded-xl text-gray-800 border-4 border-gray-500 capitalize'>
                Order Summary
                </h4>
                <p className='text-white border-2 text-2xl bg-black/20 shadow-lg shadow-black/50 rounded-xl border-white px-5 py-4'>Selected Items:
                    <span className='text-2xl font-bold mx-10'></span>
                </p>

            </div>
        </div>
    </div>
  )
}

export default Sidebar