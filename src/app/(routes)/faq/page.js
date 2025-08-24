'use client';
import React, { useState } from 'react';
import Header from '../../user/components/Header';
import Footer from '../../user/components/Footer';

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Treading Hub?",
      answer: "Treading Hub is a funded trading program that provides talented traders with access to capital to trade financial markets. We offer evaluation programs where traders can prove their skills and receive funding up to $300,000 while keeping up to 90% of their profits."
    },
    {
      question: "How does the funding program work?",
      answer: "Our funding program consists of two phases: Phase 1 (Evaluation) and Phase 2 (Funded Account). In Phase 1, you trade on a simulated account to demonstrate your skills. Once you pass the evaluation criteria, you move to Phase 2 where you trade with real capital and earn performance rewards."
    },
    {
      question: "What are the evaluation criteria?",
      answer: "The evaluation criteria include: Maximum daily loss limit of 5%, maximum total loss limit of 10%, minimum trading days of 5, and maintaining consistent risk management practices. You must also avoid news trading and maintain proper position sizing."
    },
    {
      question: "How much funding can I receive?",
      answer: "We offer funding from $5,000 up to $300,000. The amount depends on your chosen program and your performance during the evaluation phase. You can scale up your account size based on consistent profitable trading."
    },
    {
      question: "What percentage of profits do I keep?",
      answer: "You keep up to 90% of your profits. The exact percentage depends on your account size and performance tier. We believe in rewarding successful traders generously for their skills and dedication."
    },
    {
      question: "What markets can I trade?",
      answer: "You can trade a wide range of markets including Forex, Indices, Commodities, and Cryptocurrencies. Our platform provides access to major currency pairs, popular indices like S&P 500 and NASDAQ, commodities like Gold and Oil, and major cryptocurrencies."
    },
    {
      question: "Are there any trading restrictions?",
      answer: "Yes, there are some restrictions to ensure proper risk management: No news trading during high-impact economic events, maximum position size limits, and no holding positions over weekends for certain instruments. These rules help protect both you and the funding."
    },
    {
      question: "What trading platforms do you support?",
      answer: "We support MetaTrader 4 (MT4) and MetaTrader 5 (MT5). These are the most popular and reliable trading platforms in the industry, offering advanced charting tools and automated trading capabilities."
    },
    {
      question: "Is there customer support available?",
      answer: "Yes, we provide 24/7 customer support through live chat, email, and phone. Our support team consists of experienced traders who understand your needs and can help with any questions or issues."
    },
    {
      question: "How do I start the evaluation process?",
      answer: "To start the evaluation process, simply choose your preferred account size from our programs, complete the registration, and make the one-time evaluation fee payment. You'll receive your login credentials immediately and can start trading right away."
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      
      {/* Hero Section */}
      <section className="position-relative overflow-hidden py-5" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        minHeight: '50vh',
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
                Frequently Asked <span style={{ color: '#8b5cf6' }}>Questions</span>
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.25rem', color: '#cbd5e1' }}>
                Find answers to the most common questions about our funded trading programs, 
                evaluation process, and platform features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="accordion" id="faqAccordion">
                {faqData.map((item, index) => {
                  const isActive = activeAccordion === index;
                  
                  return (
                    <div key={index} className="accordion-item border-0 mb-3 shadow-sm hover-lift">
                      <h2 className="accordion-header" id={`heading-${index}`}>
                        <button
                          className={`accordion-button ${!isActive ? 'collapsed' : ''} fw-semibold`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          style={{
                            background: isActive ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' : '#ffffff',
                            color: isActive ? '#ffffff' : '#374151',
                            border: 'none',
                            borderRadius: '12px',
                            padding: '1.5rem'
                          }}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${index}`}
                        className={`accordion-collapse collapse ${isActive ? 'show' : ''}`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body" style={{
                          background: '#f8fafc',
                          borderBottomLeftRadius: '12px',
                          borderBottomRightRadius: '12px',
                          padding: '1.5rem',
                          borderTop: 'none'
                        }}>
                          <p className="text-muted mb-0" style={{ lineHeight: '1.6' }}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="h2 fw-bold mb-4">Still Have Questions?</h2>
              <p className="lead text-muted mb-4">
                Can't find the answer you're looking for? Our support team is here to help you 
                with any questions about our funded trading programs.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="/contact" className="btn btn-primary btn-lg px-5 py-3">
                  <i className="bi bi-chat-dots me-2"></i>
                  Contact Support
                </a>
                <a href="/plans" className="btn btn-outline-primary btn-lg px-5 py-3">
                  <i className="bi bi-arrow-right me-2"></i>
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
