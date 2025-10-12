

export const FeatureCard = ({title, description}) => {
  return (
    <li className="h-46 bg-gradient-to-b border border-[#3e517a77] from-[#465B88]/70 to-[#161F31] rounded-xl p-4">
        <div className="bg-[#465B88] size-11 flex justify-center items-center rounded-lg">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                </svg>
        </div>
              <h4 className="text-lg font-semibold my-2">{title}</h4>
              <p className="text-sm">{description}</p>
    </li>
  )
}
