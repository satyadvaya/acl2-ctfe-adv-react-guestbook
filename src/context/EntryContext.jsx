import React, { createContext, useContext, useState } from 'react';

const EntryContext = createContext();
const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context === undefined) {
    throw new Error(
      'custom hook useEntries must be used within an EntryContext Provider'
    );
  }

  return context;
};

export { EntryProvider, useEntries };
