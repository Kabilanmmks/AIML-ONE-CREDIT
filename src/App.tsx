import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="name">Kabilan M</h1>
          <div className="contact">
            <a href="tel:+918072123099">📞 +91 8072123099</a>
            <a href="mailto:kabilanmmks111@gmail.com">✉️ kabilanmmks111@gmail.com</a>
          </div>
        </div>
      </header>

      <main className="container">
        {/* Objective */}
        <section className="section">
          <h2>Objective</h2>
          <p>Motivated and adaptable Computer Science student specializing in AI & ML, seeking to apply strong technical and problem-solving skills in software development and intelligent systems. Passionate about building innovative solutions and contributing effectively to organizational growth.</p>
        </section>

        {/* Education */}
        <section className="section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>B.E. Computer Science & Engineering (AI & ML)</h3>
            <p className="meta">2023 – 2027 (Expected)</p>
            <p>K.S. Rangasamy College of Technology, Tiruchengode</p>
            <p className="highlight">CGPA: 7.6/10</p>
          </div>
          <div className="education-item">
            <h3>Higher Secondary School Graduation</h3>
            <p className="meta">March 2023</p>
            <p>Government Girls Higher Secondary School, Namakkal</p>
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>RetinaAIGuard – AR-Powered Diabetic Retinopathy Detection</h3>
            <ul>
              <li>Built an AI-based system to detect diabetic retinopathy using image processing.</li>
              <li>Applied edge detection and deep learning for identifying retinal abnormalities.</li>
              <li>Enabled AR-based visualization for improved diagnosis understanding.</li>
            </ul>
          </div>
          <div className="project-item">
            <h3>Safeguard AI (Assistant Developer)</h3>
            <ul>
              <li>Developed a vision-based harassment detection system using AI.</li>
              <li>Implemented real-time monitoring algorithms to enhance public safety.</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Technical</h4>
              <p>Python, SQL, Java, HTML, CSS, JavaScript, Machine Learning Algorithms</p>
            </div>
            <div className="skill-category">
              <h4>Languages</h4>
              <p>English, Tamil</p>
            </div>
            <div className="skill-category">
              <h4>Soft Skills</h4>
              <p>Adaptability, Team Collaboration, Leadership</p>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <p>Photo, Video & Document Editing (MS Office)</p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="section">
          <h2>Certifications</h2>
          <ul className="cert-list">
            <li>Google Cloud Generative AI Virtual Internship (AICTE & Eduskills)</li>
            <li>Infosys Certifications (Java and Python) and MATLAB Certification</li>
            <li>Oracle Certifications – AI Foundations Associate, DevOps Professional</li>
            <li>Published Contribution Certificate – Hope's Tapestry and ICT Hackathon 2025 Certification</li>
            <li>Srinivasa Ramanujan Mathematical Competition – ISTE Certification</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 Kabilan M | AI & ML Student</p>
      </footer>
    </div>
  )
}

export default App
