import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  architectureImage?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  highlights?: string[];
}

export interface ClientPlatform {
  id: string;
  number: string;
  title: string;
  clientName: string;
  category: 'aviation-logistics' | 'healthcare-pharma' | 'enterprise-b2b' | 'luxury-ecommerce';
  categoryLabel: string;
  badge: string;
  liveUrl: string;
  summary: string;
  architectureHighlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  impactStatement: string;
}

const flagshipProjects: Project[] = [
  {
    number: '01',
    title: 'Nexis B2B — Sales Pipeline & Delivery CRM',
    category: 'ENTERPRISE B2B SAAS / SALES ENGINE',
    badge: 'FLAGSHIP SAAS • LIVE PRODUCTION',
    description:
      'Full-stack enterprise B2B sales pipeline, lead journey analytics, and milestone delivery platform. Features 6-stage weighted probability forecasting (10% to 100%), automated SalesQL lead enrichment, multi-touch cold email dispatch campaigns, Google Sheets real-time bi-directional sync, S3 proposal parsing, and live revenue delivery tracking.',
    githubUrl: 'https://github.com/karanverma-lgtm/xmonksb2b',
    liveUrl: 'https://karan-b2b.vercel.app/',
    architectureImage: '/images/nexis-architecture.png',
    tech: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Node.js',
      'Firebase',
      'AWS S3',
      'SalesQL API',
      'Google Sheets API',
      'Tailwind CSS',
      'REST APIs',
    ],
    metrics: [
      { label: 'PIPELINE', value: '10%–100% Probability' },
      { label: 'ENRICHMENT', value: 'Automated SalesQL' },
      { label: 'DELIVERY', value: 'Milestone Tracking' },
      { label: 'DEPLOYMENT', value: 'Vercel Production' },
    ],
    highlights: [
      'Insights & Integrations: Sales prospecting (ProspectorTab) & SalesQL server enrichment',
      'Sales Workflow: Weighted probability stages (10% to 100%) and multi-touch outreach records',
      'Outreach Engine: Dynamic email composer, attachment manager, and scheduled dispatch',
      'Billing & Delivery: Proposal parser, delivery management, and real-time billing records',
      'Cloud Services: AWS S3 documents storage & Firebase realtime authentication',
    ],
  },
  {
    number: '02',
    title: 'PulseAI — Cross-Platform Mobile Suite',
    category: 'CROSS-PLATFORM MOBILE APP / IOS & ANDROID',
    badge: 'MOBILE ENGINEERING',
    description:
      'Production-grade cross-platform mobile application engineered with React Native and Expo for iOS and Android. Integrates on-device AI smart task assistance, biometric authentication, offline-first SQLite synchronization, background push notification pipelines, and 60 FPS haptic-guided micro-interactions.',
    githubUrl: 'https://github.com/karanverma-lgtm',
    tech: [
      'React Native',
      'Expo',
      'TypeScript',
      'iOS & Android',
      'Node.js',
      'OpenAI API',
      'SQLite',
      'NativeWind',
      'Push Notifications',
      'Biometrics',
    ],
    metrics: [
      { label: 'PLATFORMS', value: 'iOS & Android Native' },
      { label: 'FRAMERATE', value: '60 FPS Fluid' },
      { label: 'STORAGE', value: 'Offline-First SQLite' },
      { label: 'AI ENGINE', value: 'OpenAI Mobile SDK' },
    ],
    highlights: [
      'Single codebase delivering native iOS and Android performance with zero latency compromise',
      'Offline-first data layer with automatic cloud sync when network reconnects',
      'Embedded AI assistant for smart task summarization and automated client dispatches',
    ],
  },
  {
    number: '03',
    title: 'OmniSphere — High-Converting Web Platform',
    category: 'HEADLESS CORPORATE WEB / ULTRA-FAST NEXT.JS',
    badge: 'CLIENT ACQUISITION WEB',
    description:
      'High-converting corporate website and headless web architecture engineered for sub-second page loads, maximum search engine dominance, and high-volume lead capture. Built with Next.js App Router, dynamic server components, automated CRM lead routing, and cinematic responsive design.',
    githubUrl: 'https://github.com/karanverma-lgtm',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Python CRM Sync',
      'SEO / Vitals',
      'HubSpot API',
    ],
    metrics: [
      { label: 'LIGHTHOUSE', value: '99+ Core Vitals' },
      { label: 'ROUTING', value: 'Automated CRM Pipeline' },
      { label: 'RESPONSIVE', value: '100% Mobile & Desktop' },
      { label: 'RENDERING', value: 'Server Components' },
    ],
    highlights: [
      'Sub-second time to interactive optimized for maximum client conversion rates',
      'Direct CRM integration pushing inquiries directly to sales workflows',
      'SEO-engineered hierarchy driving high search placement for commercial keywords',
    ],
  },
  {
    number: '04',
    title: 'FlowPilot AI — Agentic Automation & Workflow Engine',
    category: 'AI WORKFLOW AUTOMATION & CRM INTEGRATIONS',
    badge: 'ENTERPRISE AUTOMATION',
    description:
      'Proprietary enterprise automation backend engineered in Python and Google Cloud / Apps Script. Bridges multi-channel marketing campaigns, automated lead routing, WhatsApp Business API dispatches, virtual-number OTP handling, and real-time revenue attribution modeling across multi-touch touchpoints.',
    githubUrl: 'https://github.com/karanverma-lgtm',
    tech: [
      'Python',
      'Google Apps Script',
      'WhatsApp Business API',
      'OpenAI API',
      'Windsor.ai',
      'HubSpot / Zoho CRM',
      'Webhooks',
      'Docker',
    ],
    metrics: [
      { label: 'EFFICIENCY', value: '35+ Hrs/Wk Automated' },
      { label: 'CHANNELS', value: 'Ads, WhatsApp, CRM' },
      { label: 'ATTRIBUTION', value: 'Multi-Touch ROI' },
      { label: 'PROCESSING', value: 'Event-Driven Webhooks' },
    ],
    highlights: [
      'Automated lead qualification and instant routing cut response times by over 80%',
      'Custom Python ETL pipelines normalizing fragmented spend data across ad networks',
      'Serverless Google Apps Script triggers synchronizing CRM stages with operational teams',
    ],
  },
];

