import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logo from './assets/logo.png'

const testimonials = [
  {
    quote:
      'Aspire Success NY gave us clarity and hope. They connected our family with the right supports almost immediately.',
    name: 'Marisol, Parent of a teen',
  },
  {
    quote:
      'Their care managers simplified every step and made sure I had the resources to stay on track.',
    name: 'Darren, Adult client',
  },
  {
    quote:
      'We felt truly heard. The specialist they matched for our son made a huge difference in his confidence.',
    name: 'Leah, Parent of a child',
  },
]

const services = [
  {
    title: 'Care Management',
    description: 'Personalized coordination that keeps your goals, appointments, and supports aligned.',
    link: '/care-management',
  },
  {
    title: 'Resource Access',
    description: 'Guidance through government programs and local resources that fit your needs.',
    link: '/government-programs',
  },
  {
    title: 'Specialist Placement',
    description: 'Hand-selected providers matched to your emotional, cognitive, or behavioral goals.',
    link: '/specialist-placement',
  },
]

const GovernmentProgramsPage = ({ onNavigateHome }) => {
  return (
    <div className="page service-page">
      <header className="service-hero">
        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Guidance for every stage</p>
            </div>
          </div>
          <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
            Back to Home
          </a>
        </nav>

        <div className="service-hero__content">
          <p className="eyebrow">Services resource-access</p>
          <h1>Accessing Vital Support: Simplifying Government Program Applications</h1>
          <p className="subhead">
            We specialize in funding guidance and qualification, making sure you can quickly secure the benefits and
            services you deserve.
          </p>
        </div>
      </header>

      <main className="service-content">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">The challenge</p>
            <h2>Applications should not delay crucial care</h2>
            <p className="section__lead">
              Applying for government-funded services can be time-consuming and confusing, leading to delays when you
              need support most. We streamline every step.
            </p>
          </div>
          <div className="service-highlight">
            <div className="pill">Clarity &amp; momentum</div>
            <p>
              From forms to follow-ups, we remove the guesswork so you can focus on your well-being while we keep your
              applications moving.
            </p>
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <p className="eyebrow">How we help</p>
            <h2>Hands-on assistance from start to approval</h2>
            <p className="section__lead">
              Our team provides documentation guidance, advocacy, and consistent communication to help you qualify for
              the financial and programmatic support you need.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="pill">Step-by-step</div>
              <h3>Application mapping</h3>
              <p>We outline the exact forms, timelines, and contacts for each program so nothing falls through.</p>
            </div>
            <div className="process-card">
              <div className="pill">Documentation</div>
              <h3>Evidence &amp; letters</h3>
              <p>We gather records, write supporting letters, and organize materials to strengthen your case.</p>
            </div>
            <div className="process-card">
              <div className="pill">Advocacy</div>
              <h3>Follow-through</h3>
              <p>We communicate with agencies, track status updates, and escalate when needed to keep things on track.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Programs we assist with</p>
            <h2>Connecting you to the right support</h2>
            <p className="section__lead">We focus on programs that open doors to critical services and funding.</p>
          </div>
          <ul className="list">
            <li>OPWDD: Office for People With Developmental Disabilities</li>
            <li>ABA: Applied Behavioral Analysis</li>
            <li>HCBS: Home and Community-Based Services</li>
            <li>Peer Support Services</li>
          </ul>
        </section>

        <section className="section">
          <div className="value-card">
            <h3>Ready to confirm your eligibility?</h3>
            <p>
              Do not miss out on the funding you deserve. Contact us to verify qualifications and start your application
              with confidence.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a className="cta" href="#" onClick={(event) => onNavigateHome(event, '#contact')}>
                Verify eligibility today
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Your guide to meaningful growth</p>
            </div>
          </div>
          <p className="footer__text">Connecting you with care, resources, and specialists that honor your journey.</p>
        </div>
        <div className="footer__columns">
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:555-123-4567">(555) 123-4567</a></li>
              <li><a href="mailto:hello@aspiresuccessny.com">hello@aspiresuccessny.com</a></li>
              <li>New York, NY</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#" onClick={(event) => onNavigateHome(event)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(event) => onNavigateHome(event, '#testimonials')}>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="socials">
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const CareManagementPage = ({ onNavigateHome }) => {
  return (
    <div className="page service-page">
      <header className="service-hero">
        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Guidance for every stage</p>
            </div>
          </div>
          <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
            Back to Home
          </a>
        </nav>

        <div className="service-hero__content">
          <p className="eyebrow">Services care-management </p>
          <h1>Expert Care Management: Finding the Right Path for Success</h1>
          <p className="subhead">
            Our core coordinating service ensures you have an advocate and partner who aligns every support with your
            goals from day one.
          </p>
        </div>
      </header>

      <main className="service-content">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">What is a Care Manager?</p>
            <h2>Dedicated coordinator and advocate</h2>
            <p className="section__lead">
              We act as your dedicated coordinator and advocate. Navigating behavioral health and support systems can
              be complex—we ensure you never navigate it alone.
            </p>
          </div>
          <div className="service-highlight">
            <div className="pill">Personalized &amp; proactive guidance</div>
            <p>
              A care manager listens closely, clarifies priorities, and maps out the services that will make the biggest
              difference for you or your family.
            </p>
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <p className="eyebrow">Our 3-Step Process</p>
            <h2>Structured support that keeps you moving forward</h2>
            <p className="section__lead">
              Every plan is tailored, but our process always centers on clarity, measurable goals, and immediate action.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="pill">Step 1</div>
              <h3>Comprehensive Assessment</h3>
              <p>
                A thorough evaluation to understand unique emotional, cognitive, and behavioral challenges. We consider
                current supports, strengths, and barriers.
              </p>
            </div>
            <div className="process-card">
              <div className="pill">Step 2</div>
              <h3>Strategic Planning</h3>
              <p>
                We develop a personalized success plan with measurable goals and targeted intervention strategies,
                aligning with timelines that work for you.
              </p>
            </div>
            <div className="process-card">
              <div className="pill">Step 3</div>
              <h3>Expert Referral &amp; Connection</h3>
              <p>
                We connect you immediately with the right licensed therapists, clinicians, and support services tailored
                to your specific needs.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="value-card">
            <h3>Why it matters</h3>
            <p>
              We save you time and stress by ensuring the most effective support is in place from day one. With one
              consistent point of contact, you avoid delays and stay focused on progress.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Your guide to meaningful growth</p>
            </div>
          </div>
          <p className="footer__text">Connecting you with care, resources, and specialists that honor your journey.</p>
        </div>
        <div className="footer__columns">
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:555-123-4567">(555) 123-4567</a></li>
              <li><a href="mailto:hello@aspiresuccessny.com">hello@aspiresuccessny.com</a></li>
              <li>New York, NY</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#" onClick={(event) => onNavigateHome(event)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(event) => onNavigateHome(event, '#testimonials')}>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="socials">
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [route, setRoute] = useState(window.location.pathname)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo(0, 0)
  }

  const handleNavigateHome = (event, hash) => {
    event.preventDefault()
    navigate('/')

    if (hash) {
      setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }

  if (route === '/care-management') {
    return <CareManagementPage onNavigateHome={handleNavigateHome} />
  }

  if (route === '/government-programs') {
    return <GovernmentProgramsPage onNavigateHome={handleNavigateHome} />
  }

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Guidance for every stage</p>
            </div>
          </div>
          <a className="cta cta--ghost" href="#contact">
            Contact
          </a>
        </nav>

        <div className="hero__content">
          <div className="hero__text">
            <p className="eyebrow">Welcome &amp; Overview</p>
            <h1>Your Partner in Navigating Emotional, Cognitive, &amp; Behavioral Growth.</h1>
            <p className="subhead">
              We simplify the path to success for children, teens, and adults by connecting you with the right
              care and resources.
            </p>
            <div className="hero__actions">
              <a className="cta" href="#consultation">
                Start Your Free Consultation
              </a>
              <a className="link" href="#services">
                Explore our services
              </a>
            </div>
          </div>
          <div className="hero__card">
            <h3>Support at every step</h3>
            <ul>
              <li>Dedicated care managers who listen and guide.</li>
              <li>Clear pathways to resources and funding.</li>
              <li>Trusted specialists tailored to your goals.</li>
            </ul>
            <div className="pill">Aligned with your vision of success</div>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="consultation">
          <div className="section__header">
            <p className="eyebrow">Who We Help</p>
            <h2>Care designed for children, teens, and adults.</h2>
            <p className="section__lead">
              Whether you are navigating emotional, cognitive, or behavioral challenges, we deliver guidance and
              advocacy that meets you where you are.
            </p>
          </div>
          <div className="pill-grid">
            <div className="pill-card">Children</div>
            <div className="pill-card">Teens</div>
            <div className="pill-card">Adults</div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section__header">
            <p className="eyebrow">Our Core Services</p>
            <h2>Quick snapshot of how we serve you.</h2>
            <p className="section__lead">Discover the guidance, access, and expert support that simplify your next steps.</p>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <a
                key={service.title}
                className="card"
                href={service.link}
                onClick={(event) => {
                  event.preventDefault()
                  navigate(service.link)
                }}
              >
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="card__link">Learn more →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section section--muted" id="testimonials">
          <div className="section__header">
            <p className="eyebrow">Testimonials</p>
            <h2>Stories of confidence and progress.</h2>
            <p className="section__lead">Real voices from families and individuals we have supported.</p>
          </div>
          <div className="testimonial">
            <p className="testimonial__quote">“{testimonials[activeTestimonial].quote}”</p>
            <p className="testimonial__name">{testimonials[activeTestimonial].name}</p>
            <div className="dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'dot--active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <div className="brand">
            <img src={logo} alt="Aspire Success NY logo" className="brand__logo" />
            <div>
              <p className="brand__name">Aspire Success NY</p>
              <p className="brand__tagline">Your guide to meaningful growth</p>
            </div>
          </div>
          <p className="footer__text">Connecting you with care, resources, and specialists that honor your journey.</p>
        </div>
        <div className="footer__columns">
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:555-123-4567">(555) 123-4567</a></li>
              <li><a href="mailto:hello@aspiresuccessny.com">hello@aspiresuccessny.com</a></li>
              <li>New York, NY</li>
            </ul>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#consultation">Who We Help</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <div className="socials">
              <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
                <FaFacebookF aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
                <FaInstagram aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
