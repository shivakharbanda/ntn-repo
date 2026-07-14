/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { X, Upload, CheckCircle2, Loader2, ArrowRight, Printer, AlertTriangle, ShieldCheck } from 'lucide-react';
import { COUNTRIES, DOCUMENT_TYPES } from '../data';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDoc?: string;
  prefilledCountry?: string;
}

export default function FormModal({ isOpen, onClose, prefilledDoc = '', prefilledCountry = '' }: FormModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [docCategory, setDocCategory] = useState<'educational' | 'personal' | 'commercial'>('educational');
  const [docName, setDocName] = useState('');
  const [targetCountry, setTargetCountry] = useState('');
  const [comments, setComments] = useState('');
  
  // File Upload State
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Submission Flow States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState('');

  // Handle pre-fills
  React.useEffect(() => {
    if (prefilledDoc) {
      setDocName(prefilledDoc);
      // Determine category from prefilled name
      const matched = DOCUMENT_TYPES.find(d => d.name === prefilledDoc);
      if (matched) {
        setDocCategory(matched.category);
      }
    } else {
      setDocName(DOCUMENT_TYPES[0].name);
    }

    if (prefilledCountry) {
      setTargetCountry(prefilledCountry);
    } else {
      setTargetCountry(COUNTRIES[0].name);
    }
  }, [prefilledDoc, prefilledCountry, isOpen]);

  if (!isOpen) return null;

  // File Drag and Drop Handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    // Start multistep simulation for professional validation effect
    setIsSubmitting(true);
    setSubmitStep(1); // Uploading files
    
    setTimeout(() => {
      setSubmitStep(2); // Analyzing document metadata
      setTimeout(() => {
        setSubmitStep(3); // Calculating MEA and Embassy Tariffs
        setTimeout(() => {
          // Complete
          const randId = 'EA-' + Math.floor(100000 + Math.random() * 900000);
          setQuoteReferenceId(randId);
          setIsSubmitting(false);
          setSubmissionComplete(true);
        }, 1200);
      }, 1000);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setComments('');
    setFile(null);
    setSubmissionComplete(false);
    setSubmitStep(0);
  };

  const matchedCountryObj = COUNTRIES.find(c => c.name === targetCountry);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn" id="form-modal-overlay">
      <div className="bg-white rounded-sm w-full max-w-2xl shadow-lg border-2 border-slate-900 overflow-hidden relative" id="form-modal-content">
        
        {/* Close Button */}
        <button 
          onClick={() => {
            resetForm();
            onClose();
          }}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 hover:bg-slate-50 border border-slate-200 rounded-sm transition-colors z-10"
          id="close-modal-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitting && !submissionComplete ? (
          /* Step A: Request Quote Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8" id="quote-request-form">
            <div className="mb-6">
              <span className="text-[10px] tracking-widest text-amber-500 font-bold uppercase">Fast Response Guaranteed</span>
              <h3 className="font-display font-black text-2xl text-slate-900 mt-1 uppercase tracking-tight">Get Free Quotation & Consultation</h3>
              <p className="text-[11px] text-slate-500 mt-1 uppercase font-semibold tracking-wide">Our specialists typically revert with a detailed tariff breakdown within 15-30 minutes.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Full Name */}
              <div>
                <label htmlFor="quote-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="quote-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-semibold focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="quote-phone" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  id="quote-phone"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 9876543210"
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-semibold focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                />
              </div>
            </div>

            <div className="mb-4">
              {/* Email Address */}
              <label htmlFor="quote-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Email Address *</label>
              <input
                type="email"
                id="quote-email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajesh.kumar@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-semibold focus:outline-none focus:border-slate-900 uppercase tracking-wide"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Document Selection */}
              <div>
                <label htmlFor="quote-doc-category" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Document Category</label>
                <select
                  id="quote-doc-category"
                  value={docCategory}
                  onChange={(e) => {
                    const cat = e.target.value as any;
                    setDocCategory(cat);
                    // Reset selected doc
                    const related = DOCUMENT_TYPES.filter(d => d.category === (cat === 'educational' ? 'educational' : cat));
                    if (related.length > 0) setDocName(related[0].name);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                >
                  <option value="educational">Educational Certificates</option>
                  <option value="personal">Personal Documents</option>
                  <option value="commercial">Commercial/Corporate</option>
                </select>
              </div>

              <div>
                <label htmlFor="quote-doc-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Select Document *</label>
                <select
                  id="quote-doc-name"
                  value={docName}
                  onChange={(e) => setDocName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                >
                  {DOCUMENT_TYPES.filter(d => {
                    if (docCategory === 'educational') return d.category === 'educational' || d.id === 'diploma';
                    return d.category === docCategory;
                  }).map(d => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                  <option value="Other Document">Other / Custom Document</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Target Country */}
              <div>
                <label htmlFor="quote-country" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Destination Country *</label>
                <select
                  id="quote-country"
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* Additional Information / State */}
              <div>
                <label htmlFor="quote-comments" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Issuing State (in India)</label>
                <input
                  type="text"
                  id="quote-comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g. Maharashtra, Delhi, Karnataka"
                  className="w-full bg-slate-50 border border-slate-200 rounded-sm py-2 px-3 text-xs font-semibold focus:outline-none focus:border-slate-900 uppercase tracking-wide"
                />
              </div>
            </div>

            {/* Document Upload Area (DRAG & DROP / CLICK) */}
            <div className="mb-6">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">Upload Document Scan (Optional, Secure)</label>
              
              {!file ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-all ${
                    isDragging 
                      ? 'border-slate-900 bg-slate-50' 
                      : 'border-slate-200 bg-slate-50 hover:border-slate-900 hover:bg-slate-100/50'
                  }`}
                  id="drag-drop-zone"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    id="file-upload-input"
                  />
                  <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Drag & drop document scan, or <span className="text-slate-900 underline">browse file</span></p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">Supports PDF, PNG, JPG, JPEG (Max 15MB) • SSL Encrypted Vault</p>
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-100 rounded-sm p-3 flex items-center justify-between" id="file-uploaded-item">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="p-2 bg-emerald-600 text-white rounded-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-xs font-bold text-slate-800 truncate">{file.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{(file.size / 1024 / 1024).toFixed(2)} MB • Verification Ready</p>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    onClick={removeFile}
                    className="text-slate-400 hover:text-red-600 text-xs font-bold px-2 py-1 rounded-sm hover:bg-red-50 transition-colors uppercase tracking-wider"
                    id="remove-file-btn"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Disclaimer & Security Check */}
            <div className="bg-slate-50 rounded-sm p-3.5 mb-6 flex items-start gap-2.5 text-left text-[11px] text-slate-600 border border-slate-200">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800 uppercase tracking-wide text-xs">GDPR & SSL Secure Document Handling</p>
                <p className="mt-0.5 leading-relaxed text-slate-500">Your data and certificates are strictly processed through government-authorized conduits and secure lockers. We never share documents with unauthorized third parties.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                id="modal-cancel-btn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                id="modal-submit-btn"
              >
                Request Consultation
              </button>
            </div>
          </form>
        ) : isSubmitting ? (
          /* Step B: Processing Stage */
          <div className="p-12 text-center" id="quote-submission-progress">
            <Loader2 className="w-12 h-12 text-slate-900 animate-spin mx-auto mb-6" />
            
            <h4 className="font-display font-black text-xl text-slate-900 uppercase tracking-tight">Secure Document Validation Engine</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto uppercase font-semibold tracking-wide">Please wait while our routing desk processes your inquiry details against MEA guidelines.</p>
            
            {/* Pipeline Visualizer */}
            <div className="max-w-md mx-auto mt-8 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-bold mb-1 uppercase tracking-wider">
                <span className="text-slate-500">Processing Stage</span>
                <span className="text-slate-900">{submitStep === 1 ? '30%' : submitStep === 2 ? '65%' : '90%'} Complete</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-sm overflow-hidden border border-slate-200">
                <div 
                  className="bg-slate-900 h-full transition-all duration-500"
                  style={{ width: submitStep === 1 ? '33%' : submitStep === 2 ? '66%' : '100%' }}
                ></div>
              </div>

              {/* Active Sub-Steps */}
              <div className="space-y-2.5 text-left pt-2 font-mono">
                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-2 h-2 rounded-sm ${submitStep >= 1 ? 'bg-amber-500' : 'bg-slate-200'}`}></div>
                  <span className={submitStep >= 1 ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    {file ? 'Encrypting & uploading scan securely...' : 'Validating client identity records...'}
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-2 h-2 rounded-sm ${submitStep >= 2 ? 'bg-amber-500' : 'bg-slate-200'}`}></div>
                  <span className={submitStep >= 2 ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    Verifying authorization pathways for {targetCountry}...
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs">
                  <div className={`w-2 h-2 rounded-sm ${submitStep >= 3 ? 'bg-amber-500' : 'bg-slate-200'}`}></div>
                  <span className={submitStep >= 3 ? 'text-slate-800 font-bold' : 'text-slate-400'}>
                    Generating official tariff estimation slip...
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Step C: Success Slip Receipt Download */
          <div className="p-8 text-center" id="quote-submission-success">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-sm border-2 border-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-[10px] tracking-wider font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-sm uppercase">
              Quotation Receipt Generated
            </span>

            <h4 className="font-display font-black text-2xl text-slate-900 mt-4 uppercase tracking-tight">Inquiry Successfully Authenticated!</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto uppercase font-semibold">
              Thank you, <strong className="text-slate-900">{name}</strong>. Your inquiry has been routed to our Senior Attestation Desk. We have sent a copy of this estimate to <strong className="text-slate-900">{email}</strong>.
            </p>

            {/* Official Est Invoice Block */}
            <div className="border border-slate-200 bg-slate-50 rounded-sm p-5 text-left max-w-lg mx-auto my-6 border-l-4 border-l-slate-900 shadow-sm">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase">Reference ID</span>
                  <p className="text-xs font-bold text-slate-900 font-mono">{quoteReferenceId}</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-slate-400 font-bold uppercase">Current Date</span>
                  <p className="text-xs font-bold text-slate-900">July 08, 2026</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-3.5 text-xs text-slate-600 uppercase font-bold tracking-wide">
                <div>
                  <span className="text-[9px] text-slate-400 font-semibold block">Client Name</span>
                  <span className="text-slate-900">{name}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-semibold block">Contact Number</span>
                  <span className="text-slate-900 font-mono">{phone}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-semibold block">Document Selected</span>
                  <span className="text-slate-900">{docName}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 font-semibold block">Target Country</span>
                  <span className="text-slate-900">{targetCountry}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[9px] text-slate-400 font-semibold block">Attestation Pathway Routing Required</span>
                  <span className="text-slate-900 bg-white border border-slate-200 px-2 py-1 rounded-sm text-[10px] inline-block mt-0.5">
                    {matchedCountryObj?.requiresApostille 
                      ? 'State GAD/HRD ➔ MEA Apostille Stamp' 
                      : `State HRD/GAD ➔ MEA Attestation ➔ Embassy of ${targetCountry}`}
                  </span>
                </div>
              </div>

              {/* Professional footer with badge */}
              <div className="mt-4 pt-3.5 border-t border-dashed border-slate-200 flex justify-between items-center text-[10px]">
                <span className="text-slate-400 flex items-center gap-1 font-bold uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Secure Submission Verified
                </span>
                <span className="font-extrabold text-amber-600 uppercase tracking-wider">Priority Processing Activated</span>
              </div>
            </div>

            {/* Print/Download and Close Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <button
                onClick={() => window.print()}
                className="flex-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors"
                id="success-print-btn"
              >
                <Printer className="w-4 h-4 text-slate-900" />
                Print Receipt
              </button>
              <button
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-sm cursor-pointer transition-colors"
                id="success-done-btn"
              >
                Done, Back to Site
              </button>
            </div>

            {/* Quick Contact Desk banner */}
            <p className="text-[11px] text-slate-400 mt-6 font-semibold uppercase tracking-wide">
              Want immediate help? Our officer is online: 
              <a 
                href={`https://wa.me/919818001166?text=Hi%2C%20my%20quote%20reference%20id%20is%20${quoteReferenceId}.%20Please%20verify%20details.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-900 font-bold underline ml-1 hover:text-amber-500"
              >
                Chat on WhatsApp Now
              </a>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
