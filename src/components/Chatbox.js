import React, { useEffect, useRef } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Chatbox = ({ title, chats, upvote = 0, setChats, lessThanVote = 0 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    var scrollTarget = scrollRef.current.scrollHeight;
    scrollRef.current.scrollTop = scrollTarget;
  }, [chats?.length, scrollRef]);

  const handleVote = (type, id) => {
    setChats((prev) => {
      const index = prev.findIndex((chat) => chat?.id === id);
      const updatedChats = [...prev];
      if (type === "up") {
        updatedChats[index] = {
          ...updatedChats[index],
          votes: updatedChats[index].votes + 1,
        };
      } else if (type === "down") {
        updatedChats[index] = {
          ...updatedChats[index],
          votes: updatedChats[index].votes - 1,
        };
      }

      return updatedChats;
    });
  };

  return (
    <>
      {title && (
        <div className="text-lg font-bold text-center uppercase rounded-md rounded-b-none dark:bg-gray-800 py-2 sticky top-0 z-50">
          {title}
        </div>
      )}
      <div
        className="chatbox flex flex-1 flex-col gap-6 h-full overflow-scroll scrollbar-none scroll-smooth p-3 pt-4 pb-12"
        ref={scrollRef}
      >
        {chats
          ?.filter((chat) => {
            if (lessThanVote > 0) {
              return chat?.votes >= upvote && chat?.votes < lessThanVote;
            }
            return chat?.votes >= upvote;
          })
          .map((chat) => (
            <div
              className="break-all dark:bg-gray-800 py-4 px-4 rounded-md relative"
              key={chat?.id}
            >
              {chat?.message}
              <div className="flex items-center justify-between select-none">
                <div className="text-slate-500 text-sm mt-2">
                  Votes: {chat?.votes}
                </div>
                <div className="flex gap-5">
                  <FaChevronUp
                    className="text-sm cursor-pointer"
                    onClick={() => handleVote("up", chat?.id)}
                  />
                  <FaChevronDown
                    className="text-sm cursor-pointer"
                    onClick={() => handleVote("down", chat?.id)}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Chatbox;
