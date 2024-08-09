import React from 'react'
import LeftNav from '../../components/ChatBot/LeftNav';
import ChatContainer from '../../components/ChatBot/ChatContainer';
import Mobile from '../../components/ChatBot/Mobile';

const ChatbotPage = () => {
  return (
    <div className="flex   my-5  rounded-3xl relative">
      <ChatContainer />
      <LeftNav />
      <span className="flex lg:hidden">
        <Mobile />
      </span>
    </div>
  );
}

export default ChatbotPage

