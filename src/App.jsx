import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';

export default function App() {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about-us', 'products', 'research'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for navigating between sections
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-wrapper min-vh-100 text-white d-flex flex-column">
      
      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4 px-xl-5 py-3 sticky-top bg-dark bg-opacity-10 backdrop-blur shadow-sm">
        <div className="container-fluid p-0">
          <a className="navbar-brand brand fw-bold fs-3 text-white" href="#home" onClick={(e) => scrollToSection(e, 'home')}>
            Latte<span className="text-info">Ai</span>
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-controls="navContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end mobile-menu-collapse p-3 p-lg-0 rounded-3 mt-3 mt-lg-0" id="navContent">
            <ul className="navbar-nav gap-lg-4 align-items-center">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'about-us' ? 'active' : ''}`} 
                  href="#about-us" 
                  onClick={(e) => scrollToSection(e, 'about-us')}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} 
                  href="#products" 
                  onClick={(e) => scrollToSection(e, 'products')}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'research' ? 'active' : ''}`} 
                  href="#research" 
                  onClick={(e) => scrollToSection(e, 'research')}
                >
                  Research
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="container-fluid flex-grow-1 d-flex flex-column justify-content-center px-4 px-xl-5 py-5 position-relative pt-0">
        <section id="home" className='home'>
        <div className="row w-100 align-items-center g-4 justify-content-center">
          
          {/* LEFT COLUMN: Centered on XL screens */}
          <div className="col-12 col-xl-8 z-2 d-flex flex-column align-items-center text-center">
            
            <div className="hero-text-container mb-4">
              <span className="info text-info small text-uppercase tracking-wider d-block mb-2">
                Agentforce & Atlas Architecture
              </span>
              <h1 className="hero-title display-3 mt-3 fw-light m-0">
                - the future -
              </h1>
              <h2 className="hero-subtitle display-4 text-white-50">
                of AI reasoning
              </h2>
            </div>

            <p className="hero-desc text-secondary mb-4 col-lg-9">
              LatteAi provides an advanced platform for autonomous agentic reasoning. Moving beyond traditional rule-based FSM chatbots, we leverage multi-step dynamic decision loops and frameworks like the Atlas Reasoning Engine to execute tasks seamlessly.
            </p>

            {/* Objective Tags / Pills */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
              <span className="badge tag-badge px-3 py-2 rounded-pill">Autonomous Agents</span>
              <span className="badge tag-badge px-3 py-2 rounded-pill">Atlas Engine</span>
              <span className="badge tag-badge px-3 py-2 rounded-pill">Action Routing</span>
            </div>

            {/* Action Buttons */}
            <div className="d-flex mt-3 flex-wrap justify-content-center align-items-center gap-3 mb-5">
              <button onClick={(e) => scrollToSection(e, 'about-us')}
              className="btn btn-dark-custom px-4 py-3 rounded-pill text-white fw-medium shadow-sm">
                Explore More
              </button>
              <button 
  onClick={() => window.open("https://n5dfmgjzzd72yhbu.public.blob.vercel-storage.com/latteops-demo.mp4", "_blank")}
  className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-2"
>
  <span className="play-icon rounded-circle d-flex align-items-center justify-content-center bg-white text-dark" style={{ width: '32px', height: '32px' }}>
    ▶
  </span> 
  Watch Demo
</button>
            </div>

          </div>

          {/* RIGHT COLUMN: Robot Image & Metrics */}
          <div className="col-12 col-xl-4 position-relative">
            <div className="robot-container text-center d-flex justify-content-center justify-content-xl-start">
              <img 
                src="./agent.png" 
                alt="AI Robot Agent" 
                className="img-fluid robot-hero-img"
              />
            </div>
            <div className="metrics-wrapper d-flex justify-content-center justify-content-xl-start ms-xl-5 gap-3">
              <div className="metric-card p-3 rounded-3 text-center my-auto">
                <h3 className="h4 fw-bold text-white mb-1">Multi-Step</h3>
                <small className="text-secondary d-block">Reasoning Loops</small>
              </div>
              <div className="metric-card p-3 rounded-3 text-center my-auto">
                <h3 className="h4 fw-bold text-white mb-1">98%</h3>
                <small className="text-secondary d-block">Execution Accuracy</small>
              </div>
            </div>
          </div>

        </div>
        </section>

        {/* --- ABOUT US SECTION --- */}
        <section id="about-us" className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
          <div className="row w-100 pt-4 mx-auto align-items-center justify-content-center">
            
            {/* Header & Salesforce Logo Accent */}
            <div className="col-12 text-center mb-5">
              <div className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 text-info bg-info bg-opacity-10 mb-3 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cloud-fill" viewBox="0 0 16 16">
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.187 4.861 10.329 3 8 3a4.986 4.986 0 0 0-2.941.946z"/>
                </svg>
              </div>
              <h3 className="fw-light tracking-wide text-uppercase fs-5 text-info">Who We Are</h3>
              <h2 className="display-6 fw-bold mb-3">About LatteAi & Our Salesforce Vision</h2>
              <p className="text-secondary mx-auto col-lg-8 lead">
                LatteAi is pioneering the next generation of autonomous enterprise workflows. We are deeply targeting the <strong style={{fontWeight: 'bold'}}>Salesforce platform</strong> to introduce groundbreaking AI features, helping organizations transition from rigid rule-based automation to advanced agentic execution.
              </p>
            </div>

            {/* Detailed Cards */}
            <div className="col-12 col-lg-10">
              <div className="row g-4">
                <div className="col-12 col-md-4">
                  <div className="glass-arch-card p-4 rounded-4 h-100 text-center">
                    <h4 className="fw-bold mb-2 text-info">Our Mission</h4>
                    <p className="text-secondary small mb-0">
                      To empower enterprise ecosystems with goal-driven reasoning engines that execute multi-step operations autonomously, securely, and seamlessly.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="glass-arch-card p-4 rounded-4 h-100 text-center">
                    <h4 className="fw-bold mb-2 text-info">Salesforce Innovation</h4>
                    <p className="text-secondary small mb-0">
                      Targeting core CRM architecture to build modern features that supercharge Agentforce with dynamic planning and action routing.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="glass-arch-card p-4 rounded-4 h-100 text-center">
                    <h4 className="fw-bold mb-2 text-info">AppExchange Ecosystem</h4>
                    <p className="text-secondary small mb-0">
                      Proud Salesforce AppExchange partners bringing tailored workflow accelerators like LatteOps straight to modern businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCTS SECTION --- */}
        <section id="products" className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
  <div className="row w-100 pt-4 mx-auto align-items-center justify-content-center">
    <div className="col-12 text-center mb-4">
      <h3 className="fw-light tracking-wide text-uppercase fs-5 text-info">Our Flagship Solution</h3>
      <h2 className="display-6 fw-bold mb-3">Introducing LatteOps</h2>
      <p className="text-secondary mx-auto col-lg-8 mb-5">
        LatteOps is an absolute game-changer built for the Salesforce ecosystem. By integrating native agentic reasoning and dynamic action routing directly into enterprise workflows, LatteOps automates complex operational overhead, eliminating manual data entry and transforming how teams manage CRM intelligence.
      </p>
    </div>

    <div className="col-12 col-lg-10">
      <div className="glass-arch-card p-4 p-lg-5 rounded-4 d-flex flex-column flex-lg-row align-items-center gap-4 text-start">
        <div className="appexchange-icon-box flex-shrink-0 d-flex align-items-center justify-content-center rounded-4 p-4 text-info bg-info bg-opacity-10 align-self-start">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.38C1.266 6.095 0 7.555 0 9.313 0 11.356 1.664 13 3.715 13h8.565C14.286 13 16 11.356 16 9.313c0-1.918-1.52-3.474-3.408-3.535C12.29 4.54 10.332 2 8 2zM6.854 7.146a.5.5 0 0 1 .708 0L8 7.586l.438-.44a.5.5 0 1 1 .708.708l-1.146 1.146a.5.5 0 0 1-.708 0L6.146 7.854a.5.5 0 0 1 0-.708zM8 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>

        <div className="flex-grow-1">
          <span className="badge bg-light bg-opacity-10 text-white-50 px-3 py-1 rounded-pill mb-2">Salesforce AppExchange Partner</span>
          <h3 className="fw-bold mb-3">LatteOps: Native Autonomous Operations</h3>
          <p className="text-secondary mb-4">
            Built as an official Salesforce partner offering, LatteOps scales team productivity by deploying autonomous reasoning loops that execute multi-step actions across your entire CRM data stack with unprecedented accuracy.
          </p>

          {/* Architecture Details Box */}
          <div className="bg-dark bg-opacity-50 border border-secondary border-opacity-25 p-3 rounded-3 mb-4 text-secondary small">
            <h6 className="text-info fw-bold mb-2">Under-the-Hood Architecture & Capabilities:</h6>
            <ul className="mb-0 ps-3">
              <li className="mb-1"><strong>Core Runtime:</strong> Built on Python 3.14 powering the execution engine, utilizing Claude Haiku 5.5 for rapid, efficient agentic reasoning.</li>
              <li className="mb-1"><strong>Serverless Infrastructure:</strong> Deployed on AWS Lambda with full backend support managed from our end, complete with BYOK (Bring Your Own Key) model architecture flexibility.</li>
              <li className="mb-1"><strong>SCADA Event Integration:</strong> Instantly captures real-time platform events triggered from SCADA alerts to autonomously instantiate and route Salesforce cases.</li>
              <li className="mb-1"><strong>Reliability & Debugging:</strong> Built-in integration log support for deep troubleshooting if any transaction fails, backed by 100% test case passing assurance.</li>
            </ul>
          </div>

          <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            <button className="btn btn-info px-4 py-2 rounded-pill fw-semibold text-dark">
              View on AppExchange
            </button>
            <button className="btn btn-outline-dark px-4 py-2 border-3 rounded-pill fw-medium">
              <Link to="schedule-demo-form" className='text-white fw-bold text-decoration-none d-block'>Schedule Demo</Link>
            </button>
            <button 
  onClick={() => window.open("https://n5dfmgjzzd72yhbu.public.blob.vercel-storage.com/latteops-demo.mp4", "_blank")}
  className="btn btn-outline-info px-4 py-2 rounded-pill fw-semibold"
