import { PricingCard } from "./PricingCard"
const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$12',
    interval: '/mo',
    tagline: 'Ideal for growing finance',
    color: 'purple-500', // Clase de Tailwind para el borde y texto
    isFeatured: false,
    features: [
      'Automated Expense Tracking(Detail Analysis)',
      'Family Expense Tracking(4 Users Only)',
      'Latest Fintechology News',
      'Investment Opportunities (Can invest)',
      'Advance Tax Calculator'
    ],
    buttonText: 'Coming Soon!'
  },
  {
    id: 'basic',
    name: 'Basic plan',
    price: '$0',
    interval: '/mo',
    tagline: 'For individuals',
    color: 'blue-500', // Ejemplo para el plan central
    isFeatured: true, // Útil para destacar estilos
    features: [
      'Automated Expense Tracking',
      'Family Expense Tracking(2 Users Only)',
      'Latest Fintechology News',
      'Investment Opportunities (Only showcase)',
      'Advance Tax Calculator'
    ],
    buttonText: 'Download Now!',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$32',
    interval: '/mo',
    tagline: 'Built for financially savvy',
    color: 'blue-500', // Ejemplo para el plan central
    isFeatured: false, // Útil para destacar estilos
    features: [
      'Automated Expense Tracking(Detail Analysis)',
      'Family Expense Tracking(6 Users Only)',
      'Latest Fintechology News',
      'Personalized Investment Opportunities',
      'Tax calculation and Tax saving schemes'
    ],
    buttonText: 'Coming soon!',
  }
];


export const PricingPlans = () => {
  return (
    <section className="text-center w-full px-8 mt-12 mb-10">
        <h3 className="title-2 mb-12">Find a plan to power your finances</h3>
        <div className="h-125 w-full grid grid-cols-3 gap-6 ">
            {pricingPlans.map((plan) =>(
              <PricingCard 
              key={plan.id}
              name = {plan.name}
              price = {plan.price}
              tagline = {plan.tagline}
              features={plan.features} // Pasa el array de características
              buttonText={plan.buttonText}
              color={plan.color}
              isFeatured={plan.isFeatured}
              />
            ))}
        </div>
    </section>
  )
}
