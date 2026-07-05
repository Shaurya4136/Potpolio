import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  X
} from "lucide-react";
import {
  achievements,
  education,
  experience,
  metrics,
  profile,
  projects,
  skillGroups
} from "./data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [formState, setFormState] = useState({ status: "idle", message: "" });

  const featuredStack = useMemo(
    () => ["MongoDB", "Express", "React", "Node", "JWT", "REST APIs"],
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ status: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send message right now.");
      }

      setForm(initialForm);
      setFormState({
        status: "success",
        message: "Message saved. Shaurya can follow up from the inbox."
      });
    } catch (error) {
      setFormState({
        status: "error",
        message: error.message
      });
    }
  };

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Shaurya Pandey home">
          <span>SP</span>
          <strong>Shaurya Pandey</strong>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-content">
            <div className="eyebrow">
              <Sparkles size={16} />
              Available for entry-level MERN and full-stack roles
            </div>
            <h1>{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-copy">{profile.summary}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <Code2 size={18} />
                View projects
              </a>
              <a className="button button-secondary" href={profile.links.resume} download>
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="quick-links" aria-label="Profile links">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                Email
              </a>
              <span>
                <MapPin size={18} />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="hero-visual" aria-label="MERN portfolio preview">
            <img src="/images/workspace-preview.png" alt="Dashboard preview for MERN portfolio projects" />
          </div>
        </section>

        <section className="metrics-strip" aria-label="Portfolio highlights">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-item">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading">
            <span>About</span>
            <h2>MERN developer with practical delivery experience.</h2>
          </div>
          <div className="about-grid">
            <p>{profile.focus}</p>
            <div className="capability-list">
              <div>
                <Server size={20} />
                <span>REST APIs, authentication, and backend structure</span>
              </div>
              <div>
                <ShieldCheck size={20} />
                <span>JWT auth, RBAC, validation, and secure access flows</span>
              </div>
              <div>
                <Database size={20} />
                <span>MongoDB data models, CRUD workflows, and deployment readiness</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="section-heading">
            <span>Skills</span>
            <h2>Focused on the MERN stack and real application workflows.</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading section-heading-wide">
            <div>
              <span>Featured Work</span>
              <h2>Five projects selected for full-stack signal.</h2>
            </div>
            <div className="stack-row" aria-label="Core stack">
              {featuredStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <img src={project.image} alt={`${project.name} project preview`} />
                <div className="project-body">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list compact">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <CheckCircle2 size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Training, mentoring, and full-stack development work.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-icon">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <p>{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-column-section">
          <div id="education" className="panel-section">
            <div className="section-heading">
              <span>Education</span>
              <h2>Academic foundation.</h2>
            </div>
            <div className="simple-list">
              {education.map((item) => (
                <article key={item.title}>
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.institution}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="panel-section">
            <div className="section-heading">
              <span>Certifications</span>
              <h2>Awards and proof points.</h2>
            </div>
            <div className="achievement-list">
              {achievements.map((item) => (
                <div key={item}>
                  <Award size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-copy">
            <span>Contact</span>
            <h2>Send a project, role, or collaboration message.</h2>
            <p>
              Share the role, project context, or collaboration details and Shaurya
              can follow up directly by email.
            </p>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <Github size={18} />
                github.com/Shaurya4136
              </a>
              <a href={profile.links.npm} target="_blank" rel="noreferrer">
                <PackageCheck size={18} />
                NPM package
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                minLength={2}
                maxLength={80}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                maxLength={120}
                required
              />
            </label>
            <label>
              Subject
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                maxLength={120}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                minLength={10}
                maxLength={2000}
                required
              />
            </label>
            <button className="button button-primary" type="submit" disabled={formState.status === "loading"}>
              <Send size={18} />
              {formState.status === "loading" ? "Sending" : "Send message"}
            </button>
            {formState.message && (
              <p className={`form-status ${formState.status}`} role="status">
                {formState.message}
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>Shaurya Pandey</span>
        <div>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a href={profile.links.resume} download>
            <ExternalLink size={18} />
            Resume
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
