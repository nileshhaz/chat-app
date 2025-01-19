import React from 'react'
import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const {setSelectedConversation} =useConversation()
  const {conversations} = useGetConversation()

  const handleForm = (e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length<3){
      return toast.error('Search term must be at least 3 charecters long');
    }
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else toast.error("No Such user found")
  }
  return (
    <form className='flex items-center gap-2' onSubmit={handleForm}> 
        <input type='text' placeholder='Search..' className='input input-bordered rounded-full'
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'><ImSearch className='w-5 h-5 outline-none'/></button>

    </form>
  )
}

export default SearchInput