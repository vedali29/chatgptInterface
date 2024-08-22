import React from 'react';

const MessageInput = ({ userInput, setUserInput, handleSend }) => {
  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 flex items-center">
      <input
        className="flex-1 p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type a message..."
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="ml-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
