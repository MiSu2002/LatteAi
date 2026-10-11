import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ContributorFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    github: '',
    email: '',
    expertise: 'Agentic Reasoning Architectures',
    proposal: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[ENGINEERING CONTRIBUTOR] Application from ${formData.name}`);
    const body = encodeURIComponent(
      `--- LATTEAI ENGINEERING CONTRIBUTOR APPLICATION ---\n\n` +
      `Candidate Name: ${formData.name}\n` +
      `GitHub / Portfolio: ${formData.github}\n` +
      `Contact Email: ${formData.email}\n` +
      `Primary Expertise: ${formData.expertise}\n` +
      `Proposed Contribution / Focus Area:\n${formData.proposal}\n\n` +
      `----------------------------------------\n` +
      `Submitted via LatteAi Contributor Portal`
    );

    window.location.href = `mailto:engineering@latteai.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="landing-wrapper min-vh-100 text-white d-flex flex-column justify-content-center">
      <div className="container py-5 my-auto">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="glass-arch-card p-4 p-lg-5 rounded-4 shadow-lg border border-secondary border-opacity-25">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-info mb-0">Join LatteAi Engineering Team</h3>
                <Link to="/" className="btn btn-outline-light btn-sm rounded-pill px-3 text-decoration-none">
                  &larr; Back to Home
                </Link>
              </div>

              <p className="text-secondary small mb-4">
                Contribute to our core Atlas Reasoning frameworks and Agentforce integrations. Submitting prepares an onboarding package directly to <code className="text-info">engineering@latteai.com</code>.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 text-start">
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">GitHub / Portfolio URL *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="https://github.com/alexrivera"
                      value={formData.github}
                      onChange={(e) => setFormData({...formData, github: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Contact Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Primary Technical Domain</label>
                    <select 
                      className="form-select bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      value={formData.expertise}
                      onChange={(e) => setFormData({...formData, expertise: e.target.value})}
                    >
                      <option value="Agentic Reasoning Architectures">Agentic Reasoning Architectures</option>
                      <option value="Salesforce & Agentforce Integration">Salesforce & Agentforce Integration</option>
                      <option value="React & Frontend UI/UX">React & Frontend UI/UX</option>
                      <option value="State Management & FSM Core">State Management & FSM Core</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label small text-secondary">How would you like to contribute?</label>
                    <textarea 
                      rows="4" 
                      required
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="Describe your background and what core components you want to build with us..."
                      value={formData.proposal}
                      onChange={(e) => setFormData({...formData, proposal: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button type="submit" className="btn btn-outline-info rounded-pill px-5 py-3 fw-semibold text-white shadow-sm">
                    Submit Contributor Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}