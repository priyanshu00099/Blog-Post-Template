import React from 'react'
import './FAQ.css'

const FAQ = () => {
  const faqs = [
    {
      question: "Which areas are closest to the University Park campus?",
      answer: "University Park, Lenton, and Beeston are the closest — most properties are within a 5–15 minute walk of the campus. City Centre and Dunkirk are also popular, both under 20 minutes on foot and well-connected by public transport."
    },
    {
      question: "I'm studying at Jubilee Campus — where should I live?",
      answer: "Jubilee Campus itself, Wollaton Park, and Lenton Abbey are the best options. You're also 10 minutes from the University Park campus, so you can use all facilities there too. Beeston and City Centre offer great value and a 15-minute commute."
    },
    {
      question: "Can my parents act as a guarantor?",
      answer: "Yes. Many landlords in our network accept overseas guarantors. For those who don't, we can point you to approved guarantor services like Housing Hand, which specialise in international students."
    },
    {
      question: "When should I start looking for accommodation?",
      answer: "Nottingham is increasingly competitive. For a September start, begin searching from April–May. University halls near University Park fill up fast. On-campus accommodation is first-come-first-served from February, so apply early."
    },
    {
      question: "Are bills included in Acolyte properties?",
      answer: "Most listings include water, electricity, and broadband. Gas is usually included for shared houses. The bills-included status is clearly displayed on every listing — no surprises."
    }
  ]

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Student FAQs</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question">
                {faq.question}
                <img src="/expand-icon.png" alt="Expand" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