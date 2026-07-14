/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Shield, Star, Award, Calendar, CheckSquare } from 'lucide-react';

interface FooterProps {
  onScrollTo: (elementId: string) => void;
  onOpenQuote: () => void;
}

export default function Footer({ onScrollTo, onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900" id="seo-footer">
      
      {/* Upper Footer - Trust Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-slate-900">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 text-amber-500 rounded-sm border border-slate-800">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">100% Secure Custody</h4>
              <p className="text-xs text-slate-400 mt-1">Weatherproof fireproof lockers & courier insurance for all original documents.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 text-amber-500 rounded-sm border border-slate-800">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">ISO 9001:2015 Process</h4>
              <p className="text-xs text-slate-400 mt-1">Certified quality management system ensuring error-free multi-state processing.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 text-amber-500 rounded-sm border border-slate-800">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">Govt Approved Submissions</h4>
              <p className="text-xs text-slate-400 mt-1">Authorized submissions directly to MEA Consular vaults and embassy channels.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 bg-slate-900 text-amber-500 rounded-sm border border-slate-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-white uppercase tracking-wider">Daily Transit Batches</h4>
              <p className="text-xs text-slate-400 mt-1">Daily dispatch to Embassies cuts waiting times by up to 3 working days.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Middle Footer - Nav, Keywords, Contact Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-sm border border-slate-800">
                <div className="border-2 border-white w-6 h-6 rotate-45"></div>
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight uppercase">
                EMBASSY <span className="text-amber-500">ATTESTATION</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Embassy Attestation India is India’s foremost document authentication facilitator. We provide streamlined, secure, and government-approved legalizations for students, working professionals, corporate clients, and international exporters.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">New Delhi Head Office:</p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>34 Corner Market, Malviya Nagar, New Delhi – 110017, India</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-bold uppercase tracking-wide">
              <li>
                <button onClick={() => onScrollTo('services')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('who-we-serve')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Who We Serve
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('countries')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Countries We Support
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('how-it-works')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  Execution Workflow
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('faqs')} className="hover:text-amber-500 transition-colors cursor-pointer text-left">
                  FAQs & Support
                </button>
              </li>
              <li>
                <button onClick={onOpenQuote} className="hover:text-amber-500 text-amber-500 font-black transition-colors cursor-pointer text-left">
                  Request Quotation
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Core Legalizations</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-bold uppercase tracking-wide">
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Degree Attestation
              </li>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Marriage Attestation
              </li>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Birth Legalization
              </li>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> MEA Apostille Stamp
              </li>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Commercial Attestation
              </li>
              <li className="flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-amber-500 shrink-0" /> PCC / Background
              </li>
            </ul>
          </div>

          {/* Urgent Contact Desk */}
          <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-sm p-5 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              Emergency Desk
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Visa deadline nearing? Speak to a designated Attestation Director directly.
            </p>
            <div className="space-y-2.5">
              <a 
                href="tel:+919818001166" 
                className="flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-700 px-3 py-2 rounded-sm text-xs font-bold text-white transition-colors"
                id="footer-call"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>+91-9818001166</span>
              </a>
              <a 
                href="mailto:info@embassyattestationindia.com" 
                className="flex items-center gap-2 bg-slate-950 border border-slate-800 hover:border-slate-700 px-3 py-2 rounded-sm text-xs font-bold text-slate-300 transition-colors"
                id="footer-email"
              >
                <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">info@embassyattestationindia.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Global Regions bar integrated from Geometric Balance Design */}
        <div className="mt-10 bg-slate-900 p-4 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-sm">
          <div className="flex gap-4 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/20px-Flag_of_India.svg.png" alt="India" className="w-5 h-3.5 object-cover referrerPolicy='no-referrer'" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/20px-Flag_of_the_United_Arab_Emirates.svg.png" alt="UAE" className="w-5 h-3.5 object-cover referrerPolicy='no-referrer'" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/20px-Flag_of_Saudi_Arabia.svg.png" alt="Saudi" className="w-5 h-3.5 object-cover referrerPolicy='no-referrer'" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Germany.svg/20px-Flag_of_Germany.svg.png" alt="Germany" className="w-5 h-3.5 object-cover referrerPolicy='no-referrer'" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/20px-Flag_of_the_United_States.svg.png" alt="USA" className="w-5 h-3.5 object-cover referrerPolicy='no-referrer'" />
          </div>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Supporting 100+ Global Regions</span>
        </div>
      </div>

      {/* SEO Bottom Section & Literal Copy Block */}
      <div className="bg-slate-950 text-gray-500 text-[11px] py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Literal User SEO Requirement Block */}
          <div className="p-4 bg-slate-900/60 rounded-lg text-gray-400 leading-relaxed border border-slate-800/40 text-justify" id="literal-seo-disclaimer">
            <span className="font-bold text-gray-300 block mb-1">Official Services Overview & Coverage Index:</span>
            Embassy Attestation India provides professional MEA Apostille, Embassy Attestation, Certificate Attestation, Document Legalization, Educational Certificate Attestation, Commercial Document Attestation, Personal Document Attestation, PCC Attestation, and Embassy Legalization Services across India. We proudly assist students, professionals, exporters, manufacturers, and businesses with document authentication for countries including the UAE, Saudi Arabia, Kuwait, Qatar, Oman, Bahrain, China, Vietnam, Malaysia, France, Germany, and many more.
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400 pt-4 border-t border-slate-900">
            <div>
              © {currentYear} Embassy Attestation India. All Rights Reserved.
            </div>
            <div className="flex gap-4">
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>256-Bit SSL Secured</span>
              <span>•</span>
              <span>MEA Government Registered Liaison</span>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
