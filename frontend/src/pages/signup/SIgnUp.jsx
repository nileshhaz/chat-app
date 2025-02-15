import React from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'

const SIgnUp = () => {
    const initialData = {
        fullName: '',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    }

    const [inputs, setInputs] = useState(initialData)

    const {loading, signup} = useSignup();

    const handleCheckBox = (gender)=>{
        setInputs({...inputs,gender})
    }

    const handleForm= async (e)=>{
        e.preventDefault();
        await signup(inputs)
    }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-border backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
            </h1> 
            <form onSubmit={handleForm}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Name Surname' className='w-full input input-bordered h-10' value={inputs.fullName}
                    onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}/>          
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10' value={inputs.username}
                    onChange={(e)=> setInputs({...inputs, username: e.target.value})}/>          
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' value={inputs.password}
                    onChange={(e)=> setInputs({...inputs, password: e.target.value})}/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' value={inputs.confirmPassword}
                    onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}/>
                </div>
                <GenderCheckBox gender={handleCheckBox} selectedGender ={inputs.gender}/>
                <Link to='/login' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Already have an account?</Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {loading? <span className='loading loading-spinner'></span>:"Sign Up"}
                    </button>
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