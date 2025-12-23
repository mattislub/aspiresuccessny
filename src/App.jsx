import { useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
  FiCompass,
  FiHeart,
  FiLayers,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTarget,
  FiUsers,
} from 'react-icons/fi'
import logo from './assets/logo.png'

const values = [
  {
    title: 'Compassion',
    description: 'We lead with empathy, honoring every story and celebrating meaningful wins.',
    icon: FiHeart,
  },
  {
    title: 'Integrity',
    description: 'Transparent communication and follow-through build trust with families and partners.',
    icon: FiShield,
  },
  {
    title: 'Results-Driven',
    description: 'We set clear goals, track progress, and adjust quickly to keep momentum strong.',
    icon: FiTarget,
  },
  {
    title: 'Advocacy',
    description: 'We elevate your voice, ensuring resources and supports align with your needs.',
    icon: FiUsers,
  },
]

const teamMembers = [
  {
    name: 'Jordan Ellis',
    role: 'Founder & Lead Care Strategist',
    bio: 'Drives vision and partnerships so every family has a clear roadmap and trusted support team.',
  },
  {
    name: 'Taylor Morgan',
    role: 'Care Coordination Director',
    bio: 'Oversees assessments, action plans, and smooth communication between providers and families.',
  },
  {
    name: 'Riley Chen',
    role: 'Community Resource Specialist',
    bio: 'Connects clients to funding, local programs, and advocacy networks that keep progress moving.',
  },
]

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
    icon: FiCompass,
  },
  {
    title: 'Resource Access',
    description: 'Guidance through government programs and local resources that fit your needs.',
    link: '/government-programs',
    icon: FiLayers,
  },
  {
    title: 'Qualified Specialist Placement',
    description: 'Hand-selected providers matched to your emotional, cognitive, or behavioral goals.',
    link: '/specialist-placement',
    icon: FiBookOpen,
  },
]

const heroHighlights = [
  {
    title: 'Personalized navigation',
    copy: 'Dedicated care managers map your path and remove bottlenecks.',
    icon: FiCompass,
  },
  {
    title: 'Serious advocacy',
    copy: 'We coordinate with clinicians, schools, and agencies so you feel supported.',
    icon: FiShield,
  },
  {
    title: 'Measurable results',
    copy: 'Clear milestones with ongoing check-ins to keep momentum steady.',
    icon: FiCheckCircle,
  },
]

