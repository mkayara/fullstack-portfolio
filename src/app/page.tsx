const technologies = [
  {
    number: "01",
    name: "Next.js",
    description:
      "A React framework for building fast, structured web experiences with the App Router.",
    label: "Application framework",
  },
  {
    number: "02",
    name: "Tailwind CSS",
    description:
      "A utility-first approach to responsive layouts, visual systems, and polished interfaces.",
    label: "Interface styling",
  },
  {
    number: "03",
    name: "Firebase",
    description:
      "An introduction to the cloud platform and the backend services available to web apps.",
    label: "Cloud platform",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Fullstack portfolio home">
          <span className="wordmark-mark">F.</span>
          <span>FULLSTACK PORTFOLIO</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a className="transition-colors duration-200 hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="#stack">The stack</a>
          <a className="transition-colors duration-200 hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="#workshop">Workshop</a>
          <a className="nav-cta focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="https://github.com/mkayara">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            A hands-on learning milestone
          </p>
          <h1>
            Ideas into
            <br />
            <span>web experiences.</span>
          </h1>
          <p className="hero-description">
            A portfolio space inspired by a day of building, exploring, and
            connecting the pieces of modern full-stack web development.
          </p>
          <div className="hero-actions">
            <a className="button button-primary inline-flex transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="#workshop">
              Explore the workshop <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link transition-colors duration-200 hover:text-lime-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300" href="#stack">
              Meet the stack <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>APR 26, 2024</span>
            <span className="meta-divider" />
            <span>TAYLOR&apos;S UNIVERSITY</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="A preview of a web interface in progress">
          <div className="visual-orbit orbit-outer" />
          <div className="visual-orbit orbit-inner" />
          <div className="visual-glow" />
          <div className="code-card">
            <div className="code-card-top">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>portfolio.tsx</span>
              <span className="code-live">LIVE PREVIEW</span>
            </div>
            <div className="code-lines" aria-hidden="true">
              <p>
                <span className="code-purple">const</span> portfolio ={" "}
                <span className="code-orange">{"{"}</span>
              </p>
              <p className="indent">
                stack: <span className="code-green">&quot;Next.js&quot;</span>,
              </p>
              <p className="indent">
                style: <span className="code-green">&quot;Tailwind CSS&quot;</span>,
              </p>
              <p className="indent">
                cloud: <span className="code-green">&quot;Firebase&quot;</span>,
              </p>
              <p className="indent">
                curiosity: <span className="code-blue">true</span>
              </p>
              <p>
                <span className="code-orange">{"}"}</span>;
              </p>
            </div>
            <div className="preview-strip">
              <span className="preview-icon">✳</span>
              <span>From first component to full stack</span>
              <span className="preview-arrow">↗</span>
            </div>
          </div>
          <span className="visual-caption">DESIGN · BUILD · LEARN</span>
        </div>

        <a className="scroll-cue" href="#stack">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="stack-section section-shell" id="stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — THE TOOLKIT</p>
            <h2>
              Three tools.
              <br />
              <span>One connected idea.</span>
            </h2>
          </div>
          <p className="section-intro">
            The workshop introduced a modern web stack from the interface to
            the cloud, with hands-on experience exploring how the pieces fit
            together.
          </p>
        </div>

        <div className="stack-grid">
          {technologies.map((technology) => (
            <article className="stack-card group transition duration-200 hover:-translate-y-1" key={technology.name}>
              <div className="stack-card-top">
                <span className="stack-number">{technology.number}</span>
                <span className="stack-symbol" aria-hidden="true">
                  {technology.number === "01"
                    ? "⌘"
                    : technology.number === "02"
                      ? "✳"
                      : "◈"}
                </span>
              </div>
              <p className="stack-label">{technology.label}</p>
              <h3>{technology.name}</h3>
              <p className="stack-description">{technology.description}</p>
              <span className="card-bottom-line" />
            </article>
          ))}
        </div>
        <p className="stack-note">
          This showcase does not connect to a live Firebase project. No
          Firebase SDK, credentials, or backend service are required.
        </p>
      </section>

      <section className="workshop-section" id="workshop">
        <div className="workshop-inner section-shell">
          <div className="workshop-copy">
            <p className="eyebrow">
              <span className="eyebrow-accent">02</span> — THE EXPERIENCE
            </p>
            <h2>
              A day that
              <br />
              <span>opened new doors.</span>
            </h2>
            <p>
              A hands-on introduction to the full-stack technology behind
              modern web development, turning new concepts into practical
              experience.
            </p>
            <a
              className="button button-outline"
              href="https://github.com/mkayara"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>

          <article className="event-card">
            <div className="event-card-top">
              <span className="event-kicker">WORKSHOP MILESTONE</span>
              <span className="event-sparkle" aria-hidden="true">
                ✳
              </span>
            </div>
            <h3>Portfolio Mastery</h3>
            <p className="event-subtitle">Full Stack Web Development Workshop</p>
            <div className="event-rule" />
            <div className="event-detail">
              <span>DATE</span>
              <strong>April 26, 2024</strong>
            </div>
            <div className="event-detail">
              <span>LOCATION</span>
              <strong>Taylor&apos;s University</strong>
            </div>
            <div className="event-rule" />
            <p className="event-stack">
              NEXT.JS <i /> TAILWIND CSS <i /> FIREBASE
            </p>
          </article>
        </div>
      </section>

      <section className="closing-section section-shell">
        <p className="eyebrow">THE NEXT CHAPTER</p>
        <h2>
          Keep building.
          <br />
          <span>Keep getting curious.</span>
        </h2>
        <a
          className="button button-primary"
          href="https://github.com/mkayara"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer section-shell">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">F.</span>
          <span>FULLSTACK PORTFOLIO</span>
        </a>
        <p>Built to celebrate a day of learning and making.</p>
        <a className="back-to-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
