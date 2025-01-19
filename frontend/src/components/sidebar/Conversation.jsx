import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx }) => {
  const { fullName = "Unknown User", username = "N/A", profilePic, gender = "unknown" } = conversation;
  const {selectedConversation,setSelectedConversation}=useConversation()

  const isSelected = selectedConversation?._id === conversation._id
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    <>
    <div className={`flex gap-4 items-center hover:bg-sky-500 rounded p-6 py-2 cursor-pointer ${isSelected? "bg-sky-500": ""}`}
        onClick={()=> setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline? "online": ""}`}>
        <div className="w-20 rounded-full">
          <img
            src={profilePic || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
            alt={`${fullName}'s avatar`}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{fullName}</p>
          <span className="text-sm text-gray-400">@{username}</span>
        </div>
        <div className="text-sm text-gray-400 capitalize">
          Gender: {gender}
        </div>
      </div>
    </div>
    {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  );
};

export default Conversation;
