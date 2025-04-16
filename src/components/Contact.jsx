import React from 'react'

function Contact() {
  return (
    <div className="max-w-xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="mb-6 text-lg ">
      Interested in connecting? Feel free to reach out to me through any of the platforms below!
    </p>

    <div className="flex flex-col gap-4 items-center">
      <a href="mailto:filogabdultravis@gmail.com" className="link">
        📧 filogabdultravis@gmail.com
      </a>
      <a href="https://github.com/Filog-AT" target="_blank" rel="noopener noreferrer" className="link">
        💻 GitHub
      </a>
    </div>
  </div>
  )
}

export default Contact
