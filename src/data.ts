/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocumentType, Country, FAQItem } from './types';

export const DOCUMENT_TYPES: DocumentType[] = [
  // Educational
  {
    id: 'degree',
    name: 'Degree Certificate',
    category: 'educational',
    description: 'Degree certificates issued by recognized Indian universities for higher education or employment abroad.',
    requiredDocs: ['Original Degree Certificate', 'All Year Mark Sheets / Transcripts', 'Passport Copy (First & Last Page)', 'Aadhar Card Copy', 'University Verification Letter (if required)']
  },
  {
    id: 'diploma',
    name: 'Diploma Certificate',
    category: 'educational',
    description: 'State Board or technical council diplomas required for professional licensing and visa approvals.',
    requiredDocs: ['Original Diploma Certificate', 'Mark Sheets', 'Passport Copy', 'Aadhar Card Copy']
  },
  {
    id: 'transcript',
    name: 'Academic Transcript',
    category: 'educational',
    description: 'Official academic transcripts sealed by university registrar, typically required for study visa and WES evaluation.',
    requiredDocs: ['Original Sealed Transcripts', 'Degree Certificate Copy', 'Passport Copy']
  },
  {
    id: 'nursing',
    name: 'Nursing Certificate',
    category: 'educational',
    description: 'Registration and degree certificates for medical professionals seeking nursing careers globally.',
    requiredDocs: ['Original Registration Certificate', 'Degree/Diploma Certificate', 'Passport Copy', 'Nursing Council Letter']
  },
  {
    id: 'pcc',
    name: 'Police Clearance Certificate (PCC)',
    category: 'personal',
    description: 'PCC issued by Passport Office or Local Police Station verifying clean background record.',
    requiredDocs: ['Original PCC Document', 'Passport Copy', 'Aadhar Card Copy', 'Address Proof']
  },
  // Personal
  {
    id: 'birth',
    name: 'Birth Certificate',
    category: 'personal',
    description: 'Government-issued birth certificates required for family visa sponsorship, child education, and migration.',
    requiredDocs: ['Original Birth Certificate', 'Passport Copy of Child', 'Passport Copy of Parents', 'Aadhar Card Copy']
  },
  {
    id: 'marriage',
    name: 'Marriage Certificate',
    category: 'personal',
    description: 'Legal certificate of marriage, vital for dependent/family visa applications, spouse name additions.',
    requiredDocs: ['Original Marriage Certificate', 'Passport Copies of Spouse (Both)', 'Aadhar Card Copy of Both', 'Joint Photograph (if required)']
  },
  {
    id: 'single_status',
    name: 'Single Status Certificate',
    category: 'personal',
    description: 'CENOMAR / Singlehood certificate for legal marriage registration in an international country.',
    requiredDocs: ['Original Affidavit of Single Status', 'Parents Joint Affidavit', 'Passport Copy', 'Aadhar Card Copy']
  },
  // Commercial
  {
    id: 'commercial_invoice',
    name: 'Commercial Invoice',
    category: 'commercial',
    description: 'Invoice document detailing transaction items, essential for global trade clearance and customs legalizations.',
    requiredDocs: ['Original Invoice with Chamber of Commerce Attestation', 'Company PAN & GST Certificate Copy', 'Director ID Proof', 'Covering Letter on Company Letterhead']
  },
  {
    id: 'certificate_of_origin',
    name: 'Certificate of Origin',
    category: 'commercial',
    description: 'Document declaring in which country a commodity or good was manufactured, crucial for exporters.',
    requiredDocs: ['Original Certificate of Origin (Chamber verified)', 'Commercial Invoice Copy', 'Packing List', 'Covering Letter']
  },
  {
    id: 'power_of_attorney',
    name: 'Power of Attorney (POA)',
    category: 'commercial',
    description: 'Legal authorization for international agents, business setup, real estate actions, or court representation.',
    requiredDocs: ['Original POA drafted on Stamp Paper', 'Board Resolution authorizing Signatory', 'Director ID Proofs', 'Company Registration Copy']
  },
  {
    id: 'moa_aoa',
    name: 'MOA & AOA Articles',
    category: 'commercial',
    description: 'Company Memorandum and Articles of Association for international branch setup or banking.',
    requiredDocs: ['Original MOA/AOA Booklets', 'ROC Registration Certificate', 'Board Resolution', 'Covering Letter']
  }
];

