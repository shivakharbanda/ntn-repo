/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DocumentType {
  id: string;
  name: string;
  category: 'educational' | 'personal' | 'commercial';
  description: string;
  requiredDocs: string[];
}

export interface Country {
  name: string;
  region: 'Middle East' | 'Asia' | 'Europe' | 'Africa' | 'Americas';
  requiresApostille: boolean; // Hague Apostille Convention
  requiresEmbassyAttestation: boolean;
  baseTimelineDays: string;
  embassyFeeEstimate: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}
