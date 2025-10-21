import { FAQCard } from "./FAQCard";

export const FAQSection = ({title, subtitle}) => {
    const faqData = [
  {
    id: 'expensetrack',
    question: 'What is automated expense tracking?',
    answer: 'Automated expense tracking is a feature that allows you to track your expenses automatically with a single click. It is a great way to keep track of your spending and make sure you are not overspending.'
  },
  {
    id: 'investments',
    question: 'What kind of investment opportunities does Eclipse provide?',
    answer: 'Eclipse provides you with the best investment opportunities in Mutual Funds and FDs.'
  },
  {
    id: 'eclipsenews',
    question: 'What is Eclipse News?',
    answer: 'Eclipse news is a platform where you can get the latest financial news and market trends.'
  },
  {
    id: 'taxcalculator',
    question: 'What is the advance tax calculator?',
    answer: 'The advance tax calculator is a tool that helps you calculate your tax liability in advance. It is a great way to make sure you are not paying more tax than you need to.'
  },
  {
    id: 'educationusers',
    question: 'What is Eclipse Education (for users)?',
    answer: 'Eclipse Education is a platform where you can learn about financial literacy and get tips on how to manage your finances better.'
  },
  {
    id: 'educationwriters',
    question: 'What is Eclipse Education (for writers)?',
    answer: 'Eclipse invites writers/bloggers/influencers to showcase their work on our platform and help us increasing the financial literacy of our users.'
  }
];

  return (
    <section className="default-white mt-55">
        <div className="text-center space-y-3">
            <h3 className="text-4xl font-extrabold">{title}</h3>
            <p>{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
            {faqData.map((question) =>(
                <FAQCard
                 key={question.id}
                 question={question.question}
                 answer={question.answer}
                 />
            ))}
        </div>
    </section>
  )
}
