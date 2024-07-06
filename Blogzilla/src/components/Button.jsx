import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >
        {children}
        {/* children is nothing but passed btnText or text  */}
    </button>
  )
}

export default Button