export const COUNTRIES: Country[] = [
  // Middle East
  { name: 'UAE', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '5-7', embassyFeeEstimate: '₹4,500 - ₹9,500' },
  { name: 'Saudi Arabia', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '7-10', embassyFeeEstimate: '₹6,000 - ₹11,000' },
  { name: 'Kuwait', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '8-12', embassyFeeEstimate: '₹5,500 - ₹8,500' },
  { name: 'Qatar', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '6-9', embassyFeeEstimate: '₹5,000 - ₹12,000' },
  { name: 'Oman', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '5-8', embassyFeeEstimate: '₹4,000 - ₹7,500' },
  { name: 'Bahrain', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '7-10', embassyFeeEstimate: '₹4,500 - ₹8,000' },
  { name: 'Iraq', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '10-15', embassyFeeEstimate: '₹8,000 - ₹14,000' },
  { name: 'Jordan', region: 'Middle East', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '8-11', embassyFeeEstimate: '₹5,000 - ₹9,000' },

  // Asia
  { name: 'China', region: 'Asia', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '6-8', embassyFeeEstimate: '₹3,500' }, // China joined Apostille Convention in late 2023
  { name: 'Vietnam', region: 'Asia', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '7-10', embassyFeeEstimate: '₹4,000 - ₹6,500' },
  { name: 'Malaysia', region: 'Asia', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '5-8', embassyFeeEstimate: '₹3,000 - ₹5,000' },
  { name: 'Singapore', region: 'Asia', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,500' },
  { name: 'Thailand', region: 'Asia', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '6-9', embassyFeeEstimate: '₹3,500 - ₹5,500' },
  { name: 'Japan', region: 'Asia', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,500' },
  { name: 'South Korea', region: 'Asia', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,500' },

  // Europe
  { name: 'France', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Germany', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Italy', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'Spain', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Portugal', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'Netherlands', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Belgium', region: 'Europe', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },

  // Africa
  { name: 'Egypt', region: 'Africa', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '8-12', embassyFeeEstimate: '₹5,000 - ₹9,000' },
  { name: 'Morocco', region: 'Africa', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' }, // Morocco is apostille member
  { name: 'Libya', region: 'Africa', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '12-18', embassyFeeEstimate: '₹8,000 - ₹12,000' },
  { name: 'Kenya', region: 'Africa', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'South Africa', region: 'Africa', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Nigeria', region: 'Africa', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '8-12', embassyFeeEstimate: '₹6,000 - ₹10,000' },
  { name: 'Ethiopia', region: 'Africa', requiresApostille: false, requiresEmbassyAttestation: true, baseTimelineDays: '9-13', embassyFeeEstimate: '₹5,500 - ₹8,500' },

  // Americas
  { name: 'United States', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '3-5', embassyFeeEstimate: '₹2,200' },
  { name: 'Canada', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' }, // Canada joined Jan 2024
  { name: 'Mexico', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'Brazil', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'Argentina', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' },
  { name: 'Chile', region: 'Americas', requiresApostille: true, requiresEmbassyAttestation: false, baseTimelineDays: '4-6', embassyFeeEstimate: '₹2,500' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Embassy Attestation?',
    answer: 'Embassy Attestation is the process of legalizing Indian documents through the embassy or consulate of the destination country. This makes your certificates officially recognized, authentic, and legally valid in that nation for employment, study, or trade.'
  },
  {
    id: 'faq-2',
    question: 'What is MEA Apostille?',
    answer: 'An MEA Apostille is an authentication sticker and stamp issued by the Ministry of External Affairs (MEA), Government of India. It is done on Indian public documents intended for use in countries that are member states of the Hague Apostille Convention. Once apostilled, it does not require further embassy attestation in the destination country.'
  },
  {
    id: 'faq-3',
    question: 'Which documents can be attested or apostilled?',
    answer: 'Documents are broadly classified into three categories:\n1. Educational Certificates: Degree, Diploma, Matriculation, Post-Graduation, transcripts, etc.\n2. Personal Documents: Birth Certificate, Marriage Certificate, PCC (Police Clearance Certificate), Power of Attorney (personal), Single Status Certificate, death or divorce certificates.\n3. Commercial Documents: Commercial Invoice, Certificate of Origin, MOA, AOA, Power of Attorney (corporate), board resolutions, export-import license copies.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide services across India?',
    answer: 'Yes. We provide complete PAN India services. No matter where you reside in India (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Cochin, Ahmedabad, etc.), you can easily courier your documents to our head office. We handle verification, processing, and return them securely to your doorstep with tracking.'
  },
  {
    id: 'faq-5',
    question: 'How long does the entire attestation or apostille process take?',
    answer: 'The time taken depends on the document type, the destination country, and state-level verifications. Standard MEA Apostille takes about 3-5 working days. Embassy Attestation for Gulf countries (like UAE, Saudi, Qatar) typically takes 5-10 working days, as it involves state verification, MEA, and then the embassy process.'
  },
  {
    id: 'faq-6',
    question: 'Is it safe to courier original documents to you?',
    answer: 'Absolutely. We prioritize document security above everything else. We use highly secure, insured, and tracked shipping networks (DHL, BlueDart, FedEx). Over the last decade, we have safely processed over 50,000+ original documents without a single loss. Each document is stored in weatherproof fireproof digital lockers during transit and verification.'
  },
  {
    id: 'faq-7',
    question: 'What is State HRD/GAD Attestation, and is it mandatory?',
    answer: 'For educational documents, most embassies require the certificate to be first attested by the respective state Human Resource Development (HRD) department or GAD (General Administration Department) before the MEA or Embassy will process it. We assist you in getting state HRD/GAD attestation dynamically so you do not have to travel back to your graduation state.'
  }
];

export const ADVANTAGES = [
  { title: 'Experienced Documentation Specialists', desc: 'Over a decade of handling complex global attestation and immigration paperwork safely.', icon: 'ShieldCheck' },
  { title: 'PAN India Services', desc: 'Secure courier collection and door-to-door delivery across all major cities and remote towns in India.', icon: 'MapPin' },
  { title: 'Secure Document Handling', desc: 'Weatherproof filing, 24/7 security, and tracked transit for complete peace of mind with original documents.', icon: 'Lock' },
  { title: 'Transparent Pricing', desc: 'No hidden agent fees, clear breakdown of government embassy costs, and easy digital receipt generation.', icon: 'CreditCard' },
  { title: 'Timely Processing', desc: 'Direct, daily submissions to the Ministry of External Affairs and major embassies to guarantee swift turnaround times.', icon: 'CalendarDays' },
  { title: 'Dedicated Customer Support', desc: 'Personal attestation officers allocated to guide you, providing direct SMS, WhatsApp, and call updates.', icon: 'Headphones' },
  { title: 'Support for Multiple Countries', desc: 'Legalization expertise spanning Middle-East, Europe, Americas, Asia, and African continents.', icon: 'Globe' },
  { title: 'Assistance for Students, Professionals & Exporters', desc: 'Customized workflows tailored for student admissions, work visa permits, and commercial trade compliance.', icon: 'Briefcase' }
];
