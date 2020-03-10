import React from 'react';

export const Button = ({ children }) => (
  <button type="submit" className="Btn" onClick={children}>{children}</button>
);
