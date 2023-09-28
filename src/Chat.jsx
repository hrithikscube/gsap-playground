import React, { useState } from 'react'
import useSyncSetState from 'use-sync-set-state';


const Chat = () => {

  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const initialChat = [
    {
      message: 'Hello world',
      date: Date.now()
    },
    {
      message: 'Hello there',
      date: Date.now()
    }
  ]

  const [chat, setChat] = useSyncSetState('chat', initialChat)

  const sendMessage = () => {
    if (message !== '') {
      let temp = [...chat]
      temp.push({
        message: message,
        date: Date.now()
      })
      setChat(temp)
    }
    else {
      alert('Message cannot be empty.')
    }
  }

  return (
    <div>

      <div className='h-screen w-full bg-[#f2f2f2] overflow-y-scroll flex flex-col p-5 gap-4'>
        {
          React.Children.toArray(chat.map((item, index) => (
            <div className={`text-white  p-3 rounded-lg ${index % 2 === 0 ? 'mr-auto bg-blue-500' : 'ml-auto bg-green-500'} lg:w-[35%] w-[80%]`}>
              <p>{item.message}</p>
            </div>
          )))
        }
      </div>

      <div className='w-full absolute bottom-3 p-5'>
        <div className='relative'>
          <input
            placeholder='Enter your message'
            name="message"
            value={message}
            onChange={handleChange}
            className='p-3 outline-none bg-transparent text-base font-sans w-full outline-gray-500 rounded-lg' />
          <img onClick={sendMessage} src="/send.svg" alt="sendIcon" className='w-7 h-7 cursor-pointer absolute right-2 top-2' />
        </div>
      </div>

    </div>
  )
}

export default Chat