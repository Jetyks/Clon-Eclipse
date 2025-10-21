

export const CTAButton = ({ children, fullWidth, colorBlue}) => {
  return (
   <button 
      className={`
        ${fullWidth ? 'w-full' : 'w-auto'} 
        ${colorBlue ? "bg-gradient-to-r from-[#4551d0] to-[#3c9fd3]" : "bg-gray-800"}
         text-white text-sm font-medium 
        px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition
      `}
    >
      {children}
    </button>
  )
}
