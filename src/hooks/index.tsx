import React from 'react';

import { AuthProvider } from './auth';

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
