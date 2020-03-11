import React from 'react';

export const Button = ({ children }) => (
  <button type="submit" className="Btn-second" onClick={children}>{children}</button>
);
