import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const login = (username, password) => {
    const loginMatch =
      username === process.env.AUTH_USERNAME &&
      password === process.env.AUTH_PASSWORD;
    if (loginMatch) setUser({ username });
    return loginMatch;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      'custom hook useAuth must be used within an AuthContext Provider'
    );
  }

  return context;
};

const useForm = (inputs = {}) => {
  const [formState, setFormState] = useState(inputs);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return { formState, handleFormChange };
};

export { AuthProvider, useAuth, useForm };
