import React from 'react';

function AboutMe() {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <div className='row'>
        <div className='row1'>
          <img src="/images/me.png" alt="" className='img'/>
        </div>

        <div className='row2'>
          <p className="am">
            Hi, I'm <span className="font-semibold">Abdul Travis N. Filog</span>, a 20-year-old student currently pursuing a degree in <span className="font-semibold">Network and Security</span> at the <span className="font-semibold">University of the Cordilleras</span>. 
            I was born and raised in Bontoc, Mountain Province a place that taught me the importance of resilience, curiosity, and continuous learning.
          </p>
          <p className="am">
            I'm deeply passionate about cybersecurity, network architecture, and protecting digital systems from threats in an increasingly connected world. 
            I enjoy exploring how systems communicate, how vulnerabilities are discovered, and how we can build safer, and more resilient infrastructures.
          </p>
          <p className="am">
            Outside of academics, I enjoy playing video games, reading, and listening to podcasts especially those about tech and security. 
            I'm always eager to stay updated on the latest trends in IT and cybersecurity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;