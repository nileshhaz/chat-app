import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SIgnUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-border backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
            </h1> 
            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Nilesh Hazra' className='w-full input input-bordered h-10'/>          
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>          
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
                </div>
                <GenderCheckBox/>
                <a href='#' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Already have an account?</a>
                <div>
                    <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                </div>
            </form>       
        </div>
    </div>
  )
}

export default SIgnUp

{/* <div class="bg-gray-400 bg-opacity-60 backdrop-filter backdrop-blur-md p-6 rounded-lg">
  This is a test element with backdrop utilities enabled.
</div> */}