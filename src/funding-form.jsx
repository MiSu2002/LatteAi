import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function FundingInterestPage() {
  const [formData, setFormData] = useState({
    name: '',
    fundName: '',
    email: '',
    investmentRange: '$500k - $1M',
    notes: ''
  });

  const handleFundingSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[INVESTOR PROPOSAL] Funding Inquiry from ${formData.name} (${formData.fundName})`);
    const body = encodeURIComponent(
      `--- LATTEAI FUNDING PROPOSAL INQUIRY ---\n\n` +
      `Investor Name: ${formData.name}\n` +
      `Fund / Organization: ${formData.fundName}\n` +
      `Contact Email: ${formData.email}\n` +
      `Target Investment Range: ${formData.investmentRange}\n\n` +
      `Strategic Notes / Value Add:\n${formData.notes}\n\n` +
      `----------------------------------------\n` +
      `Submitted via LatteAi Investor Proposal Route`
    );

    window.location.href = `mailto:investors@latteai.co.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 text-white">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="glass-arch-card p-4 p-lg-5 rounded-4 shadow-lg border border-secondary border-opacity-25">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold text-info mb-0">LatteAi Funding & Research Proposal</h3>
              <Link to="/" className="btn btn-outline-light btn-sm rounded-pill px-3 text-decoration-none">
                &larr; Back to Home
              </Link>
            </div>

            <p className="text-secondary small mb-4">
              Fill out the parameters below. Submitting will dispatch an executive proposal directly to our business email at <code className="text-info">investors@latteai.co.in</code>.
            </p>

            <form onSubmit={handleFundingSubmit}>
              <div className="row g-3 text-start">
                <div className="col-md-6">
                  <label className="form-label small text-secondary">Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-secondary">Fund / Organization *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="e.g. Horizon Ventures"
                    value={formData.fundName}
                    onChange={(e) => setFormData({...formData, fundName: e.target.value})}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-secondary">Contact Email *</label>
                  <input 
                    type="email" 
                    required 
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="sarah@horizonventures.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-secondary">Target Investment Range</label>
                  <select 
                    className="form-select bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    value={formData.investmentRange}
                    onChange={(e) => setFormData({...formData, investmentRange: e.target.value})}
                  >
                    <option value="$250k - $500k">$2.5k - $5k (Seed)</option>
                    <option value="$500k - $1M">$5k - $10k (Strategic Seed)</option>
                    <option value="$1M - $3M">$10k - $30k (Series A Lead)</option>
                    <option value="$3M+">$30k+ (Growth / Expansion)</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label small text-secondary">Strategic Value Add & Notes</label>
                  <textarea 
                    rows="4" 
                    className="form-control bg-dark text-white border-secondary border-opacity-50 rounded-3"
                    placeholder="Share how your fund supports enterprise AI, Agentforce, or Salesforce ecosystem growth..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 text-center">
                <button type="submit" className="btn btn-success rounded-pill px-5 py-3 fw-semibold text-white shadow-sm">
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}