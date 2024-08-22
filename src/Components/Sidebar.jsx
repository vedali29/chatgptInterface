import React from 'react';

const Sidebar = ({ darkMode }) => {
  return (
    <div className="w-1/4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white p-4">
      <h2 className="text-xl font-semibold">Contacts</h2>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center space-x-3">
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          <span>John Doe</span>
        </li>
        <li className="flex items-center space-x-3">
          <span className="h-3 w-3 bg-green-500 rounded-full"></span>
          <span>Ollie Jones</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
