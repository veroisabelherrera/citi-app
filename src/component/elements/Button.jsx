import React from 'react'

export const Button = ({children}) => (
<button type="button" className="Btn" onClick={children}>{children}</button>
)