export const clientWebsites: ClientPlatform[] = [
  {
    id: 'globalhelicorp',
    number: '01',
    title: 'Global Vectra Helicorp',
    clientName: 'Global Vectra Helicorp Limited (GVHL)',
    category: 'aviation-logistics',
    categoryLabel: 'AVIATION & OFFSHORE LOGISTICS',
    badge: 'MISSION-CRITICAL DISPATCH',
    liveUrl: 'https://globalhelicorp.vercel.app/',
    summary:
      'High-availability offshore and onshore helicopter mission dispatch architecture for India’s largest private aviation operator. Engineered with sub-second Next.js edge routing, real-time fleet telemetry visualization, sacred Char Dham pilgrimage dispatch engines, and CAR-145 compliant investor governance disclosures.',
    architectureHighlights: [
      'Enterprise Mission Dispatch Architecture & Offshore Helideck Telemetry',
      'Real-time Char Dham & Sacred Pilgrimage Routing Engine with Dynamic Pricing',
      'DGCA & CAR-145 Certified Maintenance & Airworthiness Telemetry Portal',
      'Quarterly Investor Governance, Financial Audit Disclosures & Stakeholder Engine (Q3 FY26)',
      'Sub-second Edge SSR with Next.js App Router & Hardware-Accelerated Layouts',
    ],
    techStack: [
      'Next.js App Router',
      'TypeScript',
      'Tailwind CSS',
      'Fleet Telemetry Engine',
      'SSR Edge Rendering',
      'REST APIs',
    ],
    metrics: [
      { label: 'FLIGHT HOURS', value: '260,000+ Logged' },
      { label: 'FLEET SIZE', value: '28+ Aircraft' },
      { label: 'REGULATORY', value: 'DGCA / CAR-145' },
      { label: 'OPERATIONS', value: 'Offshore & Pilgrimage' },
    ],
    impactStatement:
      'Powers mission-critical aviation dispatch for ONGC offshore energy exploration and high-volume Himalayan pilgrim logistics.',
  },
  {
    id: 'quickmas',
    number: '02',
    title: 'Quickmas Integrated Logistics',
    clientName: 'Quickmas Integrated Logistics Pvt. Ltd.',
    category: 'aviation-logistics',
    categoryLabel: 'GLOBAL FREIGHT & SUPPLY CHAIN',
    badge: '181+ COUNTRIES NETWORK',
    liveUrl: 'https://quickmas.vercel.app/',
    summary:
      'Global multimodal freight forwarding and supply chain intelligence matrix covering ocean, air, rail, and land transport. Features an interactive SVG global logistics node simulator, dynamic container freight rate estimator state machine, cross-border customs clearance automation, and bonded cold-chain warehouse routing.',
    architectureHighlights: [
      'Multimodal Supply Chain State Machine (Air, Ocean FCL/LCL, Overland, Rail)',
      'Interactive SVG Global Logistics Topology Simulator with live node hover feedback',
      'Dynamic Freight Quote & Volumetric Weight Estimator Engine',
      'Cross-Border Customs Brokerage & Bonded Warehousing Telemetry',
      'Hardware-accelerated micro-interactions powered by Framer Motion',
    ],
    techStack: [
      'Next.js',
      'Framer Motion',
      'Interactive SVG Topology',
      'TypeScript',
      'Rate State Machine',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'GLOBAL COVERAGE', value: '181+ Countries' },
      { label: 'ON-TIME RATE', value: '99.8% Reliability' },
      { label: 'MODES', value: 'Sea, Air, Land, Rail' },
      { label: 'WAREHOUSING', value: 'Bonded 3PL & Cold-Chain' },
    ],
    impactStatement:
      'Connects international freight consignments with zero-latency quote generation and global supply chain visibility.',
  },
  {
    id: 'rjspcancerhospital',
    number: '03',
    title: 'RJSP Cancer Hospital & Research Institute',
    clientName: 'RJSP Cancer Hospital (Rohini, Delhi)',
    category: 'healthcare-pharma',
    categoryLabel: 'SUPER-SPECIALTY ONCOLOGY PORTAL',
    badge: 'TERTIARY ONCOLOGY CARE',
    liveUrl: 'https://rjspcancerhospital.vercel.app/',
    summary:
      'Tertiary oncology clinical information and patient triage portal for a premier super-specialty cancer hospital. Integrates high-energy dual-photon LINAC radiotherapy scheduling, 16-slice CT diagnostic workflows, Ayushman Bharat PM-JAY and CGHS TPA cashless insurance automation, and HIPAA-aligned Healthcare Schema.org structured data.',
    architectureHighlights: [
      'Multi-Modality Clinical Oncology Information System (Surgical, Medical, Radiation)',
      'LINAC Dual-Photon Radiotherapy (IMRT / IGRT) Scheduling Matrix',
      '16-Slice CT Diagnostic Staging Workflow & Emergency Protocol System',
      'Ayushman Bharat (PM-JAY) & CGHS TPA Cashless Insurance Verification Funnel',
      'Medical Entity Schema.org Search Engine Optimization Architecture',
    ],
    techStack: [
      'Next.js App Router',
      'Healthcare Schema.org',
      'TypeScript',
      'Emergency Triage State Machine',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'TREATMENT', value: 'Dual-Photon LINAC' },
      { label: 'DIAGNOSTICS', value: '16-Slice CT Scanner' },
      { label: 'EMPANELMENT', value: 'PM-JAY & CGHS' },
      { label: 'CLINICAL CARE', value: 'Multi-Disciplinary Board' },
    ],
    impactStatement:
      'Streamlines patient admission, oncology staging, and emergency consultations for life-saving cancer treatments.',
  },
  {
    id: 'rivpraformulation',
    number: '04',
    title: 'Rivpra Formulations',
    clientName: 'Rivpra Formulations Pvt. Ltd.',
    category: 'healthcare-pharma',
    categoryLabel: 'GLOBAL PHARMACEUTICAL MANUFACTURING',
    badge: 'WHO-cGMP & ISO CERTIFIED',
    liveUrl: 'https://www.rivpraformulation.com/',
    summary:
      'High-throughput pharmaceutical manufacturing catalog and contract manufacturing ecosystem. Displays 800+ finished dosage forms across tablets, injectables, softgels, and beta-lactams under strict WHO-cGMP compliance with novel drug delivery technology (NDDS) showcases and exports across 30+ countries in CIS, Africa, and Latin America.',
    architectureHighlights: [
      'High-Throughput 800+ SKU Pharmaceutical Catalogue Data Pipeline',
      'WHO-cGMP & ISO 9001:2015 Regulatory Quality Compliance Verification Layer',
      'Novel Drug Delivery System (NDDS) Technical Presentation Engine',
      'Global Contract Manufacturing (CRAMS) & Institutional Tender Funnel',
      'Hardware-Accelerated Continuous Multi-Market Marquee Engine',
    ],
    techStack: [
      'Next.js',
      'React',
      'Continuous Marquee Engine',
      'TypeScript',
      'Responsive Mobile App Shell',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'FORMULATIONS', value: '800+ SKUs' },
      { label: 'GLOBAL EXPORTS', value: '30+ Countries' },
      { label: 'COMPLIANCE', value: 'WHO-cGMP & ISO 9001' },
      { label: 'FACILITY', value: 'Sterile & Beta-Lactam' },
    ],
    impactStatement:
      'Drives global institutional drug procurement and international distributor acquisition across three continents.',
  },
  {
    id: 'trendzoneindia',
    number: '05',
    title: 'Trendzone India (TZI)',
    clientName: 'Trendzone India Global Sourcing',
    category: 'enterprise-b2b',
    categoryLabel: 'GLOBAL LUXURY TEXTILES & EXPORT',
    badge: '$1B+ CLIENT RETAIL REVENUE',
    liveUrl: 'https://www.trendzoneindia.com/',
    summary:
      'Global luxury home textiles sourcing and export engine powering top-tier global retailers. Engineered with an interactive 4-stage sourcing lifecycle matrix (Discover, Develop, Assure, Deliver), video hero streaming canvas, dynamic international partner marquee, and sustainable fabric certification telemetry (OEKO-TEX, GOTS).',
    architectureHighlights: [
      'High-Speed B2B Sourcing Lifecycle Engine (Discover, Develop, Assure, Deliver)',
      'Hardware-Accelerated Video Hero Canvas with dynamic stream optimization',
      'Global Brand Marquee showcasing $1B+ retail client integrations across 26,500+ stores',
      'Sustainable Supply Chain Matrix with OEKO-TEX & GOTS Telemetry',
      'Ultra-dense Luxury Furnishings & Handloom Textile Product Taxonomy',
    ],
    techStack: [
      'Next.js',
      'Hardware-Accelerated Video Canvas',
      'Framer Motion',
      'TypeScript',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'CLIENT REVENUE', value: '$1B+ Global Sales' },
      { label: 'RETAIL FOOTPRINT', value: '26,500+ Storefronts' },
      { label: 'CERTIFICATION', value: 'OEKO-TEX & GOTS' },
      { label: 'CATALOGUE', value: 'Luxury Home Furnishings' },
    ],
    impactStatement:
      'Serves as the mission-critical digital interface for multi-million-dollar international textile export contracts.',
  },
  {
    id: 'rajheaven',
    number: '06',
    title: 'Raj Heaven Construction',
    clientName: 'Raj Heaven Construction Pvt. Ltd.',
    category: 'enterprise-b2b',
    categoryLabel: 'WEBGL ARCHITECTURAL REAL ESTATE',
    badge: 'PATNA & RANCHI RERA APPROVED',
    liveUrl: 'https://www.rajheaven.com/',
    summary:
      'High-fidelity 3D architectural real estate portal engineered for premier residential and commercial civil developments in Patna and Ranchi. Integrates Three.js/WebGL spatial elevations, an interactive Vastu Shastra layout evaluator, dynamic unit pricing calculators, and RERA-compliant project timeline telemetry.',
    architectureHighlights: [
      'Three.js / WebGL 3D Architectural Spatial Canvas & Elevation Viewer',
      'Interactive Vastu Shastra Layout & Floor-Plate Evaluator',
      'Multi-Tower Real-Time Project Filtering (Raj Enclave, Raj Villa, Raj Plaza)',
      'Dynamic Unit Cost & EMI Calculator Drawer with Instant Lead Capture',
      'RERA Regulatory Compliance Matrix with Seismic-Resistant RCC Specs',
    ],
    techStack: [
      'Next.js',
      'Three.js / WebGL',
      'Framer Motion',
      'TypeScript',
      'Interactive Calculator State',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'LOCATIONS', value: 'Patna & Ranchi' },
      { label: 'PORTFOLIO', value: 'Gated Luxury & Commercial' },
      { label: 'COMPLIANCE', value: '100% RERA Certified' },
      { label: 'ENGINEERING', value: 'Seismic Zone RCC' },
    ],
    impactStatement:
      'Transforms architectural blueprints into interactive spatial web experiences that double buyer site-visit bookings.',
  },
  {
    id: 'desivideshichaat',
    number: '07',
    title: 'Desi Videshi Chaat (DVC)',
    clientName: 'Desi Videshi Chaat Catering',
    category: 'luxury-ecommerce',
    categoryLabel: 'EVENT GASTRONOMY & BESPOKE CATERING',
    badge: '50+ ARTISAN COUNTERS',
    liveUrl: 'https://www.desivideshichaat.com/',
    summary:
      'Premier bespoke culinary catering platform engineered for luxury destination weddings and corporate galas across Delhi NCR and 12+ states. Features interactive SVG India geo-mapping for regional event coverage, live interactive chaat counter configuration simulations, video showcase theater, and automated booking inquiry pipelines.',
    architectureHighlights: [
      'Interactive SVG India Geo-Topology for multi-state event routing',
      'Live Culinary Counter Simulator with 50+ artisan gastronomy stations',
      'High-Conversion Catering Quote & Guest-Count Funnel',
      'Video Showcase Theatre with seamless backdrop blur overlays',
      'Dynamic Regional Flavor & Traditional Delicacy Selector',
    ],
    techStack: [
      'Next.js',
      'Interactive SVG Topology',
      'Framer Motion',
      'TypeScript',
      'Event Booking Funnel',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'LIVE COUNTERS', value: '50+ Artisan Stations' },
      { label: 'REGIONS SERVED', value: '12+ Indian States' },
      { label: 'EVENTS', value: 'Destination Weddings & Galas' },
      { label: 'SPEED', value: 'Instant Quotation Funnel' },
    ],
    impactStatement:
      'Converts luxury wedding planners with interactive gastronomy counter previews and seamless itinerary estimations.',
  },
  {
    id: 'thefork',
    number: '08',
    title: 'The Fork Luxury Catering',
    clientName: 'The Fork Hospitality (Anil Yadav & Sonu Gahlot)',
    category: 'luxury-ecommerce',
    categoryLabel: '5-STAR BESPOKE GASTRONOMY',
    badge: '10,000+ VIP GUESTS SERVED',
    liveUrl: 'https://thefork.vercel.app/',
    summary:
      'Five-star culinary craftsmanship and luxury ambiance creation web platform for elite destination weddings and corporate conventions across Delhi NCR, Thailand, Ahmedabad, and Dehradun. Engineered with Cormorant Garamond typography, dynamic banquet cost estimators, and radial hover shader micro-interactions.',
    architectureHighlights: [
      'Bespoke Event Cost Estimator State Machine with instant tier calculations',
      'Dynamic VIP Banquet Blueprinting & Culinary Vertical Showcase',
      'Radial Hover Shader Micro-Interactions & Hardware-Accelerated Smooth Scrolling',
      'Cross-Continental Destination Logistics Portal (Delhi, Thailand, Ahmedabad)',
      'High-Fidelity Gastronomy Curation Gallery with responsive lazy-load pipelines',
    ],
    techStack: [
      'Next.js App Router',
      'Framer Motion',
      'Radial Shader Effects',
      'TypeScript',
      'Estimator State Machine',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'GUESTS SERVED', value: '10,000+ VIPs' },
      { label: 'GLOBAL REGIONS', value: '4 Key Hubs (incl. Thailand)' },
      { label: 'QUALITY STATUS', value: '5-Star Food Standards' },
      { label: 'ORIGINALITY', value: '100% Traditional Cuisines' },
    ],
    impactStatement:
      'Positions the catering brand for high-net-worth destination weddings and global corporate summit contracts.',
  },
  {
    id: 'innomedix',
    number: '09',
    title: 'Innomedix Pharma',
    clientName: 'Innomedix Pharma Private Limited',
    category: 'healthcare-pharma',
    categoryLabel: 'PRECISION CLINICAL PHARMACEUTICALS',
    badge: '13-YEAR CLINICAL LEGACY',
    liveUrl: 'https://innomedix.vercel.app/',
    summary:
      'Precision pharmaceutical, nutraceutical, and biotech manufacturing digital portal. Highlights a 13-year clinical heritage (est. 2011, Jaipur) across allopathic drug formulations, nutraceutical sciences, and clinical cleanroom production with ISO 9001:2015 credential validation and real-time distributor enquiry dispatch.',
    architectureHighlights: [
      'Precision Healthcare Information Pipeline with strict clinical taxonomy',
      'Database Initialization Preloader Sequencer with telemetry counter',
      'ISO 9001:2015 Regulatory Cleanroom Compliance Verification Matrix',
      'Multichannel Distributor Telemetry with WhatsApp & Phone routing',
      'Playfair Display & Inter Dual-Type Typography Architecture',
    ],
    techStack: [
      'Next.js App Router',
      'Framer Motion',
      'TypeScript',
      'Preloader Sequencer',
      'ISO Compliance Grid',
      'Tailwind CSS',
    ],
    metrics: [
      { label: 'LEGACY', value: '13 Years (Est. 2011)' },
      { label: 'STANDARDS', value: 'ISO 9001:2015 Certified' },
      { label: 'DIVISIONS', value: 'Pharma, Nutra, Ayurvedic' },
      { label: 'NETWORK', value: 'Pan-India Distribution' },
    ],
    impactStatement:
      'Validates clinical manufacturing rigor and automates institutional B2B procurement inquiries nationwide.',
  },
  {
    id: 'handsofheritage',
    number: '10',
    title: 'Hands of Heritage',
    clientName: 'Hands of Heritage Artisan Keepsakes',
    category: 'luxury-ecommerce',
    categoryLabel: 'ARTISAN KEEPSAKES & DYNAMIC RFQ STORE',
    badge: 'WORLDWIDE DELIVERY • PURE METALS',
    liveUrl: 'https://handsofheritage.vercel.app/',
    summary:
      'Bespoke e-commerce quote and curation platform for handcrafted heirloom wedding favours and corporate keepsakes in pure copper, solid brass, and Makrana marble. Engineered with a React Context-driven Request-For-Quote (RFQ) cart state machine, client-side detail modal hydration, mosaic video hero grid, and mobile app-like bottom navigation.',
    architectureHighlights: [
      'Context-Driven Dynamic RFQ (Request-For-Quote) Cart State Machine (QuoteProvider / QuoteDrawer)',
      'Client-Side Product Detail Modal Hydration with variant selection',
      'Mosaic Video Hero Streaming Shell with auto-playing artisan clips',
      'Multi-Currency Global Logistics & Curated Packaging Showcase (Wax Seals, Velvet)',
      'Mobile App Shell with sticky bottom navigation tabs & toast notifications',
    ],
    techStack: [
      'Next.js App Router',
      'React Context API',
      'Framer Motion',
      'TypeScript',
      'RFQ Cart Engine',
      'Mobile Bottom Bar',
    ],
    metrics: [
      { label: 'MATERIALS', value: 'Pure Copper, Brass & Marble' },
      { label: 'ORDER FORMAT', value: 'Dynamic RFQ Quote Cart' },
      { label: 'DELIVERY', value: 'Worldwide (UK, US, India)' },
      { label: 'CATALOGUE', value: '29+ Artisan Heirlooms' },
    ],
    impactStatement:
      'Digitizes luxury wedding favour gifting with an interactive multi-item quote cart and international fulfillment.',
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedArchProject, setSelectedArchProject] = useState<Project | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<ClientPlatform | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'aviation-logistics' | 'healthcare-pharma' | 'enterprise-b2b' | 'luxury-ecommerce'>('all');

  const filteredPlatforms = clientWebsites.filter((p) => {
    if (activeTab === 'all') return true;
    return p.category === activeTab;
  });

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / CLIENT WORK &amp; PLATFORMS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                PRODUCTION PLATFORMS.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                AI WEB &amp; MOBILE APPS.
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Explore live enterprise deployments, architecture blueprints, and commercial websites engineered for high reliability and maximum conversion.
          </p>
        </motion.div>

        {/* ================= PART 1: FLAGSHIP ARCHITECTURAL STACK ================= */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]">
              FLAGSHIP ENGINEERING BLUEPRINTS
            </span>
          </div>

          <ScrollStack
            itemDistance={20}
            itemScale={0.035}
            itemStackDistance={28}
            stackPosition="15%"
            scaleEndPosition="6%"
            baseScale={0.88}
            useWindowScroll={true}
          >
            {flagshipProjects.map((project) => (
              <ScrollStackItem key={project.title}>
                <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                  
                  {/* Top Gold Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                  {/* Corner Minimal L-Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                  {/* Big Background Watermark Number */}
                  <span
                    className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.number}
                  </span>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Left Column (7 Cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5 mb-4">
                          <span className="text-xs font-mono font-bold text-[#D4AF37]">
                            {project.number} //
                          </span>
                          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A8988B]">
                            {project.category}
                          </span>
                          {project.badge && (
                            <span className="px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#F3DBB3] rounded-sm">
                              {project.badge}
                            </span>
                          )}
                        </div>

                        <h3
                          className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.9]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        <p
                          className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.85] tracking-wide mb-6 max-w-2xl"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.description}
                        </p>

                        {/* Key Engineering Highlights */}
                        {project.highlights && (
                          <div className="mb-6 space-y-2 border-l border-[#D4AF37]/40 pl-3.5">
                            {project.highlights.slice(0, 3).map((item, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-[11px] text-[#A8988B]">
                                <span className="text-[#D4AF37] font-mono">▸</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-[#8C6D4F]/25">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column (5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                      <div className="space-y-2.5">
                        <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block mb-2">
                          // ARCHITECTURE METRICS
                        </span>
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                          >
                            <span className="text-[10px] font-mono text-[#A8988B]">
                              {m.label}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-[#F7E7C4]">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-col gap-2.5 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 border border-[#D4AF37] bg-[#D4AF37] text-black hover:bg-[#F3DBB3] text-[11px] font-semibold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>LAUNCH LIVE SAAS APP</span>
                            <span className="text-xs">↗</span>
                          </a>
                        )}

                        {project.architectureImage && (
                          <button
                            type="button"
                            onClick={() => setSelectedArchProject(project)}
                            className="inline-flex items-center justify-center space-x-2.5 px-6 py-3 border border-[#8C6D4F]/60 bg-[#16120E] hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                            <span className="text-xs">🔍</span>
                          </button>
                        )}

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 border border-[#8C6D4F]/30 bg-transparent hover:border-[#8C6D4F] text-[#BFA895] hover:text-white text-[10.5px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>VIEW SOURCE (GITHUB)</span>
                          <span className="text-xs">↗</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        {/* ================= PART 2: 10 LIVE CLIENT WEB PLATFORMS SHOWCASE ================= */}
        <div className="mt-28 pt-20 border-t border-[#8C6D4F]/30">
          
          {/* Eyebrow Header for Client Deployments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-4"
          >
            <span
              className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              03 / LIVE CLIENT PLATFORMS
            </span>
            <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
          </motion.div>

          {/* Section Headline */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div>
              <h3
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] tracking-tight uppercase leading-[0.88] select-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
                  10 COMMERCIAL SITES
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
                  &amp; ENTERPRISE DEPLOYMENTS.
                </span>
              </h3>
            </div>

            <p
              className="text-xs sm:text-sm font-light text-[#A8988B] max-w-md mt-4 lg:mt-0 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              All 10 websites built and delivered by Karan Verma. Inspect real-world systems spanning aviation telemetry, global logistics, super-specialty oncology, pharmaceutical manufacturing, and luxury e-commerce.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-4 border-b border-[#8C6D4F]/20">
            {[
              { id: 'all', label: 'ALL DEPLOYMENTS (10)' },
              { id: 'aviation-logistics', label: 'AVIATION & LOGISTICS' },
              { id: 'healthcare-pharma', label: 'HEALTHCARE & PHARMA' },
              { id: 'enterprise-b2b', label: 'ENTERPRISE B2B' },
              { id: 'luxury-ecommerce', label: 'LUXURY & E-COMMERCE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-sm text-[10.5px] font-mono tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F3DBB3] shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                    : 'border-[#8C6D4F]/30 bg-[#0A0807]/70 text-[#9C8C7E] hover:border-[#8C6D4F] hover:text-[#EAD8C7]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 10 Client Websites Interactive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {filteredPlatforms.map((platform) => (
              <motion.div
                key={platform.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-[#8C6D4F]/40 bg-[#0A0807] p-6 sm:p-8 flex flex-col justify-between group overflow-hidden transition-all duration-500 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
              >
                {/* Top Subtle Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-mono font-bold text-[#D4AF37]">
                        {platform.number} //
                      </span>
                      <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#A8988B]">
                        {platform.categoryLabel}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[9px] font-mono text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Title & Client Name */}
                  <div className="mb-4">
                    <span className="px-2 py-0.5 text-[8.5px] font-mono tracking-widest uppercase bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] rounded-sm inline-block mb-2">
                      {platform.badge}
                    </span>
                    <h4
                      className="text-3xl sm:text-4xl text-white font-normal uppercase leading-[0.95] group-hover:text-[#F7E7C4] transition-colors"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {platform.title}
                    </h4>
                    <p className="text-[11px] font-mono text-[#8C6D4F] mt-1">
                      {platform.clientName}
                    </p>
                  </div>

                  {/* Executive Architectural Summary */}
                  <p
                    className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-relaxed mb-6"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {platform.summary}
                  </p>

                  {/* Key Metrics Matrix */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {platform.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-2.5 rounded-sm border border-[#8C6D4F]/20 bg-[#120E0B] flex flex-col justify-center"
                      >
                        <span className="text-[9px] font-mono text-[#8C6D4F] uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-[11px] font-mono font-medium text-[#F7E7C4] truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* High-End Architectural Highlights */}
                  <div className="mb-6 space-y-1.5 border-l-2 border-[#D4AF37]/50 pl-3">
                    {platform.architectureHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-1.5 text-[10.5px] text-[#A8988B]">
                        <span className="text-[#D4AF37] font-mono">▸</span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 pb-5 border-t border-[#8C6D4F]/20">
                    {platform.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-[9px] font-mono uppercase rounded-sm border border-[#8C6D4F]/30 bg-[#14100D] text-[#C9BAAD]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-2">
                    <a
                      href={platform.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-5 py-3 border border-[#D4AF37] bg-[#D4AF37] text-black hover:bg-[#F3DBB3] text-[10.5px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)] rounded-sm"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>VISIT LIVE PLATFORM</span>
                      <span className="text-xs">↗</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedPlatform(platform)}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-3 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] text-[#D5CBC0] hover:text-white text-[10.5px] font-mono tracking-wider uppercase transition-colors rounded-sm"
                    >
                      <span>TECH SPECS</span>
                      <span className="text-xs">🔍</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= ARCHITECTURE DIAGRAM MODAL (NEXIS B2B) ================= */}
      <AnimatePresence>
        {selectedArchProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedArchProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0C0A08] border border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#8C6D4F]/30 mb-6">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-1">
                    <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
                    <span>•</span>
                    <span>{selectedArchProject.title}</span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl text-white font-normal uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    NEXIS B2B SAAS PLATFORM ARCHITECTURE
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedArchProject(null)}
                  className="px-3 py-1.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-xs font-mono text-[#A8988B] hover:text-white transition-colors rounded-sm"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Architecture Diagram Image */}
              <div className="relative rounded-lg overflow-hidden border border-[#8C6D4F]/40 bg-[#050403] p-2 sm:p-4 mb-6">
                <img
                  src={selectedArchProject.architectureImage}
                  alt={`${selectedArchProject.title} Architecture Diagram`}
                  className="w-full h-auto max-h-[55vh] object-contain mx-auto filter contrast-105"
                />
              </div>

              {/* Architecture Breakdown Layers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#14100D]">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                    1. INSIGHTS &amp; INTEGRATIONS
                  </span>
                  <p className="text-[11px] text-[#A8988B] leading-relaxed">
                    Sales prospecting via <code className="text-[#EAD8C7]">ProspectorTab.tsx</code>, SalesQL server enrichment engine, and Google Sheets bi-directional sync.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#14100D]">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                    2. SALES WORKFLOW PIPELINE
                  </span>
                  <p className="text-[11px] text-[#A8988B] leading-relaxed">
                    6-Stage probability weighting (10% to 100%) in <code className="text-[#EAD8C7]">stages.ts</code>, prospect tracking with <code className="text-[#EAD8C7]">leadsService.ts</code>.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#14100D]">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                    3. OUTREACH &amp; EMAIL DISPATCH
                  </span>
                  <p className="text-[11px] text-[#A8988B] leading-relaxed">
                    Email composer, attachment manager, scheduled campaign engine (<code className="text-[#EAD8C7]">emailService.ts</code>) &amp; template store.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#14100D]">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                    4. BILLING &amp; DELIVERY
                  </span>
                  <p className="text-[11px] text-[#A8988B] leading-relaxed">
                    Automated proposal import, delivery milestone manager (<code className="text-[#EAD8C7]">deliveryService.ts</code>), and billing tracking.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#14100D]">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                    5. SHARED CLOUD SERVICES
                  </span>
                  <p className="text-[11px] text-[#A8988B] leading-relaxed">
                    AWS S3 bucket object storage (<code className="text-[#EAD8C7]">s3.ts</code>), document library &amp; Firebase realtime authentication services.
                  </p>
                </div>

                <div className="p-3.5 rounded-sm border border-[#D4AF37]/40 bg-[#18130E] flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                      LIVE DEPLOYMENT
                    </span>
                    <p className="text-[11px] text-[#F3DBB3] leading-relaxed">
                      Deployed and verified on Vercel with live pipeline synchronization.
                    </p>
                  </div>
                  {selectedArchProject.liveUrl && (
                    <a
                      href={selectedArchProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center space-x-1.5 text-[10.5px] font-mono text-[#D4AF37] hover:text-white uppercase"
                    >
                      <span>Open Live App</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#8C6D4F]/30">
                {selectedArchProject.liveUrl && (
                  <a
                    href={selectedArchProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#F3DBB3] transition-colors"
                  >
                    Open Live Application ↗
                  </a>
                )}
                <a
                  href={selectedArchProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-[#8C6D4F] text-[#EAD8C7] text-xs tracking-wider uppercase rounded-sm hover:border-[#D4AF37] hover:text-white transition-colors"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CLIENT PLATFORM TECHNICAL DEEP DIVE MODAL ================= */}
      <AnimatePresence>
        {selectedPlatform && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPlatform(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0C0A08] border border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-[#8C6D4F]/30 mb-6">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase mb-1">
                    <span>PRODUCTION SPECIFICATION</span>
                    <span>•</span>
                    <span>{selectedPlatform.number} // {selectedPlatform.categoryLabel}</span>
                  </div>
                  <h3
                    className="text-3xl sm:text-4xl text-white font-normal uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {selectedPlatform.title}
                  </h3>
                  <p className="text-xs font-mono text-[#A8988B] mt-0.5">
                    Client Organization: {selectedPlatform.clientName}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPlatform(null)}
                  className="px-3 py-1.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-xs font-mono text-[#A8988B] hover:text-white transition-colors rounded-sm"
                >
                  ✕ CLOSE
                </button>
              </div>

              {/* Status & Impact */}
              <div className="p-4 rounded-sm border border-[#D4AF37]/30 bg-[#16120E] mb-6">
                <span className="text-[10px] font-mono text-[#D4AF37] uppercase block mb-1">
                  COMMERCIAL BUSINESS IMPACT &amp; SCALE
                </span>
                <p className="text-xs sm:text-sm text-[#F3DBB3] leading-relaxed">
                  {selectedPlatform.impactStatement}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {selectedPlatform.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-sm border border-[#8C6D4F]/30 bg-[#120E0B]">
                    <span className="text-[9.5px] font-mono text-[#8C6D4F] block mb-1">
                      {m.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-white font-medium">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Comprehensive Architecture Highlights */}
              <div className="mb-6">
                <span className="text-[10.5px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-3">
                  HIGH-END TECHNICAL ARCHITECTURE &amp; CAPABILITIES:
                </span>
                <div className="space-y-2.5">
                  {selectedPlatform.architectureHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-sm border border-[#8C6D4F]/20 bg-[#100D0A]">
                      <span className="text-[#D4AF37] font-mono mt-0.5">0{idx + 1}.</span>
                      <p className="text-xs text-[#E0D3C5] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <span className="text-[10px] font-mono text-[#8C6D4F] uppercase tracking-wider block mb-2">
                  ENGINEERING TECHNOLOGIES EMPLOYED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPlatform.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[10px] font-mono uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#18130E] text-[#F3DBB3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#8C6D4F]/30">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Production Live Deployment</span>
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedPlatform(null)}
                    className="px-4 py-2 border border-[#8C6D4F]/40 text-xs font-mono text-[#A8988B] hover:text-white uppercase transition-colors"
                  >
                    Back to Portfolio
                  </button>
                  <a
                    href={selectedPlatform.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-[#F3DBB3] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  >
                    Open Live Website ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;