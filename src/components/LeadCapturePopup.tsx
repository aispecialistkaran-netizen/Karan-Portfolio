// src/components/LeadCapturePopup.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LeadCapturePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyDesignation: '',
    projectType: 'Web Application',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-trigger banner after 10s or 25% scroll if not previously dismissed
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('karan_lead_banner_dismissed');
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 25 && !hasInteracted) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasInteracted]);

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
    sessionStorage.setItem('karan_lead_banner_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('karan_client_leads') || '[]');
      existing.push({
        ...formData,
        source: 'Popup Lead Banner',
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('karan_client_leads', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }
    setIsSubmitted(true);
  };

  return (
    <>
      {/* ================= 1. PERSISTENT FLOATING TRIGGER PILL ================= */}
      <div className="fixed bottom-6 right-6 z-40 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            setIsSubmitted(false);
          }}
          className="flex items-center space-x-2.5 px-4 py-2.5 rounded-full border border-[#D4AF37] bg-[#0E0C0A]/95 backdrop-blur-md text-[#F4EBE2] text-[11px] font-semibold tracking-wider uppercase shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:bg-[#1A1612] hover:border-[#F3DBB3]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>START A PROJECT</span>
          <span className="text-[#D4AF37] text-xs">⚡</span>
        </motion.button>
      </div>

      {/* ================= 2. LEAD CAPTURE POPUP BANNER MODAL ================= */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm pointer-events-auto">
            {/* Backdrop click to dismiss */}
            <div className="absolute inset-0" onClick={handleClose} />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#0C0A08] border border-[#D4AF37] rounded-xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold Top Light Flare */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

              {/* Minimal Corner Crosshairs */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-sm border border-[#8C6D4F]/40 text-[#A8988B] hover:text-white hover:border-[#D4AF37] transition-colors text-xs font-mono"
                aria-label="Close"
              >
                ✕
              </button>

              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-emerald-500 bg-emerald-950/60 text-emerald-400 text-xl font-bold">
                    ✓
                  </div>
                  <h3
                    className="text-3xl text-white font-normal uppercase tracking-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    INQUIRY DISPATCHED SUCCESSFULLY
                  </h3>
                  <p
                    className="text-xs sm:text-[13px] text-[#C9BAAD] font-light max-w-md mx-auto leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Thank you{formData.name ? <>, <span className="text-[#F3DBB3] font-medium">{formData.name}</span></> : ''}! Karan will review your requirements and provide an architectural roadmap within 12 hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/919015725735?text=Hi%20Karan,%20I%20am%20${encodeURIComponent(formData.name)}%20(${encodeURIComponent(formData.companyDesignation || 'Client')}).%20I%20just%20submitted%20an%20inquiry%20for%20a%20${encodeURIComponent(formData.projectType)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#25D366] text-black font-semibold text-xs rounded-sm hover:opacity-90 transition-opacity uppercase tracking-wider"
                    >
                      <span>Connect on WhatsApp Now</span>
                      <span>↗</span>
                    </a>
                    <button
                      onClick={handleClose}
                      className="w-full sm:w-auto px-5 py-3 border border-[#8C6D4F]/50 text-xs font-mono text-[#D5CBC0] hover:text-white uppercase transition-colors"
                    >
                      Return to Portfolio
                    </button>
                  </div>
                </div>
              ) : (
                /* Lead Capture Form */
                <div>
                  {/* Header */}
                  <div className="mb-6 pr-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-0.5 text-[8.5px] font-mono tracking-widest uppercase bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3DBB3] rounded-sm">
                        ⚡ FAST-TRACK ESTIMATE • DIRECT ARCHITECT ACCESS
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl text-white font-normal uppercase leading-[0.95]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D5CBC0] to-[#7A6B5C]">
                        BUILD YOUR NEXT
                      </span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                        WEBAPP, WEBSITE OR APP.
                      </span>
                    </h3>
                    <p
                      className="text-xs text-[#A8988B] font-light mt-1.5 leading-relaxed"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Share your vision to receive an architectural breakdown, feasibility analysis, and timeline estimate directly from Karan.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name & Work Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                          // FULL NAME *
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Mercer"
                          className="w-full bg-[#14100D] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/40 px-3 py-2 outline-none rounded-sm transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>

                      <div>
                        <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                          // DIRECT EMAIL *
                        </span>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full bg-[#14100D] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/40 px-3 py-2 outline-none rounded-sm transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone Number & Company Designation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                          // PHONE / WHATSAPP *
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210 / +1 (555)..."
                          className="w-full bg-[#14100D] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/40 px-3 py-2 outline-none rounded-sm transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>

                      <div>
                        <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                          // COMPANY &amp; DESIGNATION *
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.companyDesignation}
                          onChange={(e) => setFormData({ ...formData, companyDesignation: e.target.value })}
                          placeholder="e.g. Founder, CEO at Startup"
                          className="w-full bg-[#14100D] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/40 px-3 py-2 outline-none rounded-sm transition-colors"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        />
                      </div>
                    </div>

                    {/* Row 3: Project Type Selector */}
                    <div>
                      <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1.5">
                        // WHAT DO YOU WANT TO BUILD?
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                        {['Web Application', 'Modern Website', 'iOS / Android App', 'AI Automation'].map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`py-1.5 px-2 text-[9.5px] font-mono uppercase tracking-wider rounded-sm border transition-all text-center ${
                              formData.projectType === type
                                ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#F3DBB3]'
                                : 'border-[#8C6D4F]/25 bg-[#14100D] text-[#A8988B] hover:border-[#8C6D4F]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Row 4: Brief Scope / Details */}
                    <div>
                      <span className="block text-[9px] font-mono tracking-widest uppercase text-[#8C6D4F] mb-1">
                        // PROJECT DETAILS &amp; GOALS *
                      </span>
                      <textarea
                        required
                        rows={3}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Key features, target timeline, tech preferences, or current challenges..."
                        className="w-full bg-[#14100D] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/40 p-2.5 outline-none rounded-sm transition-colors resize-none"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="space-y-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#F3DBB3] text-black text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] rounded-sm"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        GENERATE INSTANT TECHNICAL ESTIMATE ↗
                      </button>

                      <div className="text-center pt-1">
                        <a
                          href="https://wa.me/919015725735?text=Hi%20Karan,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-[10.5px] font-mono text-[#25D366] hover:underline"
                        >
                          <span>Or chat directly on WhatsApp (+91 9015725735)</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>

                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadCapturePopup;
