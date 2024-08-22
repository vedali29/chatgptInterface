import React from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode, MdHistory } from 'react-icons/md';

const ChatHeader = ({ toggleDarkMode, darkMode, setShowHistory }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-lightCardBg dark:bg-darkCardBg text-lightText dark:text-white dark:bg-[#1f2937]">
      <h2 className="text-xl font-semibold ">ChatGPT Interface</h2>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setShowHistory((prev) => !prev)}
          className="focus:outline-none"
          title="Toggle Message History"
        >
          <MdHistory size={24} />
        </button>
        <button
          onClick={toggleDarkMode}
          className="focus:outline-none"
          title="Toggle Dark/Light Mode"
        >
          {darkMode ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
