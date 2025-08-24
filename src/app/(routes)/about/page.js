import React from 'react';
import Header from '../../user/components/Header';
import Footer from '../../user/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      
      {/* Hero Section - FundedNext Style */}
      <section className="position-relative overflow-hidden py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8 mt-5 mx-auto text-center text-white">
              <h1 className="display-3 fw-bold mb-4" style={{
                fontSize: '3.5rem',
                lineHeight: '1.1',
                color: '#ffffff'
              }}>
                About <span style={{ color: '#8b5cf6' }}>Treading Hub</span>
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>
                Empowering talented traders worldwide to achieve financial freedom through 
                innovative funding solutions and comprehensive support.
              </p>
              <div className="d-flex justify-content-center gap-4">
                <div className="text-center">
                  <div className="h2 fw-bold text-primary mb-1">10,000+</div>
                  <div className="text-white-50">Active Traders</div>
                </div>
                <div className="text-center">
                  <div className="h2 fw-bold text-success mb-1">$50M+</div>
                  <div className="text-white-50">Total Funding</div>
                </div>
                <div className="text-center">
                  <div className="h2 fw-bold text-warning mb-1">95%</div>
                  <div className="text-white-50">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="lead text-muted mb-4">
                At Treading Hub, we believe that talented traders should have access to 
                the capital they need to succeed. Our mission is to bridge the gap 
                between trading talent and funding opportunities.
              </p>
              <p className="text-muted mb-4">
                We provide a platform where skilled traders can demonstrate their 
                abilities and receive funding to trade with real capital, while 
                maintaining full control over their trading decisions.
              </p>
              <div className="d-flex align-items-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                     style={{ width: '50px', height: '50px' }}>
                  <i className="bi bi-check-circle text-primary fs-4"></i>
                </div>
                <div>
                  <h6 className="mb-1">Risk-Free Evaluation</h6>
                  <p className="text-muted small mb-0">Prove your skills without risking your own capital</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 shadow-lg hover-lift">
                <div className="card-body p-5">
                  <h4 className="mb-4 text-primary">What We Offer</h4>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-currency-dollar text-success"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">Up to $300k</h6>
                          <small className="text-muted">Funding</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-warning bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-percent text-warning"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">90% Profit</h6>
                          <small className="text-muted">Sharing</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-info bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-clock text-info"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">24/7</h6>
                          <small className="text-muted">Support</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3" 
                             style={{ width: '40px', height: '40px' }}>
                          <i className="bi bi-tools text-primary"></i>
                        </div>
                        <div>
                          <h6 className="mb-0">Advanced</h6>
                          <small className="text-muted">Tools</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Values</h2>
            <p className="lead text-muted">The principles that guide everything we do</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-shield-check text-primary fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Transparency</h5>
                  <p className="card-text text-muted">
                    We believe in complete transparency in all our processes, 
                    from evaluation criteria to profit sharing. No hidden fees or surprises.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-people text-success fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Community</h5>
                  <p className="card-text text-muted">
                    Building a supportive community of traders who learn, 
                    grow, and succeed together. Your success is our success.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="bi bi-lightbulb text-warning fs-1"></i>
                  </div>
                  <h5 className="card-title fw-bold mb-3">Innovation</h5>
                  <p className="card-text text-muted">
                    Continuously innovating our platform and services to 
                    provide the best trading experience and tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 gradient-purple text-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <div className="display-4 fw-bold mb-2">10,000+</div>
              <p className="text-white-75 mb-0">Active Traders</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="display-4 fw-bold mb-2">$50M+</div>
              <p className="text-white-75 mb-0">Total Funding Provided</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="display-4 fw-bold mb-2">95%</div>
              <p className="text-white-75 mb-0">Success Rate</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="display-4 fw-bold mb-2">24/7</div>
              <p className="text-white-75 mb-0">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Team</h2>
            <p className="lead text-muted">Meet the experts behind Treading Hub</p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person text-primary" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">John Smith</h5>
                  <p className="text-primary mb-3">CEO & Founder</p>
                  <p className="card-text text-muted">
                    Former hedge fund manager with 15+ years of experience in 
                    financial markets and trading technology. Passionate about 
                    democratizing access to trading capital.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person text-success" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">Sarah Johnson</h5>
                  <p className="text-success mb-3">CTO</p>
                  <p className="card-text text-muted">
                    Technology expert with deep experience in building 
                    scalable trading platforms and financial systems. 
                    Leading our technical innovation and platform development.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-5">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                       style={{ width: '100px', height: '100px' }}>
                    <i className="bi bi-person text-warning" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h5 className="card-title fw-bold mb-2">Mike Davis</h5>
                  <p className="text-warning mb-3">Head of Trading</p>
                  <p className="card-text text-muted">
                    Professional trader with expertise in risk management 
                    and developing trading strategies for funded accounts. 
                    Dedicated to helping traders succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-5 fw-bold mb-4">Ready to Start Your Trading Journey?</h2>
              <p className="lead text-muted mb-4">
                Join thousands of successful traders who have achieved financial freedom 
                with Treading Hub's funding program.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-primary btn-lg px-4 py-3">
                  Get Started Today
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 