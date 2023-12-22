import React, { useState } from "react";
import Chatbox from "./Chatbox";
import MessageBox from "./MessageBox";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [typedChat, setTypedChat] = useState();

  return (
    <div className="flex h-screen gap-6 p-10">
      <div className="flex flex-col flex-1 flex-shrink-0 bg-white border-gray-200 dark:bg-gray-900 relative rounded-md">
        <Chatbox
          title={"All Chats"}
          chats={chats}
          setChats={setChats}
          upvote={0}
          lessThanVote={3}
        />
        <MessageBox
          typedChat={typedChat}
          setTypedChat={setTypedChat}
          setChats={setChats}
          chats={chats}
        />
      </div>
      <div className="flex-1 flex-shrink-0 bg-white border-gray-200 dark:bg-gray-900 rounded-md">
        <Chatbox
          title={"Priority"}
          chats={chats}
          upvote={3}
          lessThanVote={10}
          setChats={setChats}
        />
      </div>
      <div className="flex-1 flex-shrink-0 bg-white border-gray-200 dark:bg-gray-900 rounded-md">
        <Chatbox
          title={"Top Priority"}
          chats={chats}
          upvote={10}
          setChats={setChats}
        />
      </div>
    </div>
  );
};

export default Chat;
