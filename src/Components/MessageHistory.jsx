import React from 'react';

const MessageHistory = ({ messages }) => {
  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white h-full overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Message History</h3>
      {messages.length ? (
        messages.map((msg, idx) => (
          <div key={idx} className="mb-4">
            <p className="font-semibold">
              {msg.sender === 'user' ? 'You' : 'System'}:
            </p>
            <p>{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.timestamp}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No messages yet.</p>
      )}
    </div>
  );
};

export default MessageHistory;
