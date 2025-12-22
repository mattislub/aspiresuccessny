import { useEffect, useState } from 'react'
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

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

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
              <a key={service.title} className="card" href={service.link}>
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
              <a href="https://www.facebook.com" aria-label="Facebook">
                <span></span>
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <span></span>
              </a>
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