>
  Watch Demo
</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* --- RESEARCH SECTION --- */}
        <section id="research" className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
          <div className="row w-100 pt-4 mx-auto justify-content-center">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-light tracking-wide text-uppercase fs-5 text-info">R&D & Exploration</h3>
            <h2 className="display-6 fw-bold mb-3">What We Have Researched</h2>
            <p className="text-secondary mx-auto col-lg-8 mb-5">
              Our research focuses on unlocking enterprise-grade contextual awareness, bridging persistent memory layers into runtime orchestrations, and structuring unified planner intelligence models. To see how these concepts map out in real-world systems, visit <a href="https://agentforce-architecture.vercel.app" target="_blank" rel="noreferrer" className="text-info text-decoration-underline">agentforce-architecture.vercel.app</a>.
            </p>
          </div>

          <div className="col-12 col-lg-10">
            <div className="glass-arch-card p-4 p-lg-5 rounded-4 text-center mb-4">
              <h4 className="fw-bold mb-3">Are You a VC or Investor?</h4>
              <p className="text-secondary mb-4 col-lg-9 mx-auto">
                Interested in funding the research and engineering of LatteAi as we scale next-generation agentic reasoning architectures? We would love to connect.
              </p>
              <button className="btn btn-success px-5 py-3 rounded-pill fw-semibold text-white shadow-sm">
                <Link to="/funding-interest-form" className="text-white text-decoration-none d-block">
                    Interested for Funding
                  </Link>
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-10">
            <div className="row g-4">
              <div className="col-12 col-md-6">
                <div className="glass-arch-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between text-center">
                  <div>
                    <h5 className="fw-bold mb-2">Engineers & Developers</h5>
                    <p className="text-secondary small mb-4">
                      Interested in contributing to our codebase and core architectures? Fill out our form to join our engineering team.
                    </p>
                  </div>
                  <button className="contributor btn btn-info px-4 py-2 rounded-pill fw-medium mx-auto shadow-sm">
                    <Link to="contributor-interest-form" className='text-dark fw-bold text-decoration-none d-block'>Contributor Form</Link>
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="glass-arch-card p-4 rounded-4 h-100 d-flex flex-column justify-content-between text-center">
                  <div>
                    <h5 className="fw-bold mb-2">Salesforce Consumers</h5>
                    <p className="text-secondary small mb-4">
                      Are you a Salesforce product consumer looking to integrate advanced AI agents? Get in touch with our team.
                    </p>
                  </div>
                  <button className="contributor btn btn-info px-4 py-2 rounded-pill fw-medium mx-auto shadow-sm">
                    <Link to="consumer-contact-form" className='text-dark fw-bold text-decoration-none d-block'>Consumer Contact Form</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

      </main>
      <footer className="py-4 border-top border-secondary border-opacity-15 text-center text-secondary small">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} LatteAi. All rights reserved. Built for autonomous enterprise intelligence.</p>
        </div>
      </footer>
    </div>
  );
}