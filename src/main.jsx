import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Sparkles, ExternalLink, MapPin } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    name: 'PrepAI',
    type: 'AI · Interview Practice',
    description: 'An interview-practice platform where users can answer questions and receive AI-powered feedback through a backend API.',
    stack: ['React', 'JavaScript', 'API Integration'],
    accent: 'lavender',
    link: '',
  },
  {
    number: '02',
    name: 'Diabetes Prediction System',
    type: 'Machine Learning · Web App',
    description: 'A web application that connects a React interface to a Flask API and a trained machine-learning model to return predictions from user inputs.',
    stack: ['React', 'Python', 'Flask', 'Machine Learning'],
    accent: 'mint',
    link: '',
  },
  {
    number: '03',
    name: 'Developer Portfolio',
    type: 'Personal Website',
    description: 'A responsive personal website to introduce my skills, share selected projects, and make it easy for recruiters and clients to contact me.',
    stack: ['React', 'CSS', 'Responsive Design'],
    accent: 'peach',
    link: '',
  },
];

const skills = [
  { name: 'HTML5', group: 'Frontend' }, { name: 'CSS3', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' }, { name: 'React.js', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' }, { name: 'Responsive UI', group: 'Frontend' },
  { name: 'REST API Integration', group: 'Backend basics' }, { name: 'Node.js / Express', group: 'Backend basics' },
  { name: 'Python / Flask', group: 'Backend basics' }, { name: 'Git & GitHub', group: 'Tools' },
  { name: 'Figma', group: 'Design' }, { name: 'Java & DSA', group: 'Learning' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = 'your.email@example.com'; // Replace with your real email before publishing.
  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Priya home"><span className="brand-mark">P.</span><span>PRIYA<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']].map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>Building thoughtful<br /><span className="gradient-text">digital experiences.</span></h1>
            <p className="hero-subtitle">Hi, I'm <strong>Priya</strong> — a Computer Science Engineering student focused on frontend development, responsive interfaces, and learning how great products are built.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Get in touch <ArrowDownRight size={17} /></a></div>
            <div className="hero-meta"><span><MapPin size={15} /> Bhopal, India</span><span className="meta-separator" /><span>Frontend Development · React</span></div>
          </div>
          <div className="hero-art" aria-label="Decorative developer illustration">
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-card code-card"><div className="window-dots"><i /><i /><i /></div><div className="code-lines"><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</div><div className="code-lines indent"><span className="code-pink">name</span>: <span className="code-green">'Priya'</span>,</div><div className="code-lines indent"><span className="code-pink">focus</span>: <span className="code-green">'Frontend'</span>,</div><div className="code-lines indent"><span className="code-pink">curious</span>: <span className="code-orange">true</span></div><div className="code-lines">{'}'};</div><div className="code-cursor" /></div>
            <div className="floating-chip chip-react"><span>⚛</span> React.js</div><div className="floating-chip chip-css"><span>✳</span> CSS & UI</div><div className="art-caption"><Sparkles size={15} /> Learn. Build. Improve.</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-grid"><h2>Curious by nature.<br /><span className="muted-heading">Developer by practice.</span></h2><div className="about-copy"><p>I'm a final-year B.Tech Computer Science Engineering student at Prestige Institute of Management and Research, Bhopal. I enjoy turning ideas into clean, accessible, and responsive web interfaces.</p><p>I've been building with React and JavaScript, exploring backend APIs, and learning through hands-on projects. Right now, I'm strengthening my Java, data structures, and problem-solving fundamentals while looking for opportunities to contribute and grow.</p><div className="about-facts"><div><strong>03</strong><span>Featured projects</span></div><div><strong>12+</strong><span>Tools & technologies</span></div><div><strong>∞</strong><span>Curiosity to learn</span></div></div></div></div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-kicker">02 / MY TOOLKIT</div><div className="section-heading-row"><h2>Skills I'm building<br /><span className="muted-heading">and using every day.</span></h2><p>A practical toolkit for creating interfaces, connecting APIs, and growing into a well-rounded developer.</p></div>
          <div className="skill-groups"><div className="skill-group"><div className="skill-group-title"><Code2 size={18} /> Frontend</div><div className="skill-list">{skills.filter(s => s.group === 'Frontend').map(s => <span className="skill-pill" key={s.name}>{s.name}</span>)}</div></div><div className="skill-group"><div className="skill-group-title"><Layers3 size={18} /> Backend & tools</div><div className="skill-list">{skills.filter(s => ['Backend basics', 'Tools'].includes(s.group)).map(s => <span className="skill-pill" key={s.name}>{s.name}</span>)}</div></div><div className="skill-group"><div className="skill-group-title"><Sparkles size={18} /> Design & learning</div><div className="skill-list">{skills.filter(s => ['Design', 'Learning'].includes(s.group)).map(s => <span className="skill-pill" key={s.name}>{s.name}</span>)}</div></div></div>
          <p className="small-note">Skills listed at different levels of experience. I keep learning through practice and projects.</p>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading-row"><h2>Projects with<br /><span className="muted-heading">purpose and curiosity.</span></h2><p>A few projects that reflect what I've been learning and building. More work will be added as it develops.</p></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon"><ArrowUpRight size={19} /></span></div><div className="project-visual"><div className="visual-window"><div className="visual-bar"><i /><i /><i /><span>{project.name}</span></div>{project.number === '01' ? <div className="visual-content"><div className="visual-label">INTERVIEW PRACTICE</div><div className="visual-title">Prepare with<br />confidence<span>.</span></div><div className="visual-button">Start practicing ↗</div><div className="visual-mini">AI feedback · Skill growth</div></div> : project.number === '02' ? <div className="visual-content prediction"><div className="visual-label">PREDICTION DASHBOARD</div><div className="visual-title">Health insights<span>.</span></div><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="visual-mini">Input data → Model → Result</div></div> : <div className="visual-content"><div className="visual-label">PERSONAL WEBSITE</div><div className="visual-title">Hello, I'm<br />Priya<span>.</span></div><div className="visual-mini">About · Work · Contact</div></div>}</div></div><div className="project-type">{project.type}</div><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-footer"><span>Case study / overview</span>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={17} /></a> : <span className="in-progress">In progress</span>}</div></article>)}</div>
        </section>

        <section className="contact section-wrap section-block" id="contact"><div className="contact-panel"><div className="section-kicker">04 / LET'S CONNECT</div><h2>Have a project<br />in mind? <span className="gradient-text">Let's talk.</span></h2><p>I'm interested in entry-level opportunities, internships, and small projects where I can contribute, learn, and build useful things.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}><Mail size={17} /> {copied ? 'Email copied!' : 'Copy email address'}</button><a className="button button-outline" href="mailto:your.email@example.com">Send an email <ArrowUpRight size={17} /></a></div><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a></div><p className="replace-note">Before publishing: replace the placeholder email and social links with your real profile URLs.</p></div></section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">P.</span><span>PRIYA<span className="brand-dot">.</span></span></a><span>Designed & built with care.</span><a href="#home">Back to top ↑</a><span className="copyright">© {new Date().getFullYear()} Priya</span></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
