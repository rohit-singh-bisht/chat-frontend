import React, { useRef } from "react";

const MessageBox = ({ typedChat, setTypedChat, setChats, chats }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const newText = e.target.textContent;
    setTypedChat(newText);
  };

  const handleSendChat = () => {
    setChats((prev) => [
      ...prev,
      {
        id: chats?.length + 1,
        message: typedChat,
        votes: 0,
      },
    ]);
  };

  return (
    <div className="rounded-md rounded-t-none dark:border-gray-200 dark:bg-gray-800 flex items-start gap-2 p-3 hover:cursor-text">
      <div className="flex flex-1 items-center h-full">
        <div
          class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-900 placeholder-gray-600 rounded-md dark:bg-gray-800 dark:text-white text-sm break-all max-h-[116px] overflow-auto"
          contentEditable
          onInput={handleChange}
          ref={inputRef}
        ></div>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2 text-center outline-none"
        onClick={handleSendChat}
      >
        Send
      </button>
    </div>
  );
};

export default MessageBox;
