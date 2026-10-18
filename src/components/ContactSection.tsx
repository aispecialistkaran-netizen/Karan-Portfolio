// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    projectType: 'Web Application',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('karan_client_leads') || '[]');
      existing.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('karan_client_leads', JSON.stringify(existing));
    } catch {
      // Ignore storage errors
    }
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / INITIATE ENGAGEMENT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET'S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    YOUR NEXT PRODUCT.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious SaaS webapp to build, a high-converting website to launch, or an iOS &amp; Android mobile application powered by AI? Let's discuss requirements, technical architecture, and timelines.
              </p>

              {/* Verified Contact Details Grid */}
              <div className="space-y-4 pt-6 border-t border-[#8C6D4F]/25 text-xs">
                <div className="flex items-center space-x-3">
                  <span className="text-[#D4AF37] font-mono text-sm">✉</span>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest text-[#8C6D4F] uppercase">DIRECT EMAIL</span>
                    <a href="mailto:vermakaran321@gmail.com" className="text-[#EAD8C7] hover:text-[#D4AF37] transition-colors">
                      vermakaran321@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#D4AF37] font-mono text-sm">📞</span>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest text-[#8C6D4F] uppercase">PHONE &amp; WHATSAPP</span>
                    <a href="tel:+919015725735" className="text-[#EAD8C7] hover:text-[#D4AF37] transition-colors">
                      +91 9015725735
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#D4AF37] font-mono text-sm">📍</span>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest text-[#8C6D4F] uppercase">LOCATION &amp; AVAILABILITY</span>
                    <span className="text-[#EAD8C7]">
                      Noida / NCR, India • Remote Worldwide
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-[#D4AF37] font-mono text-sm">💼</span>
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-widest text-[#8C6D4F] uppercase">PROFESSIONAL CHANNELS</span>
                    <div className="flex items-center space-x-4 mt-1">
                      <a
                        href="https://linkedin.com/in/karanverma-95944a219"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4AF37] hover:underline text-[11px]"
                      >
                        LinkedIn Profile ↗
                      </a>
                      <span className="text-[#8C6D4F]">•</span>
                      <a
                        href="https://github.com/karanverma-lgtm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4AF37] hover:underline text-[11px]"
                      >
                        GitHub Profile ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Client Inquiry Terminal (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you, <span className="text-[#F3DBB3]">{formData.name}</span>. Your project brief has been recorded. Karan will review your requirements and respond within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919015725735?text=Hi%20Karan,%20I%20am%20${encodeURIComponent(formData.name)}%20from%20${encodeURIComponent(formData.company || 'my company')}%20(${encodeURIComponent(formData.designation || 'Client')}).%20I%20am%20looking%20to%20build%20a%20${encodeURIComponent(formData.projectType)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#25D366] text-black font-semibold text-xs rounded-sm hover:opacity-90 transition-opacity"
                  >
                    <span>Chat on WhatsApp Directly</span>
                    <span>↗</span>
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="px-4 py-2 border border-[#8C6D4F]/40 text-xs text-[#A8988B] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1: Sender Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // SENDER NAME *
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 py-2.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // DIRECT EMAIL *
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 py-2.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // PHONE NUMBER / WHATSAPP *
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210 / +1 (555) 000-0000"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 py-2.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                      // COMPANY / ORGANIZATION *
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Corp / Stealth Startup"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 py-2.5 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Row 3: Designation / Role */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // YOUR DESIGNATION / ROLE *
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Founder &amp; CEO, CTO, Head of Product, Director"
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-3.5 py-2.5 outline-none rounded-sm transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {/* Row 4: Project Type */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // WHAT ARE YOU LOOKING TO BUILD?
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['Web Application', 'Modern Website', 'iOS / Android App', 'AI Automation'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`py-2 px-2 text-[10px] font-mono uppercase tracking-wider rounded-sm border transition-all text-center ${
                          formData.projectType === type
                            ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F3DBB3]'
                            : 'border-[#8C6D4F]/30 bg-[#120F0C] text-[#A8988B] hover:border-[#8C6D4F]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Row 5: Project Details & Goals */}
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-1.5">
                    // PROJECT DETAILS &amp; GOALS *
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, target timeline, features needed, or existing codebase..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-3.5 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#F3DBB3] text-black text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  DISPATCH PROJECT INQUIRY ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            KARAN VERMA // AI FULL STACK DEVELOPER
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • ENGINEERED FOR CLIENT CONVERSION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;