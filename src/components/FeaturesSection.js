import { FeatureCard } from "./FeatureCard";

const featureData = [
  { id: 1, title: "Automated Expense Tracking", description: "Eclipse automatically tracks your expenses and provides a monthly report, in just a single click.", icon: "⚡" },
  { id: 2, title: "Investment Opportunities", description: "Eclipse provides you with the best investment opportunities in Mutual Funds and FDs.", icon: "⚡" },
  { id: 3, title: "Latest Financial News", description: "Eclipse provides you with the latest financial news and market trends.", icon: "⚡" },
  { id: 4, title: "Advance Tax Calculator", description: "Take the guesswork out of your tax calculations with advanced tax calculator", icon: "⚡" },
  { id: 5, title: "Eclipse Education (For Users)", description: "Eclipse Education is a fintech blogging platform for users to learn about finance and investments.", icon: "⚡" },
  { id: 6, title: "Eclipse Education (For Writers)", description: "A fintech blogging platform for writers to showcase their work in finance and investments.", icon: "⚡" },
  // ... las otras cuatro características
];

const FeaturesSection = () => {
  return (
    <section className="mt-42">
        <div className="text-center default-white space-y-4">
            <h2 className="text-4xl font-semibold">Start growing your wealth with <br/> Eclipse</h2>
            <p className="opacity-80">All-in-one personal finance app that simplifies investment opportunities, expense <br/> tracking, and financial news for users.</p>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-7 mx-18 default-white my-11">
            {featureData.map((feature) => (
              <FeatureCard
              key = {feature.id}
              title = {feature.title}
              description = {feature.description}
              />
            ))}
          </ul>
        </div>
    </section>
  )
}

export default FeaturesSection