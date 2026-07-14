/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { DOCUMENT_TYPES, COUNTRIES } from '../data';
import { DocumentType, Country } from '../types';
import { 
  Calculator as CalcIcon, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Clock, 
  HelpCircle, 
  Bookmark, 
  FileCheck2, 
  Coins, 
  MessageSquare, 
  Smartphone 
} from 'lucide-react';

interface CalculatorProps {
  onStartProcess: (docName: string, countryName: string) => void;
}

export default function Calculator({ onStartProcess }: CalculatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<'educational' | 'personal' | 'commercial'>('educational');
  const [selectedDocId, setSelectedDocId] = useState<string>('');
  const [selectedCountryName, setSelectedCountryName] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);

  // Filter documents by category
  const documents = useMemo(() => {
    const docs = DOCUMENT_TYPES.filter(doc => {
      if (selectedCategory === 'educational') {
        return doc.category === 'educational' || doc.id === 'diploma'; // diploma is academic
      }
      return doc.category === selectedCategory;
    });
    return docs;
  }, [selectedCategory]);

  // Set default document when category changes
  React.useEffect(() => {
    if (documents.length > 0) {
      setSelectedDocId(documents[0].id);
    }
  }, [documents]);

  // Set default country if not selected
  React.useEffect(() => {
    if (!selectedCountryName && COUNTRIES.length > 0) {
      setSelectedCountryName(COUNTRIES[0].name);
    }
  }, [selectedCountryName]);

  const selectedDoc = useMemo(() => {
    return DOCUMENT_TYPES.find(d => d.id === selectedDocId);
  }, [selectedDocId]);

  const selectedCountry = useMemo(() => {
    return COUNTRIES.find(c => c.name === selectedCountryName);
  }, [selectedCountryName]);

  // Calculate dynamic steps based on document category and country specs
  const attestationSteps = useMemo(() => {
    if (!selectedDoc || !selectedCountry) return [];

    const steps = [];
    
    // Step 1: Initial verification
    if (selectedDoc.category === 'educational' || selectedDoc.id === 'diploma') {
      steps.push({
        title: 'Step 1: State HRD / GAD Attestation',
        desc: 'Verification by the regional Human Resource Development (HRD) or General Administration Department (GAD) of the respective state government where the certificate was issued.',
        required: true,
        bg: 'bg-blue-50'
      });
    } else if (selectedDoc.category === 'personal') {
      steps.push({
        title: 'Step 1: Notary Public & Sub-Divisional Magistrate (SDM) / Home Dept',
        desc: 'First verified by a local Notary, followed by the Home Department or SDM in New Delhi.',
        required: true,
        bg: 'bg-blue-50'
      });
    } else if (selectedDoc.category === 'commercial') {
      steps.push({
        title: 'Step 1: Chamber of Commerce Authentication',
        desc: 'Pre-requisite certification by the local Chamber of Commerce to verify the company’s seal, registration and financial credentials.',
        required: true,
        bg: 'bg-blue-50'
      });
    }

    // Step 2: MEA Authentication
    if (selectedCountry.requiresApostille) {
      steps.push({
        title: 'Step 2: MEA Apostille Stamp',
        desc: 'The Ministry of External Affairs (MEA), Government of India, issues a unique square Apostille sticker with security holograms. This fully legalizes it for use in Hague Convention member nations.',
        required: true,
        bg: 'bg-amber-50/50'
      });
    } else {
      steps.push({
        title: 'Step 2: MEA Attestation (Consular Division)',
        desc: 'The Ministry of External Affairs (MEA) verifies and stamps the document, rendering it ready for embassy submission.',
        required: true,
        bg: 'bg-amber-50/50'
      });
    }

    // Step 3: Embassy Leglization (if not apostille country)
    if (selectedCountry.requiresEmbassyAttestation) {
      steps.push({
        title: `Step 3: ${selectedCountry.name} Embassy Attestation`,
        desc: `Final and absolute legalization by the Embassy or Consulate of ${selectedCountry.name} in India, placing their official government seal and sign.`,
        required: true,
        bg: 'bg-indigo-50/40'
      });
    }

    return steps;
  }, [selectedDoc, selectedCountry]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const getWhatsAppLink = () => {
    if (!selectedDoc || !selectedCountry) return '#';
    const message = `Hi, I want to inquire about MEA/Embassy Attestation.\n\n📄 Document: ${selectedDoc.name}\n📍 Target Country: ${selectedCountry.name}\n📂 Category: ${selectedDoc.category.toUpperCase()}`;
    return `https://wa.me/919818001166?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white rounded-sm border-2 border-slate-900 shadow-sm overflow-hidden" id="interactive-calculator">
      
      {/* Header Banner */}
      <div className="bg-slate-900 px-6 py-5 text-white flex items-center gap-3">
        <div className="w-10 h-10 bg-slate-800 flex items-center justify-center rounded-sm">
          <div className="border-2 border-white w-6 h-6 rotate-45"></div>
        </div>
        <div>
          <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">Interactive Attestation Planner</h3>
          <p className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">timelines & checklists in 10 seconds</p>
        </div>
      </div>

      <div className="p-6">
        {/* Step 1: Selection Form */}
        <form onSubmit={handleCalculate} className="space-y-6">
          
          {/* Category Tabs */}
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">1. Select Document Category</label>
            <div className="grid grid-cols-3 gap-2">
              {(['educational', 'personal', 'commercial'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowResult(false);
                  }}
                  className={`py-2.5 px-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100'
                  }`}
                  id={`calc-cat-tab-${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Document Select */}
            <div>
              <label htmlFor="calc-doc-select" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">2. Specific Document</label>
              <select
                id="calc-doc-select"
                value={selectedDocId}
                onChange={(e) => {
                  setSelectedDocId(e.target.value);
                  setShowResult(false);
                }}
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2.5 px-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 uppercase tracking-wide"
              >
                {documents.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Select */}
            <div>
              <label htmlFor="calc-country-select" className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">3. Destination Country</label>
              <select
                id="calc-country-select"
                value={selectedCountryName}
                onChange={(e) => {
                  setSelectedCountryName(e.target.value);
                  setShowResult(false);
                }}
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2.5 px-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 uppercase tracking-wide"
              >
                {COUNTRIES.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name} ({country.requiresApostille ? 'Apostille' : 'Embassy'})
                  </option>
                ))}
              </select>
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="calc-submit-btn"
          >
            <span>Generate Attestation Plan</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </button>
        </form>

        {/* Plan Output Result Panel */}
        {showResult && selectedDoc && selectedCountry && (
          <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn" id="calc-result-panel">
            
            {/* Quick Summary Header */}
            <div className="bg-slate-50 border border-slate-200 rounded-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-[9px] tracking-wider uppercase font-bold text-slate-900 bg-amber-400 px-2.5 py-0.5 rounded-sm border border-slate-900">
                  {selectedCountry.requiresApostille ? 'Hague Apostille Process' : 'Embassy Legalization'}
                </span>
                <h4 className="font-sans font-bold text-slate-900 text-base mt-2 uppercase tracking-wide">
                  {selectedDoc.name} &rarr; {selectedCountry.name}
                </h4>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">EST. Timeline</p>
                    <p className="text-xs font-bold text-slate-900">{selectedCountry.baseTimelineDays} Days</p>
                  </div>
                </div>
                <div className="h-8 w-[1px] bg-slate-200"></div>
                <div className="flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Estimated cost</p>
                    <p className="text-xs font-bold text-slate-900">{selectedCountry.requiresApostille ? 'Transparent' : selectedCountry.embassyFeeEstimate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step-by-Step Pathway */}
            <div className="mb-6">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-slate-900" />
                Mandatory Authorization Pathway
              </h5>
              
              <div className="space-y-4 relative before:absolute before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
                {attestationSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-12 pr-4 py-4 rounded-sm border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors">
                    {/* Circle counter */}
                    <div className="absolute left-3.5 top-4 w-4 h-4 rounded-sm bg-slate-900 text-amber-400 flex items-center justify-center text-[9px] font-bold">
                      {idx + 1}
                    </div>
                    <h6 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1">{step.title}</h6>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist Box */}
            <div className="border border-slate-200 bg-slate-50 rounded-sm p-5 mb-8">
              <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-500" />
                Required Documents Checklist (to submit)
              </h5>
              <p className="text-[11px] text-slate-500 mb-4 font-medium">Please prepare these physical documents for our secure courier collection:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedDoc.requiredDocs.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Panel */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider text-center shadow-sm flex items-center justify-center gap-2 transition-all"
                id="calc-whatsapp-cta"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                Inquire on WhatsApp
              </a>
              <button
                type="button"
                onClick={() => onStartProcess(selectedDoc.name, selectedCountry.name)}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                id="calc-form-cta"
              >
                <span>Free Quotation</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