const ContactPage = ({ onNavigateHome }) => {
  return (
    <div className="page contact-page">
      <header className="contact-hero">
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

        <div className="contact-hero__content">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Let us know how we can support you.</h1>
            <p className="subhead">
              Share what you need and our care team will reach out within one business day to guide you toward the right
              services and specialists.
            </p>
            <div className="pill">We respond within 1 business day</div>
          </div>
        </div>
      </header>

      <main className="contact-content">
        <section className="section">
          <div className="contact-grid">
            <div className="contact-card">
              <h2>Send us a message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your needs, goals, or questions"
                    required
                  />
                </div>
                <button className="cta" type="submit">Submit</button>
              </form>
            </div>

            <div className="contact-details">
              <div className="contact-detail-card">
                <h3>Reach us directly</h3>
                <ul className="contact-info">
                  <li className="contact-info__item">
                    <span className="icon-circle icon-circle--muted">
                      <FiPhone aria-hidden="true" />
                    </span>
                    <div>
                      <span>Phone</span>
                      <a href="tel:555-123-4567">(555) 123-4567</a>
                    </div>
                  </li>
                  <li className="contact-info__item">
                    <span className="icon-circle icon-circle--muted">
                      <FiMail aria-hidden="true" />
                    </span>
                    <div>
                      <span>Email</span>
                      <a href="mailto:hello@aspiresuccessny.com">hello@aspiresuccessny.com</a>
                    </div>
                  </li>
                  <li className="contact-info__item">
                    <span className="icon-circle icon-circle--muted">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <div>
                      <span>Address</span>
                      <p>123 Fifth Avenue, New York, NY 10010</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-map">
                <iframe
                  title="Aspire Success NY location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.844467419765!2d-73.99237802357211!3d40.73997917139021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18c3e6cb%3A0xe4b78a3db2e9fb1!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010011!5e0!3m2!1sen!2sus!4v1715463243522!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
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
                <a href="#" onClick={onNavigateHome}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(event) => onNavigateHome(event, '#services')}>
                  Services
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

const AboutPage = ({ onNavigateHome, onNavigate }) => {
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
          <div className="nav__actions">
            <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
              Back to Home
            </a>
            <a className="cta" href="#contact" onClick={(event) => onNavigate(event, '/#contact')}>
              Contact
            </a>
          </div>
        </nav>

        <div className="service-hero__content">
          <p className="eyebrow">About Aspire Success NY</p>
          <h1>Our Story, Mission, and the People Championing Your Growth</h1>
          <p className="subhead">
            We exist to bridge gaps in care so individuals and families facing emotional, cognitive, and behavioral
            challenges get coordinated, compassionate support.
          </p>
        </div>
      </header>

      <main className="service-content about">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Our Mission</p>
            <h2>Empowering every step forward</h2>
            <p className="section__lead">
              We empower individuals by providing clear direction, expert care coordination, and access to essential
              resources that make meaningful growth possible.
            </p>
          </div>
          <div className="about-highlight">
            <div className="pill">Mission-driven</div>
            <p>
              From the first conversation, we focus on listening and translating needs into an actionable plan. Our
              coordination ensures therapies, specialists, and funding align so you can focus on progress, not
              logistics.
            </p>
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <p className="eyebrow">Why we were founded</p>
            <h2>Closing the gap between needs and resources</h2>
            <p className="section__lead">
              Our team saw families struggling to access the right support despite their determination. Aspire Success NY
              was founded to be the advocate and organizer who makes sure no step is missed.
            </p>
          </div>
          <div className="story-grid">
            <div className="story-card">
              <h3>Built on lived experience</h3>
              <p>
                We have walked beside parents, guardians, and adults who needed a guide through complex systems. That
                empathy shapes how we coordinate care and communicate every milestone.
              </p>
            </div>
            <div className="story-card">
              <h3>Committed to advocacy</h3>
              <p>
                We partner with providers, schools, and community programs to keep the circle of support connected,
                responsive, and focused on measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Our values</p>
            <h2>The principles guiding every decision</h2>
            <p className="section__lead">These values shape how we show up for you and advocate on your behalf.</p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card value-card--light">
                <div className="value-card__icon">
                  <value.icon aria-hidden="true" />
                </div>
                <div>
                  <p className="value-card__title">{value.title}</p>
                  <p>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <p className="eyebrow">Meet our team</p>
            <h2>People dedicated to your success</h2>
            <p className="section__lead">
              Each team member brings expertise in care coordination, community resources, and advocacy to guide your
              journey.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-photo" aria-hidden="true" />
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="value-card">
            <h3>Ready to learn how we can help?</h3>
            <p>
              Share your goals and challenges, and we will design a coordinated plan that connects you with the right
              resources and specialists.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a className="cta" href="#" onClick={(event) => onNavigate(event, '/#contact')}>
                Talk with our team
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
                <a href="#" onClick={(event) => onNavigate(event, '/about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(event) => onNavigateHome(event, '#testimonials')}>
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

const SpecialistPlacementPage = ({ onNavigateHome, onNavigate }) => {
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
          <div className="nav__actions">
            <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
              Back to Home
            </a>
            <a className="cta" href="#" onClick={(event) => onNavigate(event, '/about')}>
              About
            </a>
          </div>
        </nav>

        <div className="service-hero__content">
          <p className="eyebrow">Services specialist-placement</p>
          <h1>Building Your Support Team: Connecting You with Qualified Personnel</h1>
          <p className="subhead">
            We source, vet, and match skilled professionals to fit your care needs, goals, and personality so you feel
            supported from day one.
          </p>
        </div>
      </header>

      <main className="service-content">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Our mission</p>
            <h2>Every great plan needs the right people</h2>
            <p className="section__lead">
              A comprehensive care plan requires skilled, dedicated personnel to implement the work. We bring together
              the professionals whose expertise and approach align with your needs and personality.
            </p>
          </div>
          <div className="service-highlight">
            <div className="pill">Purpose-built teams</div>
            <p>
              From the first conversation to the final placement, we prioritize clear expectations, collaborative
              communication, and a culture of respect that lets support staff do their best work for you.
            </p>
          </div>
        </section>

        <section className="section section--muted">
          <div className="section__header">
            <p className="eyebrow">Roles we place</p>
            <h2>Matching the right expertise to your environment</h2>
            <p className="section__lead">We recruit with intention so every role directly advances your goals.</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="pill">DSPs</div>
              <h3>Direct Support Professionals</h3>
              <p>Providing direct, hands-on support for daily living, personal goals, and independence.</p>
            </div>
            <div className="process-card">
              <div className="pill">Para-Professionals</div>
              <h3>Para-Professionals</h3>
              <p>Assistance in educational or community settings with patience, consistency, and skill.</p>
            </div>
            <div className="process-card">
              <div className="pill">Peer Support</div>
              <h3>Peer Support Specialists</h3>
              <p>Non-clinical emotional support from team members with lived experience you can relate to.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Our vetting process</p>
            <h2>Quality, safety, and fit come first</h2>
            <p className="section__lead">
              We are committed to reliable, caring placements. Every professional is screened for credentials, verified
              through background checks, and matched to your goals and preferences.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="pill">Quality</div>
              <h3>Credential verification</h3>
              <p>Licensure checks, references, and experience reviews ensure we only present qualified candidates.</p>
            </div>
            <div className="process-card">
              <div className="pill">Safety</div>
              <h3>Background screening</h3>
              <p>Comprehensive background checks and interviews confirm professionalism, reliability, and readiness.</p>
            </div>
            <div className="process-card">
              <div className="pill">Alignment</div>
              <h3>Personalized matching</h3>
              <p>We factor communication style, personality fit, and scheduling needs to set up lasting success.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="value-card">
            <h3>Ready to build your support team?</h3>
            <p>
              Tell us about your goals, daily routines, and what a great partnership looks like. We will curate a shortlist
              of qualified specialists who feel like the right fit.
            </p>
            <div style={{ marginTop: '16px' }}>
              <a className="cta" href="#" onClick={(event) => onNavigateHome(event, '#contact')}>
                Start a placement request
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
                <a href="#" onClick={(event) => onNavigate(event, '/about')}>
                  About
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

const GovernmentProgramsPage = ({ onNavigateHome, onNavigate }) => {
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
          <div className="nav__actions">
            <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
              Back to Home
            </a>
            <a className="cta" href="#" onClick={(event) => onNavigate(event, '/about')}>
              About
            </a>
          </div>
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
                <a href="#" onClick={(event) => onNavigate(event, '/about')}>
                  About
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

const CareManagementPage = ({ onNavigateHome, onNavigate }) => {
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
          <div className="nav__actions">
            <a className="cta cta--ghost" href="#" onClick={onNavigateHome}>
              Back to Home
            </a>
            <a className="cta" href="#" onClick={(event) => onNavigate(event, '/about')}>
              About
            </a>
          </div>
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
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false)

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

  useEffect(() => {
    document.body.style.overflow = isServicesModalOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isServicesModalOpen])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setRoute(path)
    window.scrollTo(0, 0)
  }

  const handleNavigate = (event, path) => {
    event.preventDefault()
    const [pathname, hash] = path.split('#')

    navigate(pathname || '/')

    if (hash) {
      setTimeout(() => {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
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

  const handleNavigateContact = (event) => {
    event.preventDefault()
    navigate('/contact')
  }

  if (route === '/contact') {
    return <ContactPage onNavigateHome={handleNavigateHome} />
  }

  if (route === '/care-management') {
    return <CareManagementPage onNavigateHome={handleNavigateHome} onNavigate={handleNavigate} />
  }

  if (route === '/specialist-placement') {
    return <SpecialistPlacementPage onNavigateHome={handleNavigateHome} onNavigate={handleNavigate} />
  }

  if (route === '/government-programs') {
    return <GovernmentProgramsPage onNavigateHome={handleNavigateHome} onNavigate={handleNavigate} />
  }

  if (route === '/about') {
    return <AboutPage onNavigateHome={handleNavigateHome} onNavigate={handleNavigate} />
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
          <a className="cta cta--ghost" href="/contact" onClick={handleNavigateContact}>
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
              <button className="link link--button" type="button" onClick={() => setIsServicesModalOpen(true)}>
                Explore our services
              </button>
            </div>
            <div className="hero__meta">
              <div className="pill">Coordinated care without the noise</div>
              <div className="pill pill--outline">Serious advocacy &bull; Clear follow-through</div>
            </div>
          </div>
          <div className="hero__card">
            <div className="pill pill--faded">
              <FiTarget aria-hidden="true" /> Precision care management
            </div>
            <ul className="feature-list">
              {heroHighlights.map((item) => (
                <li key={item.title} className="feature">
                  <span className="icon-circle icon-circle--primary">
                    <item.icon aria-hidden="true" />
                  </span>
                  <div>
                    <p className="feature__title">{item.title}</p>
                    <p className="feature__copy">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="card__footer">
              <span className="meta-dot" aria-hidden="true"></span>
              <p>Built for families who want a thoughtful, accountable partner.</p>
            </div>
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

        <section className="section section--muted" id="about">
          <div className="section__header">
            <p className="eyebrow">About Us</p>
            <h2>Grounded in mission, guided by advocacy.</h2>
            <p className="section__lead">
              Learn why Aspire Success NY was founded, the values that drive our work, and the team committed to your
              success.
            </p>
          </div>
          <div className="about-preview">
            <div>
              <div className="pill">Our Mission</div>
              <p>
                To empower individuals facing emotional, cognitive, and behavioral challenges by providing clear
                direction, expert care coordination, and access to essential resources.
              </p>
            </div>
            <div className="about-preview__actions">
              <a className="cta" href="/about" onClick={(event) => handleNavigate(event, '/about')}>
                Explore our story
              </a>
              <a className="cta cta--ghost" href="#contact">
                Talk with us
              </a>
            </div>
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
                <div className="card__header">
                  <span className="icon-circle">
                    <service.icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <span className="card__link">
                  Learn more <FiArrowUpRight aria-hidden="true" />
                </span>
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

      {isServicesModalOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="services-modal-title">
          <div className="modal__backdrop" onClick={() => setIsServicesModalOpen(false)} />
          <div className="modal__content">
            <button className="modal__close" type="button" aria-label="Close" onClick={() => setIsServicesModalOpen(false)}>
              ×
            </button>
            <div className="modal__header">
              <p className="eyebrow">Our Core Services</p>
              <h2 id="services-modal-title">Quick snapshot of how we serve you.</h2>
              <p className="section__lead">
                Discover the guidance, access, and expert support that simplify your next steps.
              </p>
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
                    setIsServicesModalOpen(false)
                  }}
                >
                  <div className="card__header">
                    <span className="icon-circle">
                      <service.icon aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <span className="card__link">
                    Learn more <FiArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

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
              <li>
                <a href="#" onClick={(event) => onNavigate(event, '/about')}>
                  About
                </a>
              </li>
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
