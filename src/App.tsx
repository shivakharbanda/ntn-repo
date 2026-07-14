/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Check, 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  FileCheck, 
  Bookmark, 
  Globe, 
  Star, 
  Users, 
  Building2, 
  GraduationCap, 
  FileSpreadsheet, 
  Clock, 
  Locate,
  MessageSquare,
  X
} from 'lucide-react';

import Header from './components/Header';
import Calculator from './components/Calculator';
import FormModal from './components/FormModal';
import Footer from './components/Footer';
import { DOCUMENT_TYPES, COUNTRIES, FAQS, ADVANTAGES } from './data';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledDoc, setPrefilledDoc] = useState('');
  const [prefilledCountry, setPrefilledCountry] = useState('');
  
  // Interactive Tabs & Accordions States
  const [activeFAQ, setActiveFAQ] = useState<string | null>('faq-1');
  const [activeWhoTab, setActiveWhoTab] = useState<'students' | 'employment' | 'exporters' | 'corporate'>('students');
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Middle East' | 'Asia' | 'Europe' | 'Africa' | 'Americas'>('All');
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  
  // Active detail modal for countries (displays quick stats)
  const [selectedCountryDetail, setSelectedCountryDetail] = useState<any>(null);

  const handleOpenQuote = (docName: string = '', countryName: string = '') => {
    setPrefilledDoc(docName);
    setPrefilledCountry(countryName);
    setIsQuoteOpen(true);
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter countries based on region and search query
  const filteredCountries = React.useMemo(() => {
    return COUNTRIES.filter(c => {
      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
      const matchesSearch = c.name.toLowerCase().includes(countrySearchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, countrySearchQuery]);

  // Who We Serve data mapping
  const whoWeServeData = {
    students: {
      title: 'International Students',
      icon: <GraduationCap className="w-8 h-8 text-[#d4af37]" />,
      heading: 'Seamless University Attestations for Study Abroad',
      description: 'Planning to enroll in an international university or secure a student visa? We expedite the verification of your educational degrees, transcripts, and diplomas, ensuring compliance with global universities and immigration departments.',
      benefits: [
        'Direct university/college verifications',
        'State GAD & regional HRD attestation support',
        'WES & foreign evaluation credentials support',
        'Certified English translation services'
      ],
      cta: 'Get Student Discount Quote'
    },
    employment: {
      title: 'Employment Visa Applicants',
      icon: <Users className="w-8 h-8 text-[#d4af37]" />,
      heading: 'Rapid Legalizations for Overseas Employment',
      description: 'Securing a work permit overseas requires verified educational certificates and police clearances. We provide speedy, end-to-end MEA and Embassy attestations to prevent visa delays and launch your international career safely.',
      benefits: [
        'MEA Attestation and Apostille stamps within 3 days',
        'Gulf Embassy (UAE, Saudi, Qatar, Kuwait) priority lanes',
        'Secure courier pickup and delivery to your home town',
        'Official Police Clearance Certificate (PCC) verification'
      ],
      cta: 'Request Professional Quote'
    },
    exporters: {
      title: 'Exporters & Manufacturers',
      icon: <FileSpreadsheet className="w-8 h-8 text-[#d4af37]" />,
      heading: 'Commercial Attestations to Support Global Trade',
      description: 'Before shipping goods globally, export documents must be legalized. We provide official Chamber of Commerce and Embassy attestations for invoices, certificates of origin, and manufacturing guidelines.',
      benefits: [
        'Chamber of Commerce fast-track authentication',
        'Certificate of Origin & Commercial Invoice legalization',
        'GMP & Free Sale Certificate processing',
        'Specialized exporter priority support desk'
      ],
      cta: 'Get Exporter Quote'
    },
    corporate: {
      title: 'Corporate Entities',
      icon: <Building2 className="w-8 h-8 text-[#d4af37]" />,
      heading: 'Enterprise Legal Documentation Support',
      description: 'Forming foreign branches, issuing power of attorney to foreign representatives, or opening international bank accounts requires corporate legalization. Our legal coordinators manage your documentation meticulously.',
      benefits: [
        'Power of Attorney (POA) legal stamps',
        'MOA & AOA board resolution validations',
        'Company registration & incorporation certificates',
        'NDA-level document protection and security'
      ],
      cta: 'Talk to Corporate Consultant'
    }
  };

  const handleCountryCardClick = (country: any) => {
    setSelectedCountryDetail(country);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-amber-500/30 selection:text-[#1e3a8a]">
      
      {/* Dynamic SEO Tags Simulation */}
      <title>Embassy Attestation India | MEA Apostille & Document Legalization Services</title>
      <meta name="description" content="Get fast and reliable Embassy Attestation, MEA Apostille, Certificate Attestation and Document Legalization services in India. Educational, Personal & Commercial Documents. PAN India Support." />

      {/* Header and navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} onScrollTo={handleScrollTo} />

      {/* Floating Call to Action Widget for Mobile/Tablet */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2.5 sm:hidden" id="floating-action-widgets">
        <a 
          href="https://wa.me/919818001166?text=Hi%2C%20I%20need%20assistance%20with%20document%20attestation."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          id="float-whatsapp"
          title="WhatsApp Expert"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        <a 
          href="tel:+919818001166" 
          className="bg-[#1e3a8a] hover:bg-[#1d3557] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
          id="float-phone"
          title="Call Now"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 lg:py-24 overflow-hidden border-b-8 border-slate-900" id="hero-section">
        
        {/* Subtle geometric abstract accents */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 border-8 border-white"></div>
          <div className="absolute -bottom-12 -right-12 w-96 h-96 border-4 border-dashed border-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero text panel */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-sm py-1 px-3.5 text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                MEA Consular submission approved Agency
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-tight uppercase" id="hero-heading">
                Embassy Attestation India <br />
                <span className="text-amber-400 block mt-1 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-sans font-light tracking-wide lowercase">
                  trusted mea apostille & legalization across india.
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed uppercase tracking-wide font-medium">
                Planning to study abroad, work overseas, expand your business internationally, or migrate with your family? 
                <strong className="text-white font-bold"> Embassy Attestation India</strong> provides complete, secure, and expedited MEA Apostille, Embassy Attestation, and Document Legalization Services for Educational, Personal, and Commercial Documents.
              </p>

              {/* Service list checks */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 max-w-xl text-[10px] sm:text-xs pt-2 uppercase font-semibold tracking-wider text-slate-400" id="hero-services-list">
                {[
                  'MEA Apostille', 'Embassy Attestation', 'Embassy Legalization',
                  'Educational Certificate Attestation', 'Commercial Document Attestation',
                  'Personal Document Attestation', 'PCC Attestation', 'Translation Assistance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4" id="hero-ctas">
                <button
                  onClick={() => handleScrollTo('interactive-calculator')}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  id="hero-quote-btn"
                >
                  <span>Estimate Costs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919818001166"
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
                  id="hero-call-btn"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20get%20information%20about%20document%20attestation%20and%20apostille."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all"
                  id="hero-whatsapp-btn"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

              {/* Small credentials bar */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <strong className="text-white">4.9/5 Rating</strong> (10,000+ Verifications)
                </span>
                <span className="hidden sm:inline">•</span>
                <span>PAN India Courier</span>
                <span className="hidden sm:inline">•</span>
                <span>256-Bit SSL Locker</span>
              </div>

            </div>

            {/* Hero Interactive Calculator panel */}
            <div className="lg:col-span-5 w-full">
              <Calculator onStartProcess={(doc, country) => handleOpenQuote(doc, country)} />
            </div>

          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white border-b-2 border-slate-900 py-8" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-slate-900">50,000+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Documents Verified</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-slate-900">100%</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Approved Legality</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-slate-900">100+</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Global Destinations</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl sm:text-4xl text-slate-900">24/7</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-1 tracking-widest">Secure Hotline</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-slate-50/50 border-b-2 border-slate-900" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Complete Legal Solutions</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-2 uppercase tracking-tight">
              Our Professional Legalization Services
            </h2>
            <div className="w-12 h-1.5 bg-slate-900 mx-auto mt-4"></div>
            <p className="text-[11px] text-slate-500 mt-4 leading-relaxed uppercase font-semibold tracking-wide">
              We guide students, families, business representatives, and exporters through the complex, multi-tiered governmental authentication framework. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* MEA Apostille Services */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-mea-apostille">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">MEA Apostille Services</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  The Ministry of External Affairs (MEA) Apostille certifies Indian public documents for official use in countries that are members of the Hague Apostille Convention. Avoid multiple embassy queues.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Degree & Diploma Certificates</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Birth & Marriage Certificates</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Police Clearance Certificates (PCC)</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Commercial Export Papers</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('MEA Apostille')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire MEA Apostille
              </button>
            </div>

            {/* Embassy Attestation Services */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-embassy-attestation">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Embassy Attestation Services</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  Embassy Attestation is required for countries that do not accept Apostille and instead demand detailed verification through their embassy or consulate in India. We coordinate directly with foreign consulates.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> UAE, Saudi Arabia & Qatar</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Kuwait, Oman & Bahrain</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Vietnam, Malaysia & China</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Egypt, Morocco & Jordan</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('Embassy Attestation')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire Embassy Seal
              </button>
            </div>

            {/* Educational Certificate Attestation */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-educational-attestation">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Educational Attestation</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  Supporting students and global professionals pursuing higher education and corporate employment abroad. Complete handling of state HRD validations and academic verification letters.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> University Degrees & Diplomas</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Transcript Books & Marks Sheets</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Engineering & Medical Degrees</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Pharmacy & MBA Certificates</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('Degree Certificate')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire Educational
              </button>
            </div>

            {/* Personal Document Attestation */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-personal-attestation">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Personal Document Attestation</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  Ideal for family visas, residency migration, overseas marriage registrations, and foreign legal representations. We ensure flawless SDM and Home Department legal approvals.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Government Birth Certificates</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Marriage Certificates</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Single Status Cenomar Affidavits</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Divorce & Death Certificates</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('Birth Certificate')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire Personal
              </button>
            </div>

            {/* Commercial Document Attestation */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-commercial-attestation">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">Commercial Document Attestation</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  Helping exporters, manufacturers, and corporate bodies expand globally. Complete validation with the Chamber of Commerce and foreign ministry consular divisions for trade compliance.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Commercial Invoice & Packing List</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Certificate of Origin & Free Sale</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Board Resolutions & MOA / AOA</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Corporate Power of Attorney (POA)</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('Commercial Invoice')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire Commercial
              </button>
            </div>

            {/* PCC & Translation Assistance */}
            <div className="bg-white rounded-sm p-6 border-2 border-slate-900 shadow-sm hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] transition-all flex flex-col justify-between" id="service-pcc-translation">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-sm flex items-center justify-center text-amber-500 mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mb-2 uppercase tracking-tight">PCC & Translation Assistance</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed font-medium">
                  Fast Police Clearance Certificate legal stampings coupled with professional, embassy-authorized translations (Arabic, German, French, Chinese, Spanish) matching visa requirement guidelines.
                </p>
                <div className="space-y-1.5 text-[10px] text-slate-700 mb-6 font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Passport Office PCC Stamping</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> State/Local Police PCC validation</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Certified Embassy Translations</div>
                  <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Foreign Ministry Notarized Slips</div>
                </div>
              </div>
              <button 
                onClick={() => handleOpenQuote('PCC Attestation')}
                className="w-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
              >
                Inquire PCC & Translation
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE SERVE SECTION WITH TABS */}
      <section className="py-20 bg-white border-b-2 border-slate-900" id="who-we-serve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Tailored Workflows</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-2 uppercase tracking-tight">
              Who We Serve Across India
            </h2>
            <div className="w-12 h-1.5 bg-slate-900 mx-auto mt-4"></div>
            <p className="text-[11px] text-slate-500 mt-4 leading-relaxed uppercase font-semibold tracking-wide">
              We customize the attestation pathway depending on your status to guarantee complete accuracy, maximum speed, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav Toggles */}
            <div className="lg:col-span-4 space-y-3">
              {(Object.keys(whoWeServeData) as Array<keyof typeof whoWeServeData>).map((key) => {
                const item = whoWeServeData[key];
                const isActive = activeWhoTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveWhoTab(key)}
                    className={`w-full p-4 rounded-sm border-2 text-left transition-all flex items-center gap-4 cursor-pointer ${
                      isActive 
                        ? 'bg-slate-900 border-slate-900 text-white shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                    id={`who-tab-btn-${key}`}
                  >
                    <div className={`p-2 rounded-sm ${isActive ? 'bg-slate-800 text-amber-500' : 'bg-slate-100 text-slate-700'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                      <p className={`text-[9px] font-semibold mt-0.5 uppercase tracking-wider ${isActive ? 'text-amber-400' : 'text-slate-400'}`}>View custom pathway</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Display Panel */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-sm border-2 border-slate-900 min-h-[380px] flex flex-col justify-between shadow-sm" id="who-serve-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWhoTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 text-amber-500 rounded-sm">
                      {whoWeServeData[activeWhoTab].icon}
                    </div>
                    <div>
                      <span className="text-[9px] tracking-widest text-amber-500 font-bold uppercase">Target Segment Workflow</span>
                      <h3 className="font-display font-black text-xl text-slate-900 mt-0.5 uppercase tracking-tight">
                        {whoWeServeData[activeWhoTab].heading}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {whoWeServeData[activeWhoTab].description}
                  </p>

                  <div className="bg-slate-50 rounded-sm p-5 border border-slate-200">
                    <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Key Solutions Provided:</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 uppercase text-[10px] tracking-wide font-bold text-slate-700">
                      {whoWeServeData[activeWhoTab].benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">🛡️ Complies with MEA & foreign regulatory standards.</span>
                <button
                  onClick={() => handleOpenQuote(whoWeServeData[activeWhoTab].title)}
                  className="bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer w-full sm:w-auto text-center"
                  id="who-serve-cta"
                >
                  {whoWeServeData[activeWhoTab].cta}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* COUNTRIES WE SUPPORT (INTERACTIVE EXPLORER) */}
      <section className="py-20 bg-white" id="countries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Global Verification Directory</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1e3a8a] mt-2">
              Countries We Support Globally
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              We process document authentications for over 100 countries. Grouped below by key global regions. Select a country to view quick requirements.
            </p>
          </div>

          {/* Search and regional filter panel */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Regions Tabs */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto justify-center">
              {(['All', 'Middle East', 'Asia', 'Europe', 'Africa', 'Americas'] as const).map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedRegion === region
                      ? 'bg-[#1e3a8a] text-white shadow-sm'
                      : 'bg-white border border-gray-100 text-gray-500 hover:bg-gray-100'
                  }`}
                  id={`country-region-tab-${region.replace(' ', '-')}`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Live Search bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                placeholder="Search Country (e.g. UAE, France)..."
                value={countrySearchQuery}
                onChange={(e) => setCountrySearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-8 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-[#1e3a8a]"
                id="country-search-bar"
              />
              <span className="absolute right-3 top-2.5 text-gray-400 text-xs">🔍</span>
            </div>

          </div>

          {/* Grid of Countries */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5" id="countries-grid">
            {filteredCountries.map((country, idx) => (
              <div
                key={idx}
                onClick={() => handleCountryCardClick(country)}
                className="bg-white hover:bg-slate-50 border border-gray-100 hover:border-blue-100 p-4 rounded-xl shadow-xs transition-all text-center cursor-pointer hover:translate-y-[-1px] group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#1e3a8a] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-[#1e3a8a] font-bold text-sm truncate">{country.name}</p>
                <p className="text-[9px] text-gray-400 font-semibold tracking-wider uppercase mt-1">{country.region}</p>
                <span className={`inline-block text-[8px] font-extrabold px-1.5 py-0.5 rounded-full mt-2 uppercase ${
                  country.requiresApostille 
                    ? 'bg-amber-500/10 text-amber-700' 
                    : 'bg-indigo-500/10 text-indigo-700'
                }`}>
                  {country.requiresApostille ? 'Apostille' : 'Embassy'}
                </span>
              </div>
            ))}

            {filteredCountries.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-400 text-xs font-semibold">
                No matching countries found. Please try another search or call our help desk for direct inquiries.
              </div>
            )}
          </div>

          {/* Quick country details card popup/drawer drawer */}
          {selectedCountryDetail && (
            <div className="mt-8 bg-[#f0f4f9] border border-blue-50 rounded-2xl p-6 relative animate-fadeIn" id="country-detail-panel">
              <button
                onClick={() => setSelectedCountryDetail(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 bg-white hover:bg-gray-100 rounded-full shadow-xs"
                id="close-country-detail"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div>
                  <span className="text-[10px] tracking-wider font-extrabold text-[#d4af37] bg-white border border-amber-500/10 px-2.5 py-0.5 rounded-full uppercase">
                    Requirements Summary
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-gray-800 mt-2">{selectedCountryDetail.name} Legalization</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Region: {selectedCountryDetail.region}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-xs">
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Legal Channel</span>
                    <span className="text-xs font-bold text-gray-800 mt-0.5 block">
                      {selectedCountryDetail.requiresApostille ? 'Hague Apostille' : 'Consular Attestation'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Average Duration</span>
                    <span className="text-xs font-bold text-gray-800 mt-0.5 block">{selectedCountryDetail.baseTimelineDays} Working Days</span>
                  </div>
                  <div className="col-span-2 border-t border-gray-50 pt-2 mt-1">
                    <span className="text-[9px] text-gray-400 font-bold uppercase block">Embassy Fee Estimate</span>
                    <span className="text-xs font-bold text-emerald-700 mt-0.5 block">
                      {selectedCountryDetail.requiresApostille ? 'Standard MEA Duties Apply' : selectedCountryDetail.embassyFeeEstimate}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={`https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20legalize%20my%20documents%20for%20${selectedCountryDetail.name}.%20Please%20share%20fees.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                    id="country-detail-whatsapp"
                  >
                    Discuss on WhatsApp
                  </a>
                  <button
                    onClick={() => handleOpenQuote('', selectedCountryDetail.name)}
                    className="bg-[#1e3a8a] hover:bg-[#1d3557] text-white py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                    id="country-detail-quote"
                  >
                    Start Attestation Flow
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* WHY CHOOSE US (OUR ADVANTAGES) */}
      <section className="py-20 bg-slate-50/50 border-y border-gray-100" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Complete Peace of Mind</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1e3a8a] mt-2">
              Why Choose Embassy Attestation India?
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Every document represents an important milestone in your life or business. We understand the high importance of timely, accurate, and secure document authentication, delivering complete support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between" id={`adv-card-${idx}`}>
                <div>
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-700 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-[#1e3a8a] mb-1.5">{adv.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed text-justify">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS TIMELINE */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Transparent Timeline</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1e3a8a] mt-2">
              Our Smooth 6-Step Processing Flow
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
            <p className="text-sm text-gray-500 mt-4">
              From our doorstep pickup to final delivery, we keep your documents secure and updated in real-time.
            </p>
          </div>

          <div className="relative border-l-2 border-dashed border-gray-100 pl-8 ml-4 sm:ml-8 md:ml-12 space-y-12 max-w-3xl mx-auto" id="timeline-flow">
            
            {/* Step 1 */}
            <div className="relative" id="timeline-step-1">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">Share Scanned Documents</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take a clean photo or scan of your documents and send them to our verification officers via WhatsApp or Email. Our experts perform initial formatting checks instantly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative" id="timeline-step-2">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">Receive Guidance & Quote</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Receive clear professional guidance, customized roadmap options, and a completely transparent quotation explaining all government and courier charges.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative" id="timeline-step-3">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">Submit Documents Securely</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Submit your original physical documents safely through our insured doorstep courier pickup, or visit our Head Office in Malviya Nagar, New Delhi.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative" id="timeline-step-4">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">Verification Phase</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our documentation specialists cross-verify credentials with state authorities, universities, chambers, and Notary Public boards to ensure seamless execution.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative" id="timeline-step-5">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">MEA / Embassy Processing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We present the documents directly at the MEA Consular Division counter and the respective foreign embassy or consulate to acquire official stamps.
              </p>
            </div>

            {/* Step 6 */}
            <div className="relative" id="timeline-step-6">
              <div className="absolute -left-14 top-0.5 w-10 h-10 rounded-full bg-[#1e3a8a] text-[#d4af37] border-4 border-white shadow-md flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h3 className="font-sans font-bold text-base text-[#1e3a8a] mb-1">Secure Doorstep Delivery</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Once attested, your documents are packaged in heavy-duty weatherproof filing sleeves and dispatched via tracking-equipped premium courier services to your home or office address.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50/50 border-y border-gray-100" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Help Center</span>
            <h2 className="font-serif font-bold text-3xl text-[#1e3a8a] mt-2">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
          </div>

          <div className="space-y-3.5" id="faq-accordions">
            {FAQS.map((faq) => {
              const isOpen = activeFAQ === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-xl border border-gray-100 shadow-xs overflow-hidden"
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-[#1e3a8a] flex justify-between items-center gap-4 cursor-pointer hover:bg-gray-50/55 transition-colors"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="p-4 pt-0 border-t border-gray-50 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify whitespace-pre-line" id={`faq-answer-${faq.id}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* READY TO GET STARTED / CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] text-white text-center relative overflow-hidden" id="cta-get-started">
        
        {/* Subtle decorative vector lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-64 h-64 border-8 border-white rounded-full"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 border-8 border-white rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white">
            Ready to Authenticate Your Documents?
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto">
            Whether you are pursuing higher education overseas, accepting a lucrative international job offer, relocating with your family, or exporting commercial goods, Embassy Attestation India is here to simplify your document legalization journey.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => handleOpenQuote()}
              className="bg-[#d4af37] hover:bg-[#b8901c] text-[#0f172a] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              id="cta-quote-btn"
            >
              Get Free Consultation Quotation
            </button>
            <a
              href="https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20get%20information%20about%20document%20attestation%20and%20apostille."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center gap-2"
              id="cta-whatsapp-btn"
            >
              <span>WhatsApp Expert Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">Support Desk</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1e3a8a] mt-2">
              Contact Our Documentation Experts
            </h2>
            <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Direct Contact info Cards */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left" id="contact-card-phone">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100/60 text-[#1e3a8a] rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#1e3a8a] text-sm uppercase tracking-wider">Direct Hotline</h4>
                    <p className="text-sm text-gray-500 mt-1">Available for phone consultation during office hours (9:00 AM to 7:00 PM).</p>
                    <a href="tel:+919818001166" className="text-lg font-bold text-[#1e3a8a] mt-2 block hover:text-[#d4af37] transition-colors">
                      +91-9818001166
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left" id="contact-card-whatsapp">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#1e3a8a] text-sm uppercase tracking-wider">WhatsApp support</h4>
                    <p className="text-sm text-gray-500 mt-1">Directly chat with an attestation desk officer for quick reviews and scanned document checks.</p>
                    <a 
                      href="https://wa.me/919818001166?text=Hi%2C%20I%20want%20to%20get%20information%20about%20document%20attestation%20and%20apostille." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-emerald-600 mt-2 block hover:text-[#d4af37] transition-colors"
                    >
                      +91-9818001166
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left" id="contact-card-email">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100/60 text-[#1e3a8a] rounded-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#1e3a8a] text-sm uppercase tracking-wider">Email Inquiry</h4>
                    <p className="text-sm text-gray-500 mt-1">Submit scanned documents for secure review. We provide custom quotes dynamically.</p>
                    <a href="mailto:info@embassyattestationindia.com" className="text-base font-bold text-[#1e3a8a] mt-2 block hover:text-[#d4af37] transition-colors">
                      info@embassyattestationindia.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-left" id="contact-card-address">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100/60 text-[#1e3a8a] rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[#1e3a8a] text-sm uppercase tracking-wider">Registered Head Office Address</h4>
                    <p className="text-sm text-gray-800 font-bold mt-1.5">Embassy Attestation India</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      34 Corner Market, Malviya Nagar, New Delhi – 110017, India
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Simulated Map Visualizer Grid Block */}
            <div className="lg:col-span-7 bg-[#f0f4f9] rounded-3xl border border-blue-50 p-6 flex flex-col justify-between overflow-hidden" id="interactive-map-visualizer">
              <div className="text-left mb-4">
                <span className="text-[10px] tracking-wider text-[#d4af37] font-extrabold uppercase">Physical Location Coordinates</span>
                <h4 className="font-serif font-bold text-lg text-[#1e3a8a] mt-1">Malviya Nagar Office Center Map</h4>
                <p className="text-xs text-gray-500 mt-0.5">Situated in the heart of South Delhi, adjacent to government transit sectors.</p>
              </div>

              {/* Styled Vector Map Mockup */}
              <div className="relative bg-white rounded-2xl border border-gray-100 flex-1 min-h-[250px] p-4 flex flex-col justify-center items-center text-center overflow-hidden">
                {/* SVG/Styled Map background circles and lines */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute w-[600px] h-[600px] rounded-full border border-[#1e3a8a] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-[#1e3a8a] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-[200px] h-[200px] rounded-full border border-[#1e3a8a] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-300"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-300"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-4 bg-gradient-to-br from-amber-500 to-amber-600 text-[#0f172a] rounded-full shadow-lg ring-8 ring-amber-500/20 animate-bounce">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h5 className="font-serif font-bold text-[#1e3a8a] text-sm mt-4">34 Corner Market, Malviya Nagar</h5>
                  <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-widest font-bold">New Delhi - 110017</p>
                  
                  <div className="mt-4 flex gap-2">
                    <span className="text-[10px] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full text-blue-700 font-bold flex items-center gap-1">
                      🚇 Malviya Nagar Metro Stn (300m)
                    </span>
                    <span className="text-[10px] bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full text-slate-700 font-bold flex items-center gap-1">
                      🅿️ Free Parking Available
                    </span>
                  </div>
                </div>

                {/* Simulated Map Navigation coordinates */}
                <div className="absolute bottom-3 left-3 text-[10px] font-mono text-gray-400">
                  LAT: 28.5361° N • LON: 77.2241° E
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[11px] text-gray-500 text-left">We welcome personal handovers of certificates. Office open Monday to Saturday, 9:30 AM to 6:30 PM.</span>
                <a 
                  href="https://maps.google.com/?q=34+Corner+Market,+Malviya+Nagar,+New+Delhi+110017" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 shadow-sm"
                  id="direct-navigation-btn"
                >
                  <Locate className="w-3.5 h-3.5 text-amber-600" />
                  <span>Navigate with GPS</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer onScrollTo={handleScrollTo} onOpenQuote={() => handleOpenQuote()} />

      {/* Free Quote Consultation form Modal */}
      <FormModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        prefilledDoc={prefilledDoc} 
        prefilledCountry={prefilledCountry} 
      />

    </div>
  );
}
