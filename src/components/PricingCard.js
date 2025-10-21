
export const PricingCard = ({name, price, tagline, features}) => {
  return (
    <div className="h-full border rounded-xl border-[#3c9fd3] default-white">
        <div className='border-b-semitransparent py-9 space-y-3'>
            <h4 className="text-[#3c9fd3] text-lg font-medium">{name}</h4>
            <p className="text-3xl font-medium">{price} <span className="opacity-65 text-xl">/mo</span></p>
            <p className='opacity-65'>{tagline}</p>
        </div>
        <div className="flex flex-col space-y-4 py-7 px-12 text-start">
            {features.map((feature, index) =>(
                <div
                 key={index}
                 className=""
                 >
                    <p className="opacity-85">{feature}</p>
                 </div>
            ))}
        </div>
    </div>
  )
}
