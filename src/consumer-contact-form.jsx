import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function ConsumerContactPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    crmScale: 'Enterprise (500+ Users)',
    inquiry: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[SALFESFORCE CONSUMER INQUIRY] from ${formData.companyName}`);
    const body = encodeURIComponent(
      `--- SALESFORCE CONSUMER INQUIRY ---\n\n` +
      `Company Name: ${formData.companyName}\n` +
      `Contact Person: ${formData.contactName}\n` +
      `Contact Email: ${formData.email}\n` +
      `Organization Scale: ${formData.crmScale}\n\n` +
      `Integration Objectives / Requirements:\n${formData.inquiry}\n\n` +
      `----------------------------------------\n` +
      `Submitted via LatteAi Consumer Portal`
    );

    window.location.href = `mailto:support@latteai.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="landing-wrapper min-vh-100 text-white d-flex flex-column justify-content-center">
      <div className="container py-5 my-auto">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="glass-arch-card p-4 p-lg-5 rounded-4 shadow-lg border border-secondary border-opacity-25">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-info mb-0">Salesforce Consumer Integration</h3>
                <Link to="/" className="btn btn-outline-light btn-sm rounded-pill px-3 text-decoration-none">
                  &larr; Back to Home
                </Link>
              </div>

              <p className="text-secondary small mb-4">
                Supercharge your Agentforce workflows with LatteOps. Submitting connects you directly with our customer success team at <code className="text-info">support@latteai.co.in</code>.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3 text-start">
                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Company Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. Acme Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Contact Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="e.g. David Miller"
                      value={formData.contactName}
                      onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Business Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="david@acmecorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small text-secondary">Salesforce Seat Scale</label>
                    <select 
                      className="form-select bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      value={formData.crmScale}
                      onChange={(e) => setFormData({...formData, CRMScale: e.target.value})}
                    >
                      <option value="Startup (1 - 50 Users)">Startup (1 - 50 Users)</option>
                      <option value="Mid-Market (51 - 500 Users)">Mid-Market (51 - 500 Users)</option>
                      <option value="Enterprise (500+ Users)">Enterprise (500+ Users)</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label small text-secondary">What features or workflow automations are you looking to integrate?</label>
                    <textarea 
                      rows="4" 
                      required
                      className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                      placeholder="Describe your current CRM bottleneck or Agentforce use case..."
                      value={formData.inquiry}
                      onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <button type="submit" className="btn btn-outline-info rounded-pill px-5 py-3 fw-semibold text-white shadow-sm">
                    Submit Consumer Inquiry
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