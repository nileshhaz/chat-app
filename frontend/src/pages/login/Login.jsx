import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react"
import useLogin from '../../hooks/useLogin'

const Login = () => {
    const initialData = {
        username:'',
        password:'',
    }

    const [inputs, setInputs] = useState(initialData)

    const {loading, login} = useLogin();

    const handleForm= async (e)=>{
        e.preventDefault();
        await login(inputs)
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-[24rem] mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login <span className='text-blue-500'>ChatApp</span>
            </h1>
            <form onSubmit={handleForm}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'
                    onChange={(e)=> setInputs({...inputs, username: e.target.value})}/>          
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'
                    onChange={(e)=> setInputs({...inputs, password: e.target.value})}/>
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Dont't Have an account?</Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2'disabled={loading}>
                    {loading? <span className='loading loading-spinner'></span>:"Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login


// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-[24rem] mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                 <span className='text-blue-500'>ChatApp</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Username</span>
//                     </label>
//                     <input type='text' placeholder='Enter Username' className='w-full input input-bordered h-10'/>          
//                 </div>
//                 <div>
//                     <label className='label p-2'>
//                         <span className='text-base label-text'>Password</span>
//                     </label>
//                     <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//                 </div>
//                 <a href='#' className='text-sm hover:underline hover:text-green-600 mt-2 inline-block'>Dont't Have an account?</a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2'>Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login