"use client";
import React from "react";

const ChatBotPopoverComponent = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50" id="el-su3ibn8g">
      <button
        id="chatbot-trigger"
        className="group flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 overflow-hidden w-12 hover:w-36"
      >
        <div className="relative flex-shrink-0" id="el-vl4agta4">
          <img
            src="https://placehold.co/40x40?text=AI"
            alt="AI Assistant"
            className="w-6 h-6 rounded-full"
            width="40"
            height="40"
            id="el-syk23zmc"
          />
          <span
            className="absolute bottom-0 right-0 h-2 w-2 bg-green-400 rounded-full"
            id="el-jputjjjd"
          ></span>
        </div>

        {/* Reveal text on hover */}
        <span
          className="ml-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          id="el-617ozom3"
        >
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default ChatBotPopoverComponent;
