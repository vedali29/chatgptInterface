import React, { useEffect, useRef } from 'react';

const ChatMessages = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-lg p-3 rounded-lg ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white'
            }`}
          >
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500 block mt-1">{msg.timestamp}</span>
          </div>
        </div>
      ))}
      {isTyping && (
        <div className="mb-4 flex justify-start">
          <div className="max-w-lg p-3 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white">
            <p>System is typing...</p>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
