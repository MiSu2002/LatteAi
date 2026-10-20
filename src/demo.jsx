import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ScheduleDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    teamSize: '50 - 200 Employees',
    preferredDate: '',
    notes: ''
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[DEMO REQUEST] LatteOps & Agentforce Demo from ${formData.name} (${formData.company})`);
    const body = encodeURIComponent(
      `--- LATTEAI SCHEDULE DEMO INQUIRY ---\n\n` +
      `Contact Name: ${formData.name}\n` +
      `Company / Organization: ${formData.company}\n` +
      `Business Email: ${formData.email}\n` +
      `Organization Scale: ${formData.teamSize}\n` +
      `Preferred Demo Date: ${formData.preferredDate}\n\n` +
      `Specific Workflows / Focus Areas:\n${formData.notes}\n\n` +
      `----------------------------------------\n` +
      `Submitted via LatteAi Schedule Demo Portal`
    );

    window.location.href = `mailto:demo@latteai.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="landing-wrapper min-vh-100 text-white d-flex flex-column justify-content-center">
      <div className="container py-5 my-auto">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="glass-arch-card p-4 p-lg-5 rounded-4 shadow-lg border border-secondary border-opacity-25">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-info mb-0">Schedule a Live LatteOps Demo</h3>
                <Link to="/" className="btn btn-outline-light btn-sm rounded-pill px-3 text-decoration-none">
                  &larr; Back to Home
                </Link>
              </div>

              <p className="text-secondary small mb-4">
                Experience autonomous CRM workflows live. Submitting this request sends an appointment package directly to our solutions team at <code className="text-info">demo@latteai.co.in</code>.
              </p>

              <form onSubmit={handleDemoSubmit}>
                <div className="row g-3 text-start">
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Your Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. Jessica Taylor"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Company / Organization *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. Vertex Technologies"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Business Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="jessica@vertex.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Team Size</label>
                    <select 
                      className="form-select bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                    >
                      <option value="10 - 50 Employees">10 - 50 Employees</option>
                      <option value="50 - 200 Employees">50 - 200 Employees</option>
                      <option value="200 - 500 Employees">200 - 500 Employees</option>
                      <option value="500+ Enterprise">500+ Enterprise</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Preferred Date & Time *</label>
                    <input 
                      type="date" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small text-secondary">What specific workflows or Agentforce integrations would you like to review?</label>
                    <textarea 
                      rows="3" 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. Multi-step automated ticket resolution, CRM data routing..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 text-end">
                  <button type="submit" className="btn btn-info rounded-pill px-5 py-3 fw-semibold text-dark shadow-sm">
                    Confirm Demo Request
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