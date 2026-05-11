import React from 'react'
import './UniversityInfo.css'

const UniversityInfo = () => {
  const sections = [
    {
      title: "University of Nottingham: Courses, Acceptance Rate & Student Accommodation",
      content: [
        "The University of Nottingham is one of the UK's leading research universities, renowned for its academic excellence and innovative teaching. Located in Nottingham, often called the 'Queen of the Midlands', the university offers a vibrant student experience with world-class facilities and strong industry connections.",
        "Students planning to study here often research the university of nottingham acceptance rate, campus facilities, and nearby housing options before starting their application journey."
      ]
    },
    {
      title: "University of Nottingham Acceptance Rate",
      content: [
        "The university of nottingham acceptance rate is competitive but accessible, attracting ambitious students from around the world. The university offers undergraduate and postgraduate courses across multiple disciplines, including medicine, engineering, business, humanities, and computer science.",
        "Admission requirements vary depending on the course and academic background. International students are required to demonstrate English language proficiency through recognised exams such as IELTS or TOEFL.",
        "Due to increasing student demand, applicants are advised to secure their university of nottingham accommodation early to avoid limited availability during peak admission seasons."
      ]
    },
    {
      title: "University of Nottingham Library",
      content: [
        "The university of nottingham library system plays a major role in supporting students academically throughout their university journey. The library provides access to extensive digital databases, academic journals, study materials, and research support services.",
        "Students can benefit from:",
        ["Silent study areas", "24/7 study spaces during exams", "Computer and printing facilities", "Online learning resources", "Collaborative study rooms"],
        "Because students frequently use the library facilities, many prefer choosing student accommodation near university of nottingham to reduce travel time and improve convenience."
      ]
    },
    {
      title: "University of Nottingham Accommodation Options",
      content: [
        "Finding suitable university of nottingham accommodation is an important part of student life in Nottingham. Students can choose between university-managed halls and private student housing depending on their budget, lifestyle, and preferred location.",
        "Private accommodation options are becoming increasingly popular because they offer modern amenities such as:",
        ["Fully furnished rooms", "Private studios and en-suite rooms", "High-speed Wi-Fi", "Gym and fitness centres", "Laundry and social spaces"],
        "Students searching for verified student housing in Nottingham can explore Acolyte Living Nottingham Accommodation to compare different properties, pricing, and facilities."
      ]
    },
    {
      title: "Best Student Accommodation Near University of Nottingham",
      content: [
        "The demand for student accommodation near university of nottingham continues to increase because of the university's growing international student population. Popular nearby areas include University Park, Jubilee Campus, City Centre, Lenton, and Beeston.",
        "These locations provide excellent transport connectivity and easy access to supermarkets, restaurants, cafes, libraries, and entertainment hubs. Students often prefer these areas because they offer a balance between affordability and convenience.",
        "Those specifically looking for student accommodation near nottingham uni can visit the Nottingham Student Accommodation Page to find university-focused housing information and nearby student properties."
      ]
    },
    {
      title: "Why Students Choose University of Nottingham",
      content: [
        "The University of Nottingham offers students an excellent academic environment combined with the benefits of studying in a vibrant UK city. Apart from academics, students gain exposure to global career opportunities, networking events, internships, and multicultural experiences.",
        "Main reasons students choose Nottingham include:",
        ["Russell Group university status", "Strong research reputation", "Industry-focused courses", "Beautiful parkland campus", "Diverse student community"],
        "Because Nottingham is highly competitive for student housing, students should begin searching for student accommodation near university of nottingham as early as possible to secure the best options within their budget."
      ]
    },
    {
      title: "Conclusion",
      content: [
        "Whether you are researching the university of nottingham library, checking the university of nottingham acceptance rate, or searching for the best student accommodation near nottingham uni, the University of Nottingham offers students a high-quality educational and living experience.",
        "Planning your accommodation, finances, and university life in advance can help ensure a smooth and successful student journey in Nottingham."
      ]
    }
  ]

  return (
    <section className="university-info">
      <div className="university-info-container">
        <h2>University of Nottingham (UoN)</h2>

        {sections.map((section, index) => (
          <div key={index} className="info-section">
            <button className="section-toggle">
              {section.title}
              <img src="/expand-icon.png" alt="Expand" />
            </button>
            <div className="section-content">
              {section.content.map((paragraph, pIndex) => {
                if (Array.isArray(paragraph)) {
                  return (
                    <ul key={pIndex}>
                      {paragraph.map((item, iIndex) => (
                        <li key={iIndex}>{item}</li>
                      ))}
                    </ul>
                  )
                }
                return <p key={pIndex}>{paragraph}</p>
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UniversityInfo