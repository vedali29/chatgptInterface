import React, { useState, useEffect } from 'react';
import ChatMessages from './ChatMessages';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import MessageHistory from './MessageHistory';

const ChatInterface = () => {
  const [sessionMessages, setSessionMessages] = useState([]);
  const [messageHistory, setMessageHistory] = useState(
    JSON.parse(localStorage.getItem('messageHistory')) || []
  );
  const [userInput, setUserInput] = useState('');
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  );
  const [isTyping, setIsTyping] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  useEffect(() => {
    localStorage.setItem('messageHistory', JSON.stringify(messageHistory));
  }, [messageHistory]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessage = {
        sender: 'user',
        text: userInput,
        timestamp: new Date().toLocaleTimeString(),
      };

      setSessionMessages([...sessionMessages, newMessage]);
      setMessageHistory([...messageHistory, newMessage]);
      setUserInput('');

      setIsTyping(true);
      setTimeout(() => {
        const botResponse = {
          sender: 'system',
          text: 'This is a mock GPT response.',
          timestamp: new Date().toLocaleTimeString(),
        };

        setSessionMessages((prevMessages) => [...prevMessages, botResponse]);
        setMessageHistory((prevMessages) => [...prevMessages, botResponse]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    setSessionMessages([]);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex h-screen w-screen bg-lightBg dark:bg-darkBg transition-colors duration-300">
        {/* Docked Message History on the Left */}
        {showHistory && (
          <div className="w-1/4 border-r border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#374151] p-4 overflow-y-auto">
            <MessageHistory messages={messageHistory} />
          </div>
        )}

        {/* Chat Section */}
        <div className="flex flex-col flex-1 relative">
          <ChatHeader
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            setShowHistory={setShowHistory}
          />
          <div className="flex flex-col flex-1 p-4 bg-lightBg dark:bg-[#374151]">
            <ChatMessages messages={sessionMessages} isTyping={isTyping} />
            <MessageInput
              userInput={userInput}
              setUserInput={setUserInput}
              handleSend={handleSend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
