

export const FAQCard = ({question, answer}) => {
  return (
    <div className="mt-12 px-8">
        <h5 className="text-lg font-semibold">{question}</h5>
        <p className="opacity-85 mt-3.5">{answer}</p>
    </div>
  )
}
