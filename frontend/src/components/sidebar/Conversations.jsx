import React from 'react'
import Conversation from './Conversation'
import useConversation from '../../hooks/useGetConversation'
import { useState } from 'react'
import { useEffect } from 'react'

const Conversations = () => {

  const [data, setData] = useState('')

  const {loading, conversations} = useConversation();


  return (
    <div className='py-1 flex flex-col overflow-auto'>
      {loading && <p>Loading...</p>}
      {conversations && conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastIdx = {idx === conversation.length -1}/>
      ))}
    </div>
  )
}

export default Conversations