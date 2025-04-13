import React from 'react'

function Education() {
  return (
  <div className="educ">
    <h2 className="text-3xl font-bold mb-6">Education</h2>

    <div className="sc">
      <div className='sc1'>
        <h3>University of the Cordilleras</h3>
        <p>Baguio City | 2023 – Present</p>
        <p>
          Currently pursuing a degree in <span className="font-medium">Bachelor of Science in Network and Security</span>. 
          Focused on cybersecurity fundamentals, network infrastructure, ethical hacking, and systems security. Actively involved in hands-on labs and simulation environments.
        </p>
      </div>
      <br />
      <div className='sc1'>
        <h3>Saint Vincent High School</h3>
        <p>Bontoc, Mountain Province | Graduated: 2023</p>
        <p>
          Completed Senior High School with a strand in <span className="font-medium">HUMSS (Humanities and Social Sciences)</span>, 
        </p>
      </div>
    </div>
  </div>
  )
}

export default Education
